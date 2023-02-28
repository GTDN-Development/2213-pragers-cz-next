import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { GiFlamedLeaf } from "react-icons/gi";

type IngredientsFlavoursProps = {
  className?: string;
};

export default function IngredientsFlavours({
  className = "",
}: IngredientsFlavoursProps) {
  const originalRef = useRef<HTMLDivElement>(null);
  const yerbaRef = useRef<HTMLDivElement>(null);

  const originalInView = useInView(originalRef, { margin: "-45%" });
  const yerbaInView = useInView(yerbaRef, { margin: "100% 0px -45% 0px" });

  return (
    <div
      className={clsx(
        "relative transition-colors duration-500",
        className,
        originalInView
          ? "bg-original-800"
          : yerbaInView
          ? "bg-mate-900"
          : "bg-gray-900"
      )}
    >
      {/* *** */}
      {/* Bottle grid - spanning the whole area and keeping the same grid layout as sections inner */}
      <Container className="absolute inset-0 grid h-full w-full grid-cols-3 items-start justify-start gap-10">
        <div className="sticky top-0 z-sticky col-span-1 col-start-2 col-end-3 flex h-screen items-center justify-center">
          <div className="relative h-max w-max pt-8">
            {yerbaInView ? (
              <div>
                <Image
                  src="/images/kombucha/mate/kombucha-mate-render-bottle.png"
                  alt="Kombucha originál ve flašce"
                  width={1080}
                  height={1920}
                  className="origin-center scale-95 object-contain"
                />
              </div>
            ) : (
              <Image
                src="/images/kombucha/original/kombucha-original-render-bottle.png"
                alt="Kombucha originál ve flašce"
                width={1080}
                height={1920}
                className="origin-center scale-95 object-contain"
              />
            )}
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
              Složení
            </Heading>
          </Reveal>
          <Reveal className="mt-auto">
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
          <Reveal className="mb-auto">
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
          <Reveal className="mt-auto">
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
          <Reveal className="mb-auto">
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
            <Reveal>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a
                harum ipsa possimus accusantium fugit rerum exercitationem
                excepturi officiis voluptas?
              </p>
            </Reveal>
            <Reveal className="flex gap-6 pt-8">
              <Button size="lg">Zobrazit více</Button>
              <Button size="lg">E-shop</Button>
            </Reveal>
          </div>
          {/* Right side */}
          <div className="relative z-20 col-span-1 col-start-3 col-end-4 flex flex-col items-start justify-between gap-10">
            <Reveal className="mt-auto">
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
            <Reveal className="mb-auto">
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
            <Reveal>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a
                harum ipsa possimus accusantium fugit rerum exercitationem
                excepturi officiis voluptas?
              </p>
            </Reveal>
            <Reveal className="flex gap-6 pt-8">
              <Button size="lg">Zobrazit více</Button>
              <Button size="lg">E-shop</Button>
            </Reveal>
          </div>
          {/* Right side */}
          <div className="relative z-20 col-span-1 col-start-3 col-end-4 flex flex-col items-start justify-between gap-10">
            <Reveal className="mt-auto">
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
            <Reveal className="mb-auto">
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
      {/* <section className="bg-mate-600">
        <Container py="xl" className="relative grid min-h-screen grid-cols-3 gap-10">
          <div className="col-start-1 col-end-2 col-span-1"></div>
          <div className="col-start-3 col-end-4 col-span-1"></div>
        </Container>
      </section> */}
    </div>
  );
}
