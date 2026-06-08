import React, { memo, HTMLAttributes } from "react";

export type ProgressCircularSize = "lg" | "md" | "sm";
export type ProgressCircularColor = "primary" | "gray";
export type ProgressCircularValue = "100" | "80" | "60" | "40" | "20" | "00";

export interface ProgressCircularProps extends HTMLAttributes<HTMLDivElement> {
  size?: ProgressCircularSize;
  color?: ProgressCircularColor;
  value?: ProgressCircularValue;
}

const sizeStyleMap: Record<
  ProgressCircularSize,
  {
    pixelSize: number; // e.g., 40 for lg
    strokeWidth: number;
    radius: number; // For SVG circle radius
    circumference: number; // For SVG stroke calculations
  }
> = {
  lg: { pixelSize: 40, strokeWidth: 4, radius: 18, circumference: 2 * Math.PI * 18 },
  md: { pixelSize: 24, strokeWidth: 3, radius: 10.5, circumference: 2 * Math.PI * 10.5 },
  sm: { pixelSize: 16, strokeWidth: 2, radius: 7, circumference: 2 * Math.PI * 7 },
};

const getVariantStyle = (color: ProgressCircularColor) => {
  if (color === "primary") {
    return {
      baseStroke: "var(--stroke-gray-default)",
      spinStroke: "var(--stroke-primary-default)",
    };
  }
  // gray
  return {
    baseStroke: "var(--stroke-gray-default)",
    spinStroke: "var(--stroke-gray-strong)",
  };
};

const ProgressCircularComponent = ({
  size = "lg",
  color = "primary",
  value = "00",
  className = "",
  style,
  ...props
}: ProgressCircularProps) => {
  const sizeConfig = sizeStyleMap[size];
  const colorConfig = getVariantStyle(color);

  const numericValue = parseInt(value, 10);
  const strokeDashoffset = sizeConfig.circumference * (1 - numericValue / 100);

  const centerX = sizeConfig.pixelSize / 2;
  const centerY = sizeConfig.pixelSize / 2;

  return (
    <div
      className={`progress-circular ${className}`}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: `var(--icon-${sizeConfig.pixelSize})`, // Use CSS var for outer div
        height: `var(--icon-${sizeConfig.pixelSize})`,
        flexShrink: 0, // Ensure it doesn't shrink in flex containers
        ...style,
      }}
      {...props}
    >
      <svg
        width={sizeConfig.pixelSize}
        height={sizeConfig.pixelSize}
        viewBox={`0 0 ${sizeConfig.pixelSize} ${sizeConfig.pixelSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(-90deg)" }} // Start from top
      >
        {/* base [ELLIPSE] */}
        <circle
          className="base"
          cx={centerX}
          cy={centerY}
          r={sizeConfig.radius}
          stroke={colorConfig.baseStroke}
          strokeWidth={sizeConfig.strokeWidth}
          fill="none"
        />
        {/* spin [ELLIPSE] */}
        <circle
          className="spin"
          cx={centerX}
          cy={centerY}
          r={sizeConfig.radius}
          stroke={colorConfig.spinStroke}
          strokeWidth={sizeConfig.strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={sizeConfig.circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.3s ease-in-out" }}
        />
      </svg>
    </div>
  );
};

const ProgressCircular = memo(ProgressCircularComponent);
ProgressCircular.displayName = "ProgressCircular";
export { ProgressCircular };