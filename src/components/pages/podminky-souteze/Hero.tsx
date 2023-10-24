import BrandStrip from "@/components/BrandStrip";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import clsx from "clsx";

type Props = {
  className?: string;
};

export default function Hero({ className = "" }: Props) {
  return (
    <>
      <div
        className={clsx(
          "relative w-screen bg-gradient-to-tl from-yerba-900 via-yerba-800 to-original-500 md:h-[calc(70vh-5rem)] md:max-h-[1100px] md:min-h-[580px]",
          className
        )}
      >
        <div className="pattern-white absolute inset-0 z-10 h-full w-full" />
        <Container py="xl" className="relative z-30 h-full">
          <Reveal
            hasTriggerMargin={false}
            delay={0.15}
            noVertical
            className="flex flex-col items-start justify-center gap-10"
          >
            <Reveal>
              <Heading
                level={1}
                size="inherit"
                className="text-3xl !leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl"
              >
                Podmínky účasti v soutěži na sociálních sítích
              </Heading>
            </Reveal>
            {/* <p className="max-w-prose">{t.about.hero.description}</p> */}
          </Reveal>
        </Container>
      </div>
      <BrandStrip />
    </>
  );
}
