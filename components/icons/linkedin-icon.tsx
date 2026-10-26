import * as React from "react";

type LinkedInIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
};

export const LinkedInIcon = ({
  size = 32,
  color = "#fff",
  ...props
}: LinkedInIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g
      fill={color}
      fillRule="evenodd"
      clipPath="url(#clip0_8029_4025)"
      clipRule="evenodd"
    >
      <path d="M26.111 3H5.889A2.89 2.89 0 0 0 3 5.889v20.222A2.89 2.89 0 0 0 5.889 29h20.222A2.89 2.89 0 0 0 29 26.111V5.889A2.89 2.89 0 0 0 26.111 3m-15.25 22.389H6.984V12.87h3.877zM8.904 11.231a2.3 2.3 0 0 1-2.293-2.31 2.3 2.3 0 0 1 2.293-2.31 2.3 2.3 0 0 1 2.292 2.31 2.3 2.3 0 0 1-2.292 2.31m16.485 14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551 0-2.362 1.048-2.362 2.809v6.571H13.34V12.87h3.718v1.686s1.118-2.069 3.775-2.069 4.556 1.621 4.556 4.975z"></path>
      <path d="M26.111 3H5.889A2.89 2.89 0 0 0 3 5.889v20.222A2.89 2.89 0 0 0 5.889 29h20.222A2.89 2.89 0 0 0 29 26.111V5.889A2.89 2.89 0 0 0 26.111 3m-15.25 22.389H6.984V12.87h3.877zM8.904 11.231a2.3 2.3 0 0 1-2.293-2.31 2.3 2.3 0 0 1 2.293-2.31 2.3 2.3 0 0 1 2.292 2.31 2.3 2.3 0 0 1-2.292 2.31m16.485 14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551 0-2.362 1.048-2.362 2.809v6.571H13.34V12.87h3.718v1.686s1.118-2.069 3.775-2.069 4.556 1.621 4.556 4.975z"></path>
    </g>
    <defs>
      <clipPath id="clip0_8029_4025">
        <path fill={color} d="M0 0h32v32H0z"></path>
      </clipPath>
    </defs>
  </svg>
);
