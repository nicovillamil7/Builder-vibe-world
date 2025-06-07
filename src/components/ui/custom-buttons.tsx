import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

// Primary brand button (Genesis Gold)
export const GoldButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        "bg-yellow-500 text-black font-semibold hover:bg-yellow-600 border-0 shadow-lg hover:shadow-xl transition-all duration-200",
        className,
      )}
      {...props}
    />
  );
});

// Secondary brand button (White outline on dark background)
export const WhiteOutlineButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="outline"
      className={cn(
        "border-2 border-white text-white bg-transparent hover:bg-white hover:text-red-800 font-semibold transition-all duration-200",
        className,
      )}
      {...props}
    />
  );
});

// Primary red button (Genesis Maroon)
export const PrimaryButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        "bg-red-800 text-white font-semibold hover:bg-red-900 shadow-lg hover:shadow-xl transition-all duration-200",
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
        "border-2 border-red-800 text-red-800 bg-transparent hover:bg-red-50 font-semibold transition-all duration-200",
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
