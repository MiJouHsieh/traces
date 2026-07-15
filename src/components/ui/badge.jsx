import { cn } from "@/lib/utils";

function Badge({ className, variant = "default", ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variant === "secondary" &&
          "bg-secondary text-secondary-foreground border-transparent",
        variant === "default" &&
          "bg-primary text-primary-foreground border-transparent",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
