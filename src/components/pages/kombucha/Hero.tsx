import Parallax from "@/components/Parallax";
import clsx from "clsx";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function Hero({ className = "" }: Props) {
  return (
    <div
      className={clsx(
        "relative isolate h-[78rem] w-screen overflow-hidden bg-red-500",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 z-10 h-[1421px] origin-[50%_0%]">
        <Image
          src="/images/kombucha/kombucha-parallax-base.png"
          alt="Parallax layer"
          width={1728}
          height={1421}
          priority
          aria-hidden="true"
          className="w-full object-cover"
        />
      </div>
      <Parallax
        offset={75}
        className="absolute inset-x-0 top-[350px] z-20 h-[1080px] origin-[50%_0%]"
      >
        <Image
          src="/images/kombucha/kombucha-parallax-layer-2.png"
          alt="Parallax layer"
          width={1728}
          height={1080}
          priority
          aria-hidden="true"
          className="w-full object-cover"
        />
      </Parallax>
      <Parallax
        offset={125}
        className="absolute inset-x-0 top-[660px] z-20 h-[800px] origin-[50%_0%]"
      >
        <Image
          src="/images/kombucha/kombucha-parallax-layer-3.png"
          alt="Parallax layer"
          width={1728}
          height={800}
          priority
          aria-hidden="true"
          className="w-full object-cover"
        />
      </Parallax>
    </div>
  );
}
