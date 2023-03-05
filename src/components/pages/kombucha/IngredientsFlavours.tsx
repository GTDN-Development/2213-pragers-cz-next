import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import clsx from "clsx";
import { useInView } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import { useRef } from "react";
import { GiFlamedLeaf } from "react-icons/gi";

export function IngredientsFlavoursMobile({
  className = "",
}: {
  className?: string;
}) {
  const originalRef = useRef<HTMLDivElement>(null);
  const yerbaRef = useRef<HTMLDivElement>(null);

  const originalInView = useInView(originalRef, { margin: "-45%" });
  const yerbaInView = useInView(yerbaRef, { margin: "100% 0px -45% 0px" });
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
              Vlastnosti
            </Heading>
          </Reveal>

          <div className="grid grid-cols-5 gap-5 pt-5">
            <div className="col-span-3 flex flex-col gap-10">
              <Reveal>
                <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  Lorem ipsum
                </Heading>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio iusto, atque facilis repellat unde ratione nam fuga
                  voluptatibus tempora excepturi!
                </p>
              </Reveal>
              <Reveal>
                <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  Lorem ipsum
                </Heading>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio iusto, atque facilis repellat unde ratione nam fuga
                  voluptatibus tempora excepturi!
                </p>
              </Reveal>
              <Reveal>
                <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  Lorem ipsum
                </Heading>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio iusto, atque facilis repellat unde ratione nam fuga
                  voluptatibus tempora excepturi!
                </p>
              </Reveal>
              <Reveal>
                <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  Lorem ipsum
                </Heading>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio iusto, atque facilis repellat unde ratione nam fuga
                  voluptatibus tempora excepturi!
                </p>
              </Reveal>
            </div>
            <ExportedImage
              src="/images/kombucha/original/kombucha-original-render-bottle.png"
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
              Original
            </Heading>
          </Reveal>

          <div className="grid grid-cols-5 gap-5 pt-5">
            <div className="col-span-3 flex flex-col gap-10">
              <Reveal>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio iusto, atque facilis repellat unde ratione nam fuga
                  voluptatibus tempora excepturi!
                </p>
                <div className="flex flex-wrap gap-5 pt-5">
                  <Button>Zjistit více</Button>
                  <Button>E-shop</Button>
                </div>
              </Reveal>
              <Reveal className="pt-16">
                <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  Lorem ipsum
                </Heading>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio iusto, atque facilis repellat unde ratione nam fuga
                  voluptatibus tempora excepturi!
                </p>
              </Reveal>
              <Reveal>
                <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  Lorem ipsum
                </Heading>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio iusto, atque facilis repellat unde ratione nam fuga
                  voluptatibus tempora excepturi!
                </p>
              </Reveal>
            </div>
            <ExportedImage
              src="/images/kombucha/original/kombucha-original-render-bottle.png"
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
              Yerba maté
            </Heading>
          </Reveal>

          <div className="grid grid-cols-5 gap-5 pt-5">
            <div className="col-span-3 flex flex-col gap-10">
              <Reveal>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio iusto, atque facilis repellat unde ratione nam fuga
                  voluptatibus tempora excepturi!
                </p>
                <div className="flex flex-wrap gap-5 pt-5">
                  <Button>Zjistit více</Button>
                  <Button>E-shop</Button>
                </div>
              </Reveal>
              <Reveal className="pt-16">
                <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  Lorem ipsum
                </Heading>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio iusto, atque facilis repellat unde ratione nam fuga
                  voluptatibus tempora excepturi!
                </p>
              </Reveal>
              <Reveal>
                <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
                <Heading level={3} size="xs" color="rich" hasMarginBottom>
                  Lorem ipsum
                </Heading>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio iusto, atque facilis repellat unde ratione nam fuga
                  voluptatibus tempora excepturi!
                </p>
              </Reveal>
            </div>
            <ExportedImage
              src="/images/kombucha/mate/kombucha-mate-render-bottle.png"
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

  return (
    <div
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
              <ExportedImage
                src="/images/kombucha/original/kombucha-original-render-bottle.png"
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
              <ExportedImage
                src="/images/kombucha/mate/kombucha-mate-render-bottle.png"
                alt="Lahev Pragers Kombucha"
                width={1080}
                height={1920}
                className="w-full origin-center scale-95 object-contain"
                loading="lazy"
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
              Vlastnosti
            </Heading>
          </Reveal>
          <Reveal delay={0.1} className="mt-auto">
            <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
            <Heading level={3} size="xs" color="rich" hasMarginBottom>
              Lorem ipsum
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              iusto, atque facilis repellat unde ratione nam fuga voluptatibus
              tempora excepturi!
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mb-auto">
            <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
            <Heading level={3} size="xs" color="rich" hasMarginBottom>
              Lorem ipsum
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              iusto, atque facilis repellat unde ratione nam fuga voluptatibus
              tempora excepturi!
            </p>
          </Reveal>
        </div>
        {/* Right side */}
        <div className="col-span-1 col-start-3 col-end-4 flex flex-col items-start justify-between gap-10">
          <Reveal delay={0.3} className="mt-auto">
            <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
            <Heading level={3} size="xs" color="rich" hasMarginBottom>
              Lorem ipsum
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              iusto, atque facilis repellat unde ratione nam fuga voluptatibus
              tempora excepturi!
            </p>
          </Reveal>
          <Reveal delay={0.4} className="mb-auto">
            <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
            <Heading level={3} size="xs" color="rich" hasMarginBottom>
              Lorem ipsum
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              iusto, atque facilis repellat unde ratione nam fuga voluptatibus
              tempora excepturi!
            </p>
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
                Original
              </Heading>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a
                harum ipsa possimus accusantium fugit rerum exercitationem
                excepturi officiis voluptas?
              </p>
            </Reveal>
            <Reveal delay={0.2} className="flex gap-6 pt-8">
              <Button size="lg">Zobrazit více</Button>
              <Button size="lg">E-shop</Button>
            </Reveal>
          </div>
          {/* Right side */}
          <div className="relative z-20 col-span-1 col-start-3 col-end-4 flex flex-col items-start justify-between gap-10">
            <Reveal delay={0.3} className="mt-auto">
              <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
              <Heading level={3} size="xs" color="rich" hasMarginBottom>
                Lorem ipsum
              </Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                iusto, atque facilis repellat unde ratione nam fuga voluptatibus
                tempora excepturi!
              </p>
            </Reveal>
            <Reveal delay={0.4} className="mb-auto">
              <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
              <Heading level={3} size="xs" color="rich" hasMarginBottom>
                Lorem ipsum
              </Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                iusto, atque facilis repellat unde ratione nam fuga voluptatibus
                tempora excepturi!
              </p>
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
                Yerba Maté
              </Heading>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a
                harum ipsa possimus accusantium fugit rerum exercitationem
                excepturi officiis voluptas?
              </p>
            </Reveal>
            <Reveal delay={0.2} className="flex gap-6 pt-8">
              <Button size="lg">Zobrazit více</Button>
              <Button size="lg">E-shop</Button>
            </Reveal>
          </div>
          {/* Right side */}
          <div className="relative z-20 col-span-1 col-start-3 col-end-4 flex flex-col items-start justify-between gap-10">
            <Reveal delay={0.3} className="mt-auto">
              <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
              <Heading level={3} size="xs" color="rich" hasMarginBottom>
                Lorem ipsum
              </Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                iusto, atque facilis repellat unde ratione nam fuga voluptatibus
                tempora excepturi!
              </p>
            </Reveal>
            <Reveal delay={0.4} className="mb-auto">
              <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
              <Heading level={3} size="xs" color="rich" hasMarginBottom>
                Lorem ipsum
              </Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                iusto, atque facilis repellat unde ratione nam fuga voluptatibus
                tempora excepturi!
              </p>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* *** */}
      {/* Blank template for next screen */}
      {/* <section className="bg-yerba-600">
        <Container py="xl" className="relative grid min-h-screen grid-cols-3 gap-10">
          <div className="col-start-1 col-end-2 col-span-1"></div>
          <div className="col-start-3 col-end-4 col-span-1"></div>
        </Container>
      </section> */}
    </div>
  );
}
