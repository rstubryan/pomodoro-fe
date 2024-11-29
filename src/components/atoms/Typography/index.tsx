import * as React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

const PomoHeading = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          "scroll-m-20 text-8xl font-extrabold tracking-tight",
          className,
        )}
        {...props}
      >
        {children}
      </h1>
    );
  },
);
PomoHeading.displayName = "PomoHeadingText";

interface HeadingProps extends TypographyProps {
  variant?: "base" | "title";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, variant = "base", ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          `scroll-m-20 font-extrabold tracking-tight ${
            variant === "base"
              ? "text-2xl lg:text-4xl"
              : variant === "title"
                ? "text-3xl lg:text-5xl"
                : ""
          }`,
          className,
        )}
        {...props}
      >
        {children}
      </h1>
    );
  },
);
Heading.displayName = "HeadingText";

const SubHeading = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl",
          className,
        )}
        {...props}
      >
        {children}
      </h2>
    );
  },
);
SubHeading.displayName = "SubHeadingText";

const Paragraph = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "text-sm leading-7 lg:text-base [&:not(:first-child)]:mt-6",
          className,
        )}
        {...props}
      >
        {children}
      </p>
    );
  },
);
Paragraph.displayName = "ParagraphText";

export { PomoHeading, Heading, SubHeading, Paragraph };
