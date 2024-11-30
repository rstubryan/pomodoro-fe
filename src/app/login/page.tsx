"use client";

import * as React from "react";
import { useForm } from "@tanstack/react-form";
import type { FieldApi } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SubHeading } from "@/components/atoms/Typography";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CircleX } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <span className="text-xs font-light text-red-500">
          {field.state.meta.errors.join(", ")}
        </span>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

export default function Login() {
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      // Submit form data to the server
      const response = await fetch("http://localhost:8000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setError(null);
        const token = data.token;
        const decoded = jwtDecode(token);
        Cookies.set("user", JSON.stringify(decoded), { expires: 7 });
        redirect("/dashboard");
      }
    },
  });

  return (
    <div>
      <SubHeading className={`text-center`}>Login</SubHeading>
      {error && (
        <Alert variant="destructive" className={`my-2`}>
          <CircleX className={`h-4 w-4`} />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <form
        className={`space-y-4`}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div>
          <form.Field
            name="username"
            validators={{
              onChange: ({ value }) =>
                !value ? "A username is required" : undefined,
            }}
            children={(field) => (
              <>
                <Label htmlFor={field.name}>Username</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <div>
          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) =>
                !value ? "A password is required" : undefined,
            }}
            children={(field) => (
              <>
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button className={`w-full`} type="submit" disabled={!canSubmit}>
              {isSubmitting ? "..." : "Login"}
            </Button>
          )}
        />
      </form>
    </div>
  );
}
