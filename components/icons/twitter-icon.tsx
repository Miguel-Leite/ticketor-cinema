import * as React from "react";

type TwitterIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
};

export const TwitterIcon = ({
  size = 32,
  color = "#fff",
  ...props
}: TwitterIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g fill={color} clipPath="url(#clip0_8029_4019)">
      <path d="M18.42 14.009 27.891 3h-2.244l-8.224 9.559L10.855 3H3.28l9.932 14.455L3.28 29h2.244l8.684-10.095L21.144 29h7.576zm-3.074 3.573-1.006-1.439L6.333 4.69H9.78l6.462 9.243 1.006 1.439 8.4 12.015h-3.447l-6.854-9.804z"></path>
      <path d="M18.42 14.009 27.891 3h-2.244l-8.224 9.559L10.855 3H3.28l9.932 14.455L3.28 29h2.244l8.684-10.095L21.144 29h7.576zm-3.074 3.573-1.006-1.439L6.333 4.69H9.78l6.462 9.243 1.006 1.439 8.4 12.015h-3.447l-6.854-9.804z"></path>
    </g>
    <defs>
      <clipPath id="clip0_8029_4019">
        <path fill={color} d="M0 0h32v32H0z"></path>
      </clipPath>
    </defs>
  </svg>
);
