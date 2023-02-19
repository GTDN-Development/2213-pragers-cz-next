import { Logo } from "@/components/Logo";
import clsx from "clsx";
import Marquee from "react-fast-marquee";

type Props = {
  className?: string;
};

export default function BrandStrip({ className = "" }: Props) {
  return (
    <div
      className={clsx("relative h-20 overflow-hidden bg-primary", className)}
    >
      <Marquee
        gradient={false}
        speed={50}
        direction={"left"}
        className="absolute top-1/2 left-0 flex origin-left -translate-y-1/2"
      >
        <Logo background="light" className="mx-4 sm:mx-6 lg:mx-8" />
        <Logo background="light" className="mx-4 sm:mx-6 lg:mx-8" />
        <Logo background="light" className="mx-4 sm:mx-6 lg:mx-8" />
        <Logo background="light" className="mx-4 sm:mx-6 lg:mx-8" />

        <Logo
          background="light"
          className="mx-4 hidden sm:mx-6 sm:block lg:mx-8"
        />
        <Logo
          background="light"
          className="mx-4 hidden sm:mx-6 sm:block lg:mx-8"
        />
        <Logo
          background="light"
          className="mx-4 hidden sm:mx-6 sm:block lg:mx-8"
        />
        <Logo
          background="light"
          className="mx-4 hidden sm:mx-6 sm:block lg:mx-8"
        />

        <Logo
          background="light"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        />
        <Logo
          background="light"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        />
        <Logo
          background="light"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        />
        <Logo
          background="light"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        />

        <Logo
          background="light"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        />
        <Logo
          background="light"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        />
        <Logo
          background="light"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        />
        <Logo
          background="light"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        />
      </Marquee>
    </div>
  );
}
