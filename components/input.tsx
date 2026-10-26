import type { InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
  containerClassName?: string;
};

export function Input({
  icon,
  containerClassName = "",
  className = "",
  ...props
}: InputProps) {
  return (
    <div
      className={`flex items-center px-3 rounded border border-neutral-700 transition-colors focus-within:border-primary/60 ${containerClassName}`}
    >
      {icon}
      <input
        className={`w-full p-3 outline-none bg-transparent placeholder:text-neutral-500 text-neutral-200 ${className}`}
        {...props}
      />
    </div>
  );
}
