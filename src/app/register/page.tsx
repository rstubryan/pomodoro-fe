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

export default function Register() {
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      try {
        const response = await fetch("http://localhost:8000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.error || "An unknown error occurred");
        } else {
          setError(null);
          console.log(data);
        }
      } catch (err) {
        setError("An error occurred while processing your request");
      }
    },
  });

  return (
    <div>
      <SubHeading className={`text-center`}>Register</SubHeading>
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
            name="email"
            validators={{
              onChange: ({ value }) =>
                !value ? "An email is required" : undefined,
            }}
            children={(field) => (
              <>
                <Label htmlFor={field.name}>Email</Label>
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
              {isSubmitting ? "..." : "Register"}
            </Button>
          )}
        />
      </form>
    </div>
  );
}
