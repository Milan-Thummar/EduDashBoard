import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { classNames } from "../utils/classNames";

type ButtonVariant = "primary" | "outline";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  loading?: boolean;
  ariaLabel?: string;
  children: ReactNode;
};

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "ui-btn-primary",
  outline: "ui-btn-outline",
};

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    children,
    type = "button",
    variant = "primary",
    fullWidth = false,
    loading = false,
    ariaLabel,
    className,
    disabled,
    ...props
  },
  ref
) {
  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      type={type}
      aria-label={ariaLabel || undefined}
      aria-busy={loading}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      className={classNames(
        VARIANT_CLASS[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading && (
        <span
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}

      <span>{children}</span>
    </button>
  );
});

export default Button;
