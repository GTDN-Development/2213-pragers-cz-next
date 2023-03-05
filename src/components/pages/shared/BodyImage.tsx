import Reveal from "@/components/Reveal";
import clsx from "clsx";
import Image from "next/image";

type BodyImageProps = {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function BodyImage({
  className = "",
  src = "",
  alt = "",
  width = 0,
  height = 0,
  ...props
}: BodyImageProps) {
  return (
    <Reveal
      className={clsx(
        "aspect-[16/10] overflow-hidden rounded-2xl bg-gray-700",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover"
        {...props}
      />
    </Reveal>
  );
}
