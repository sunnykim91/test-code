import React, { memo, HTMLAttributes } from "react";

export type ProgressCircularSize = "lg" | "md" | "sm";
export type ProgressCircularColor = "primary" | "gray";
export type ProgressCircularValue = "100" | "80" | "60" | "40" | "20" | "00";

export interface ProgressCircularProps extends HTMLAttributes<HTMLDivElement> {
  size?: ProgressCircularSize;
  color?: ProgressCircularColor;
  value?: ProgressCircularValue;
}

const sizeConfigMap: Record<ProgressCircularSize, {
  width: string;
  height: string;
  strokeWidth: number;
}> = {
  lg: { width: "var(--icon-40, 40px)", height: "var(--icon-40, 40px)", strokeWidth: 4 },
  md: { width: "var(--icon-24, 24px)", height: "var(--icon-24, 24px)", strokeWidth: 3 },
  sm: { width: "var(--icon-16, 16px)", height: "var(--icon-16, 16px)", strokeWidth: 2 },
};

const colorConfigMap: Record<ProgressCircularColor, {
  baseColor: string;
  spinColor: string;
}> = {
  primary: {
    baseColor: "var(--stroke-primary-subtle)",
    spinColor: "var(--stroke-primary-default)",
  },
  gray: {
    baseColor: "var(--stroke-gray-subtle)",
    spinColor: "var(--stroke-gray-default)",
  },
};

const ProgressCircularComponent = ({
  size = "lg",
  color = "primary",
  value = "00",
  className = "",
  style,
  ...props
}: ProgressCircularProps) => {
  const { width, height, strokeWidth } = sizeConfigMap[size];
  const { baseColor, spinColor } = colorConfigMap[color];

  const sizeValue = parseInt(width.match(/\d+/)?.[0] || "0", 10);
  const radius = (sizeValue / 2) - (strokeWidth / 2);
  const circumference = 2 * Math.PI * radius;

  const numericValue = parseInt(value, 10);
  const progressOffset = circumference - (numericValue / 100) * circumference;

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width,
        height,
        flexShrink: 0,
        ...style,
      }}
      {...props}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${sizeValue} ${sizeValue}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* base [ELLIPSE] */}
        <circle
          cx={sizeValue / 2}
          cy={sizeValue / 2}
          r={radius}
          stroke={baseColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* spin [ELLIPSE] */}
        <circle
          cx={sizeValue / 2}
          cy={sizeValue / 2}
          r={radius}
          stroke={spinColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          style={{ transition: "stroke-dashoffset 0.3s ease-out" }}
        />
      </svg>
    </div>
  );
};

const ProgressCircular = memo(ProgressCircularComponent);
ProgressCircular.displayName = "ProgressCircular";
export { ProgressCircular };