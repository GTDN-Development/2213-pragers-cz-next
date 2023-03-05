import Button from "@/components/Button";
import Container from "@/components/Container";
import Parallax from "@/components/Parallax";
import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function CtaPrager({ className = "" }: Props) {
  const t = useTranslation();
  return (
    <section
      className={clsx(
        "relative w-screen overflow-hidden py-16 sm:py-28 xl:py-52",
        className
      )}
    >
      <Parallax
        offset={40}
        className="absolute inset-0 -z-10 w-full opacity-70"
      >
        <Image
          src="/fh-prager/prager-bg.jpg"
          alt="F.H. Prager ilustrace"
          width={1440}
          height={950}
          loading="lazy"
          className="w-full scale-125 sm:-translate-y-14 md:scale-100"
        />
      </Parallax>
      <div className="absolute inset-0 -z-10 w-full bg-gradient-to-r from-gray-900/90" />
      <Container className="retative z-50 flex flex-col items-center justify-start gap-8 md:gap-14">
        <div
          style={{ width: "233px", height: "83px" }}
          className="lg:scale-125"
        >
          <img
            src="/fh-prager/fh-prager-logo-dark-bg.svg"
            alt="Logo F.H. Prager"
            width={233}
            height={83}
          />
        </div>
        <Button href="https://fhprager.cz" intent="white" size="lg">
          {t.home.ctaPrager}
        </Button>
      </Container>
    </section>
  );
}
