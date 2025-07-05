import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

// Genesis Gold button (proper brand color: rgb(251, 189, 35))
export const GoldButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        "font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-200",
        "bg-[rgb(251,189,35)] hover:bg-[rgb(245,158,11)] text-black",
        className,
      )}
      {...props}
    />
  );
});

// White outline button for dark backgrounds
export const WhiteOutlineButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="outline"
      className={cn(
        "border-2 border-white text-black bg-white font-semibold transition-all duration-200",
        "hover:bg-white hover:text-black",
        className,
      )}
      {...props}
    />
  );
});

// Primary red button (Genesis Maroon: rgb(138, 0, 0))
export const PrimaryButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        "font-semibold shadow-lg hover:shadow-xl transition-all duration-200",
        "bg-[rgb(138,0,0)] hover:bg-[rgb(153,27,27)] text-white",
        className,
      )}
      {...props}
    />
  );
});

// Outline button for light backgrounds
export const OutlineButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="outline"
      className={cn(
        "border-2 font-semibold transition-all duration-200",
        "border-[rgb(138,0,0)] text-[rgb(138,0,0)] bg-transparent hover:bg-[rgb(138,0,0)] hover:text-white",
        className,
      )}
      {...props}
    />
  );
});

GoldButton.displayName = "GoldButton";
WhiteOutlineButton.displayName = "WhiteOutlineButton";
PrimaryButton.displayName = "PrimaryButton";
OutlineButton.displayName = "OutlineButton";
