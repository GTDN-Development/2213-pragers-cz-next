import clsx from "clsx";

type Props = {
  className?: string;
};

export default function ScrollBadge({ className = "" }: Props) {
  // useScroll value of framer motion and transform it to use this value as rotate property of svg

  return (
    <div
      className={clsx(
        "relative flex h-48 w-48 items-center justify-center",
        className
      )}
      aria-hidden="true"
    >
      <img
        src="/svgs/circuler-text-white.svg"
        alt="Fermented Handcrafted badge"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full origin-center animate-[spin_10s_linear_infinite]"
      />
      <div className="relative z-30 flex items-end justify-center">
        <span className="block h-20 w-1 origin-top rounded-full bg-primary" />
        <span className="block h-6 w-1 origin-bottom translate-x-[-5px] translate-y-0.5 rotate-45 rounded-full bg-primary" />
        <span className="block h-6 w-1 origin-bottom translate-x-[-7px] translate-y-0.5 -rotate-45 rounded-full bg-primary" />
      </div>
    </div>
  );
}
