import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";
import Marquee from "react-fast-marquee";

function ContactStrip({ className = "" }: { className?: string }) {
  const t = useTranslation();
  const marqueeLabel = t.home.ctaContact.marquee;
  return (
    <div
      className={clsx("relative h-16 overflow-hidden bg-gray-800", className)}
    >
      <Marquee
        gradient={false}
        speed={50}
        direction={"right"}
        className="absolute top-1/2 left-0 flex origin-left -translate-y-1/2"
      >
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 sm:mx-6 lg:mx-8"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 sm:mx-6 lg:mx-8"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 sm:mx-6 lg:mx-8"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 sm:mx-6 lg:mx-8"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 hidden sm:mx-6 sm:block lg:mx-8"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 hidden sm:mx-6 sm:block lg:mx-8"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 hidden sm:mx-6 sm:block lg:mx-8"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 hidden sm:mx-6 sm:block lg:mx-8"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        >
          {marqueeLabel}
        </Heading>{" "}
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 hidden sm:mx-6 sm:block lg:mx-8"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        >
          {marqueeLabel}
        </Heading>
        <Heading
          level={"none"}
          size="xs"
          color="primary"
          className="mx-4 hidden sm:mx-6 lg:mx-8 xl:block"
        >
          {marqueeLabel}
        </Heading>
      </Marquee>
    </div>
  );
}

type CtaProps = {
  className?: string;
};

export default function CtaContact({ className = "" }: CtaProps) {
  const t = useTranslation();
  return (
    <>
      <ContactStrip />
      <section
        className={clsx(
          className,
          "group relative flex w-screen items-center justify-center overflow-hidden bg-primary-400 py-16 sm:py-28 xl:py-44"
        )}
      >
        <div className="pattern-black absolute inset-0 z-10 h-full w-full" />
        <div className="absolute left-1/2 top-1/2 z-20 hidden h-[410px] w-[410px] origin-center -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-transform duration-1000 group-hover:scale-[2.4] xs:h-[540px] xs:w-[540px] sm:block sm:h-[640px] sm:w-[640px] lg:h-[800px] lg:w-[800px]" />

        <Container className="relative z-30 flex h-full flex-col items-center justify-center gap-5 sm:gap-8">
          <Heading level={3} size="lg" color="black" className="text-center">
            {t.home.ctaContact.title}
          </Heading>
          <p className="max-w-md text-center text-gray-800 lg:max-w-prose">
            {t.home.ctaContact.description}
          </p>
          <Button href="/kontakt" intent="black" size="lg">
            {t.home.ctaContact.buttonLabel}
          </Button>
        </Container>
      </section>
    </>
  );
}
