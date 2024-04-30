import Heading from "@/components/Heading";
import UiLink from "@/components/UiLink";
import clsx from "clsx";
import Image from "next/image";

export default function CtaCard({
  className = "",
  href,
  src,
  width,
  height,
  title,
  text,
  disableBg = false,
  disableShadow = false,
  isSmall = false,
}: {
  className?: string;
  href: string;
  src: string;
  width?: number;
  height?: number;
  title: string;
  text: string;
  disableBg?: boolean;
  disableShadow?: boolean;
  isSmall?: boolean;
}) {
  return (
    <UiLink
      href={href}
      className={clsx(
        "group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 ease-in-out hover:scale-95",
        !disableBg && "bg-gray-800",
        !disableShadow && "shadow-2xl shadow-gray-900/50 hover:shadow-none",
        className
      )}
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={width}
          height={height}
          className="aspect-[16/10] w-full origin-center object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className={clsx("p-6 lg:p-16", isSmall && "lg:p-10")}>
        <Heading level={3} size={isSmall ? "sm" : "md"} hasMarginBottom>
          {title}
        </Heading>
        <p>{text}</p>
      </div>
    </UiLink>
  );
}
