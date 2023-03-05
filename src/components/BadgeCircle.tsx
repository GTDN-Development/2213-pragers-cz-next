import clsx from "clsx";

type Props = {
  className?: string;
  [x: string]: any;
};

export default function BadgeCircle({ className = "", ...props }: Props) {
  return (
    <div className={clsx("h-36 w-36", className)} {...props}>
      <img
        src="/svgs/badge-leros-white.svg"
        alt="Leros badge"
        width="144"
        height="144"
        className="object-contain"
      />
    </div>
  );
}
