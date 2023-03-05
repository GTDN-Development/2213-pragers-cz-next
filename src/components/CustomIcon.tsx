import clsx from "clsx";

type Props = {
  className?: string;
  iconNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  isLarge?: boolean;
};

export default function CustomIcon({
  className = "",
  iconNumber = 1,
  isLarge = false,
}: Props) {
  return (
    <div
      className={clsx("mb-3", isLarge ? "h-24 w-24" : "h-12 w-12", className)}
    >
      <img
        src={`/icons/icon-${iconNumber}.svg`}
        alt="icon"
        width={isLarge ? "96" : "48"}
        height={isLarge ? "96" : "48"}
        aria-hidden="true"
        className="h-full w-full object-contain"
      />
    </div>
  );
}
