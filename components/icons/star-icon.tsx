import * as React from "react";

type StarIconProps = React.SVGProps<SVGSVGElement> & {
    size?: number | string;
    color?: string;
};

export const StarIcon = ({
    size = 14,
    color = "#FCFC65",
    ...props
}: StarIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 14 13"
        {...props}
    >
        <path
            fill={color}
            d="M3.856 12.876a1.116 1.116 0 0 1-1.491-.459 1.06 1.06 0 0 1-.109-.69l.596-3.348-2.51-2.357a1.07 1.07 0 0 1-.037-1.531c.172-.177.4-.291.647-.325l3.484-.488L6.01.602a1.116 1.116 0 0 1 1.98 0l1.573 3.076 3.485.488c.604.083 1.026.63.941 1.223a1.08 1.08 0 0 1-.332.633l-2.51 2.357.597 3.349a1.085 1.085 0 0 1-.895 1.255c-.24.042-.489.005-.705-.106L7 11.285z"
        ></path>
    </svg>
);
