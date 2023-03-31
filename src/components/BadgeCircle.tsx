import clsx from "clsx";

type Props = {
  className?: string;
  [x: string]: any;
};

export default function BadgeCircle({ className = "", ...props }: Props) {
  return (
    <div
      className={clsx(
        "flex h-28 w-auto items-center justify-start gap-5",
        className
      )}
      {...props}
    >
      <img
        src="/svgs/badge-leros-white.svg"
        alt="Leros badge"
        width="112"
        height="112"
        className="object-contain"
      />
      <div className="font-sans text-4xl font-extrabold uppercase leading-tight text-white">
        Tea by <br /> Leros
      </div>
    </div>
  );
}
