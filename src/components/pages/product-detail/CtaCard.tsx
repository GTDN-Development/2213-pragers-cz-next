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
}: {
  className?: string;
  href: string;
  src: string;
  width?: number;
  height?: number;
  title: string;
  text: string;
}) {
  return (
    <UiLink
      href={href}
      className={clsx(
        "group flex flex-col overflow-hidden rounded-3xl bg-gray-800 shadow-2xl shadow-gray-900/50 transition-all duration-300 ease-in-out hover:scale-95 hover:shadow-none",
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
      <div className="p-6 lg:p-16">
        <Heading level={3} size="md" hasMarginBottom>
          {title}
        </Heading>
        <p>{text}</p>
      </div>
    </UiLink>
  );
}
