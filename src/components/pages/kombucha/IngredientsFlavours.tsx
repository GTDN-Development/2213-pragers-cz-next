import Button from "@/components/Button";
import Container from "@/components/Container";
import CustomIcon from "@/components/CustomIcon";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function IngredientsFlavoursMobile({
  className = "",
}: {
  className?: string;
}) {
  const originalRef = useRef<HTMLDivElement>(null);
  const yerbaRef = useRef<HTMLDivElement>(null);

  const originalInView = useInView(originalRef, { margin: "-45%" });
  const yerbaInView = useInView(yerbaRef, { margin: "100% 0px -45% 0px" });

  const t = useTranslation();
  return (
    <section
      className={clsx(
        "overflow-x-hidden transition-colors duration-700 ease-in-out",
        className,
        originalInView
          ? "bg-original-800"
          : yerbaInView
          ? "bg-yerba-900"
          : "bg-gray-900"
      )}
    >
      {/* Vlastnosti */}
      <div className="overflow-hidden">
        <Container py="xl">
          <Reveal>
            <Heading level={2} size="xl" color="primary" hasMarginBottom>
              {t.kombucha.properties.title}
            </Heading>
          </Reveal>

          <div className="grid grid-cols-5 gap-5 pt-5">
            <div className="col-span-3 flex flex-col gap-10">
              <Reveal>
                <CustomIcon iconNumber={10} />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  {t.kombucha.properties.subtitle1}
                </Heading>
                <p className="text-sm">{t.kombucha.properties.content1}</p>
              </Reveal>
              <Reveal>
                <CustomIcon iconNumber={7} />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  {t.kombucha.properties.subtitle2}
                </Heading>
                <p className="text-sm">{t.kombucha.properties.content2}</p>
              </Reveal>
              <Reveal>
                <CustomIcon iconNumber={2} />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  {t.kombucha.properties.subtitle3}
                </Heading>
                <p className="text-sm">{t.kombucha.properties.content3}</p>
              </Reveal>
              <Reveal>
                <CustomIcon iconNumber={1} />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  {t.kombucha.properties.subtitle4}
                </Heading>
                <p className="text-sm">{t.kombucha.properties.content4}</p>
              </Reveal>
            </div>
            <Image
              src="/images/kombucha/original/render-bottle.png"
              alt="Lahev Pragers Kombucha"
              width={1080}
              height={1920}
              className="col-span-2 h-full translate-x-1/2 scale-[2.2] object-contain min-[500px]:translate-x-0 min-[500px]:scale-150"
              loading="lazy"
            />
          </div>
        </Container>
      </div>

      {/* Originál */}
      <div ref={originalRef} className="relative overflow-hidden">
        <Container py="xl" className="relative z-20">
          <Reveal>
            <Heading level={2} size="xl" color="rich" hasMarginBottom>
              {t.kombucha.original.title}
            </Heading>
          </Reveal>

          <div className="grid grid-cols-5 gap-5 pt-5">
            <div className="col-span-3 flex flex-col gap-10">
              <Reveal>
                <p>{t.kombucha.original.description}</p>
                <div className="flex flex-wrap gap-5 pt-5">
                  <Button href="/kombucha/original">
                    {t.kombucha.original.buttonLabel}
                  </Button>
                  {/* <Button href="https://eshop.fhprager.cz">
                    {t.kombucha.original.buttonLabelShop}
                  </Button> */}
                </div>
              </Reveal>
              <Reveal className="pt-16">
                <CustomIcon iconNumber={2} />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  {t.kombucha.original.subtitle1}
                </Heading>
                <p className="text-sm">{t.kombucha.original.content1}</p>
              </Reveal>
              <Reveal>
                <CustomIcon iconNumber={3} />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  {t.kombucha.original.subtitle2}
                </Heading>
                <p className="text-sm">{t.kombucha.original.content2}</p>
              </Reveal>
            </div>
            <Image
              src="/images/kombucha/original/render-bottle.png"
              alt="Lahev Pragers Kombucha"
              width={1080}
              height={1920}
              className="col-span-2 h-full translate-x-1/2 scale-[2.4] object-contain min-[500px]:translate-x-0 min-[500px]:scale-150"
              loading="lazy"
            />
          </div>
        </Container>
        <img
          src="/svgs/text-original-vertical.svg"
          alt="Original"
          width="392"
          height="1002"
          loading="lazy"
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -right-0 z-10 h-full origin-right scale-[0.6] opacity-20"
        />
      </div>

      {/* Yerba */}
      <div ref={yerbaRef} className="relative overflow-hidden">
        <Container py="xl" className="relative z-20">
          <Reveal>
            <Heading level={2} size="xl" color="rich" hasMarginBottom>
              {t.kombucha.yerba.title}
            </Heading>
          </Reveal>

          <div className="grid grid-cols-5 gap-5 pt-5">
            <div className="col-span-3 flex flex-col gap-10">
              <Reveal>
                <p>{t.kombucha.yerba.description}</p>
                <div className="flex flex-wrap gap-5 pt-5">
                  <Button href="/kombucha/yerba-mate">
                    {t.kombucha.yerba.buttonLabel}
                  </Button>
                  {/* <Button href="https://eshop.fhprager.cz">
                    {t.kombucha.yerba.buttonLabelShop}
                  </Button> */}
                </div>
              </Reveal>
              <Reveal className="pt-16">
                <CustomIcon iconNumber={9} />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  {t.kombucha.yerba.subtitle1}
                </Heading>
                <p className="text-sm">{t.kombucha.yerba.content1}</p>
              </Reveal>
              <Reveal>
                <CustomIcon iconNumber={7} />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  {t.kombucha.yerba.subtitle2}
                </Heading>
                <p className="text-sm">{t.kombucha.yerba.content2}</p>
              </Reveal>
            </div>
            <Image
              src="/images/kombucha/yerba/render-bottle.png"
              alt="Lahev Pragers Kombucha"
              width={1080}
              height={1920}
              className="col-span-2 h-full translate-x-1/2 scale-[2.4] object-contain min-[500px]:translate-x-0 min-[500px]:scale-150"
              loading="lazy"
            />
          </div>
        </Container>
        <img
          src="/svgs/text-yerba-vertical.svg"
          alt="Original"
          width="392"
          height="1002"
          loading="lazy"
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 h-full origin-right scale-50 opacity-20"
        />
      </div>
    </section>
  );
}

export function IngredientsFlavours({
  className = "",
}: {
  className?: string;
}) {
  const originalRef = useRef<HTMLDivElement>(null);
  const yerbaRef = useRef<HTMLDivElement>(null);

  const originalInView = useInView(originalRef, { margin: "-45%" });
  const yerbaInView = useInView(yerbaRef, { margin: "100% 0px -45% 0px" });

  const t = useTranslation();

  return (
    <section
      className={clsx(
        "relative transition-colors duration-700 ease-in-out",
        className,
        originalInView
          ? "bg-original-800"
          : yerbaInView
          ? "bg-yerba-900"
          : "bg-gray-900"
      )}
    >
      {/* *** */}
      {/* Bottle grid - spanning the whole area and keeping the same grid layout as sections inner */}
      <Container className="absolute inset-0 grid h-full w-full grid-cols-3 items-start justify-start gap-10">
        <div className="sticky top-0 z-sticky col-span-1 col-start-2 col-end-3 flex h-screen items-center justify-center">
          <div className="relative my-auto h-full max-h-[675px] w-full pt-8">
            <div className="absolute inset-0 z-20 h-full w-full">
              <Image
                src="/images/kombucha/original/render-bottle.png"
                alt="Lahev Pragers Kombucha"
                width={1080}
                height={1920}
                className="w-full origin-center scale-95 object-contain"
                loading="lazy"
              />
            </div>
            <div
              className={clsx(
                "absolute inset-0 z-30 h-full w-full transition-opacity duration-700",
                yerbaInView ? "opacity-100" : "opacity-0"
              )}
            >
              <Image
                src="/images/kombucha/yerba/render-bottle.png"
                alt="Lahev Pragers Kombucha"
                width={1080}
                height={1920}
                className="w-full origin-center scale-95 object-contain"
                loading="lazy"
              />
            </div>
            <div
              className={clsx(
                "absolute left-16 top-2/3 z-40 h-24 w-24 -rotate-12 transition-opacity duration-700",
                originalInView || yerbaInView ? "opacity-100" : "opacity-0"
              )}
            >
              <img
                src="/svgs/badge-leros-yellow.svg"
                alt="Leros badge"
                width="96"
                height="96"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* *** */}
      {/* Screen - Ingredients */}
      <Container py="xl" className="grid min-h-screen grid-cols-3 gap-10">
        {/* Left side */}
        <div className="col-span-1 col-start-1 col-end-2 flex flex-col items-start justify-between gap-10">
          <Reveal>
            <Heading level={2} size="xl" color="primary" hasMarginBottom>
              {t.kombucha.properties.title}
            </Heading>
          </Reveal>
          <Reveal delay={0.1} className="mt-auto">
            <CustomIcon iconNumber={10} />
            <Heading level={3} size="xs" color="rich" hasMarginBottom>
              {t.kombucha.properties.subtitle1}
            </Heading>
            <p>{t.kombucha.properties.content1}</p>
          </Reveal>
          <Reveal delay={0.2} className="mb-auto">
            <CustomIcon iconNumber={7} />
            <Heading level={3} size="xs" color="rich" hasMarginBottom>
              {t.kombucha.properties.subtitle2}
            </Heading>
            <p>{t.kombucha.properties.content2}</p>
          </Reveal>
        </div>
        {/* Right side */}
        <div className="col-span-1 col-start-3 col-end-4 flex flex-col items-start justify-between gap-10">
          <Reveal delay={0.3} className="mt-auto">
            <CustomIcon iconNumber={2} />
            <Heading level={3} size="xs" color="rich" hasMarginBottom>
              {t.kombucha.properties.subtitle3}
            </Heading>
            <p>{t.kombucha.properties.content3}</p>
          </Reveal>
          <Reveal delay={0.4} className="mb-auto">
            <CustomIcon iconNumber={1} />
            <Heading level={3} size="xs" color="rich" hasMarginBottom>
              {t.kombucha.properties.subtitle4}
            </Heading>
            <p>{t.kombucha.properties.content4}</p>
          </Reveal>
        </div>
      </Container>

      {/* *** */}
      {/* Screen - Flavour - Original */}
      <div ref={originalRef}>
        <Container
          py="xl"
          className="relative grid min-h-screen grid-cols-3 gap-10"
        >
          <img
            src="/svgs/text-original.svg"
            alt="Original"
            width="1488"
            height="417"
            loading="lazy"
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 opacity-15"
          />
          {/* Left side */}
          <div className="relative z-20 col-span-1 col-start-1 col-end-2">
            <Reveal>
              <Heading level={2} size="xl" color="rich" hasMarginBottom>
                {t.kombucha.original.title}
              </Heading>
            </Reveal>
            <Reveal delay={0.1}>
              <p>{t.kombucha.original.description}</p>
            </Reveal>
            <Reveal delay={0.2} className="flex gap-6 pt-8">
              <Button href="/kombucha/original" size="lg">
                {t.kombucha.original.buttonLabel}
              </Button>
              {/* <Button href="https://eshop.fhprager.cz" size="lg">
                {t.kombucha.original.buttonLabelShop}
              </Button> */}
            </Reveal>
          </div>
          {/* Right side */}
          <div className="relative z-20 col-span-1 col-start-3 col-end-4 flex flex-col items-start justify-between gap-10">
            <Reveal delay={0.3} className="mt-auto">
              <CustomIcon iconNumber={2} />
              <Heading level={3} size="xs" color="rich" hasMarginBottom>
                {t.kombucha.original.subtitle1}
              </Heading>
              <p>{t.kombucha.original.content1}</p>
            </Reveal>
            <Reveal delay={0.4} className="mb-auto">
              <CustomIcon iconNumber={3} />
              <Heading level={3} size="xs" color="rich" hasMarginBottom>
                {t.kombucha.original.subtitle2}
              </Heading>
              <p>{t.kombucha.original.content2}</p>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* *** */}
      {/* Screen - Flavour - Yerba mate */}
      <div ref={yerbaRef}>
        <Container
          py="xl"
          className="relative grid min-h-screen grid-cols-3 gap-10"
        >
          <img
            src="/svgs/text-yerba.svg"
            alt="Original"
            width="1002"
            height="392"
            loading="lazy"
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 opacity-20"
          />
          {/* Left side */}
          <div className="relative z-20 col-span-1 col-start-1 col-end-2">
            <Reveal>
              <Heading level={2} size="xl" color="rich" hasMarginBottom>
                {t.kombucha.yerba.title}
              </Heading>
            </Reveal>
            <Reveal delay={0.1}>
              <p>{t.kombucha.yerba.description}</p>
            </Reveal>
            <Reveal delay={0.2} className="flex gap-6 pt-8">
              <Button href="/kombucha/yerba-mate" size="lg">
                {t.kombucha.yerba.buttonLabel}
              </Button>
              {/* <Button href="https://eshop.fhprager.cz" size="lg">
                {t.kombucha.yerba.buttonLabelShop}
              </Button> */}
            </Reveal>
          </div>
          {/* Right side */}
          <div className="relative z-20 col-span-1 col-start-3 col-end-4 flex flex-col items-start justify-between gap-10">
            <Reveal delay={0.3} className="mt-auto">
              <CustomIcon iconNumber={9} />
              <Heading level={3} size="xs" color="rich" hasMarginBottom>
                {t.kombucha.yerba.subtitle1}
              </Heading>
              <p>{t.kombucha.yerba.content1}</p>
            </Reveal>
            <Reveal delay={0.4} className="mb-auto">
              <CustomIcon iconNumber={7} />
              <Heading level={3} size="xs" color="rich" hasMarginBottom>
                {t.kombucha.yerba.subtitle2}
              </Heading>
              <p>{t.kombucha.yerba.content2}</p>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
