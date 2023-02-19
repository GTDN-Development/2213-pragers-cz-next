import clsx from "clsx";

type Props = {
  className?: string;
  [x: string]: any;
};

export default function BadgeCircle({ className = "", ...props }: Props) {
  return (
    <div
      className={clsx("h-36 w-36 rounded-full bg-white", className)}
      {...props}
    >
      <div></div>
    </div>
  );
}
