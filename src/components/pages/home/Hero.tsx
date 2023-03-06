import BrandStrip from "@/components/BrandStrip";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function Hero({ className = "" }: Props) {
  const { scrollYProgress } = useScroll();
  const rotateRange = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const rotate = useSpring(rotateRange, { stiffness: 400, damping: 90 });

  const t = useTranslation();
  return (
    <>
      <section
        className={clsx(
          "relative w-screen overflow-hidden bg-yerba-700 md:h-[calc(100vh-5rem)] md:max-h-[1100px] md:min-h-[580px] md:overflow-visible xl:min-h-[700px]",
          className
        )}
      >
        <div className="pattern-white absolute inset-0 z-10 h-full w-full" />
        <Container
          py="xl"
          className="relative z-30 grid h-full gap-32 md:grid-cols-12 md:gap-8"
        >
          <Reveal
            hasTriggerMargin={false}
            noVertical
            delay={0.1}
            className="col-span-1 flex flex-col items-start justify-center gap-10 md:col-span-6 xl:col-span-7"
          >
            <Reveal>
              <Heading
                level={1}
                size="inherit"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.0625rem]"
              >
                {t.home.hero.title}
              </Heading>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-prose">{t.home.hero.description}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button href="#vice" size="lg">
                {t.home.hero.buttonLabel}
              </Button>
            </Reveal>
          </Reveal>
          <motion.div
            style={{ rotate }}
            className="relative isolate z-0 col-span-1 flex items-center justify-center md:col-span-6 xl:col-span-5"
          >
            <div className="aspect-square w-full rounded-full bg-yerba-800"></div>
            <Reveal hasTriggerMargin={false} delay={0.2} noVertical>
              <Image
                src="/images/kombucha/original/kombucha-original-render-bottle-outline.png"
                alt="Lahev pragers kombucha originál"
                width={1080}
                height={1920}
                priority
                loading="eager"
                className="absolute top-1/2 left-1/2 z-10 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-6 scale-75 object-contain md:translate-y-[calc(-50%+3rem)] md:scale-[0.85]"
              />
            </Reveal>
          </motion.div>
        </Container>
      </section>
      <BrandStrip />
    </>
  );
}
