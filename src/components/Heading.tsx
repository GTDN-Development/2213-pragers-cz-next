import clsx from "clsx";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6 | "none";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "inherit";
  color?: "muted" | "rich" | "primary" | "inherit" | "black";
  hasMarginBottom?: boolean;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  base: "block font-extrabold font-sans uppercase",
  size: {
    xs: "text-base",
    sm: "text-xl lg:text-2xl",
    md: "text-2xl sm:text-3xl lg:text-4xl",
    lg: "text-3xl sm:text-4xl lg:text-6xl",
    xl: "text-4xl sm:text-6xl lg:text-7xl",
    "2xl": "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
    inherit: "",
  },
  color: {
    inherit: "",
    rich: "text-white",
    muted: "text-gray-400",
    primary: "text-primary",
    black: "text-gray-900",
  },
  marginBottom: "mb-[0.65em]",
};

export default function Heading({
  level = 2,
  size = "md",
  color = "rich",
  hasMarginBottom = false,
  className = "",
  children,
  ...rest
}: HeadingProps) {
  // Resolve the correct HTML tag
  let Tag = `h${level}` as keyof JSX.IntrinsicElements;
  if (level === "none") Tag = "span";
  return (
    <Tag
      className={clsx(
        componentVariants.base,
        componentVariants.size[size],
        componentVariants.color[color],
        hasMarginBottom && componentVariants.marginBottom,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
