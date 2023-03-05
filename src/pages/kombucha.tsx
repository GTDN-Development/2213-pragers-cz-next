import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import { Hero, HeroMobile } from "@/components/pages/kombucha/Hero";
import {
  IngredientsFlavours,
  IngredientsFlavoursMobile,
} from "@/components/pages/kombucha/IngredientsFlavours";
import CtaCard from "@/components/pages/shared/CtaCard";
import HealthBenefits from "@/components/pages/shared/HealthBenefits";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import ExportedImage from "next-image-export-optimizer";

export default function Kombucha() {
  return (
    <Layout>
      <Seo title="Hlavní stránka" description="Lorem ipsum dolor" />
      <Hero />
      <HeroMobile />

      {/*Sekce: Co je kombucha? */}
      <section className="bg-gray-900">
        <Container py="lg" className="grid gap-10 lg:grid-cols-2">
          <Reveal className="pb-10 lg:col-span-2">
            <Heading level={2} size="xl" className="mx-auto text-center">
              Co je kombucha?
            </Heading>
          </Reveal>
          <div className="flex items-center justify-start">
            <Reveal className="pb-10">
              <Heading
                level={"none"}
                size="md"
                color="primary"
                className="text-center !leading-tight lg:text-left"
                hasMarginBottom
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </Heading>
            </Reveal>
          </div>
          <Reveal className="flex items-center justify-start">
            <ExportedImage
              src="/images/kombucha/original/kombucha-original-illustration.jpg"
              alt="Kombucha original ilustrace"
              width={3840}
              height={4037}
              className="aspect-square h-full w-full overflow-hidden rounded-full border-8 border-primary object-cover"
            />
          </Reveal>
        </Container>
      </section>

      {/*Sekce: Výroba */}
      <section className="relative w-screen overflow-hidden bg-gray-800">
        <div className="pattern-white absolute inset-0 z-10 h-full w-full" />
        <img
          src="/svgs/path-short.svg"
          alt="cesta"
          width="743"
          height="2012"
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 z-20 hidden -translate-y-1/2 -translate-x-1/2 scale-x-90 md:block"
        />
        <img
          src="/svgs/path-long.svg"
          alt="cesta"
          width="489"
          height="2262"
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 z-20 -translate-y-1/2 -translate-x-1/2 scale-x-90 md:hidden"
        />

        <Container py="md" className="relative z-30">
          <Reveal className="pb-10 text-center md:text-left">
            <Heading
              level={2}
              size="xs"
              className="mx-auto md:mx-0"
              hasMarginBottom
            >
              V čem jsme jiní
            </Heading>
            <Heading level={2} size="xl" className="mx-auto md:mx-0">
              Výroba
            </Heading>
          </Reveal>

          <Container isInner py="sm" className="flex flex-col gap-16 md:gap-28">
            {/* Row 1 */}
            <div className="grid gap-10 md:grid-cols-3">
              <Reveal className="flex items-center justify-center md:col-start-2">
                <div className="flex aspect-square h-40 w-40 items-center justify-center rounded-full bg-primary p-10 md:h-56 md:w-56 xl:h-64 xl:w-64">
                  <ExportedImage
                    src="/images/kombucha/glass-1.png"
                    alt="sklenice"
                    width={165}
                    height={200}
                    className="h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal className="flex flex-col items-center justify-center md:col-start-3">
                <Heading
                  level={"none"}
                  size="xl"
                  color="primary"
                  className="mb-5"
                >
                  1
                </Heading>
                <Heading level={3} size="xs">
                  Lorem ipsum
                </Heading>
                <p className="max-w-md text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  totam in expedita dignissimos voluptates accusamus?
                </p>
              </Reveal>
            </div>

            {/* Row 2 */}
            <div className="grid gap-10 md:grid-cols-3">
              <Reveal className="row-start-2 flex flex-col items-center justify-center md:row-start-auto">
                <Heading
                  level={"none"}
                  size="xl"
                  color="primary"
                  className="mb-5"
                >
                  2
                </Heading>
                <Heading level={3} size="xs">
                  Lorem ipsum
                </Heading>
                <p className="max-w-md text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  totam in expedita dignissimos voluptates accusamus?
                </p>
              </Reveal>
              <Reveal className="row-start-1 flex items-center justify-center md:row-start-auto">
                <div className="flex aspect-square h-40 w-40 items-center justify-center rounded-full bg-primary p-10 md:h-56 md:w-56 xl:h-64 xl:w-64">
                  <ExportedImage
                    src="/images/kombucha/glass-2.png"
                    alt="sklenice"
                    width={165}
                    height={200}
                    className="h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            {/* Row 3 */}
            <div className="grid gap-10 md:grid-cols-3">
              <Reveal className="flex items-center justify-center md:col-start-2">
                <div className="flex aspect-square h-40 w-40 items-center justify-center rounded-full bg-primary p-10 md:h-56 md:w-56 xl:h-64 xl:w-64">
                  <ExportedImage
                    src="/images/kombucha/glass-3.png"
                    alt="sklenice"
                    width={165}
                    height={200}
                    className="h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal className="flex flex-col items-center justify-center md:col-start-3">
                <Heading
                  level={"none"}
                  size="xl"
                  color="primary"
                  className="mb-5"
                >
                  3
                </Heading>
                <Heading level={3} size="xs">
                  Lorem ipsum
                </Heading>
                <p className="max-w-md text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  totam in expedita dignissimos voluptates accusamus?
                </p>
              </Reveal>
            </div>
          </Container>
        </Container>
      </section>

      {/* ********** */}
      {/* ********** */}
      {/*Sekce: Ingredience a příchutě */}
      <IngredientsFlavours className="hidden md:block" />
      <IngredientsFlavoursMobile className="md:hidden" />

      {/*Sekce: Zdravotní benefity */}
      <HealthBenefits />

      {/* Další odkazy - kam dál */}
      <section className="bg-gray-800">
        <Container py="xl" className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
          <Reveal className="sm:col-span-2">
            <Heading
              level={2}
              size="xl"
              hasMarginBottom
              className="text-center"
            >
              Zjistěte více o našich produktech
            </Heading>
          </Reveal>
          <Reveal>
            <CtaCard
              href="/"
              src="/images/kombucha/original/kombucha-original-illustration.jpg"
              width={960}
              height={1009}
              disableBg
              disableShadow
              title="Kombucha Original"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum voluptatibus mollitia doloremque distinctio ullam reiciendis nam consequuntur atque debitis."
              className="bg-original-900"
            />
          </Reveal>
          <Reveal>
            <CtaCard
              href="/"
              src="/images/kombucha/mate/kombucha-mate-illustration.jpg"
              width={960}
              height={1009}
              disableBg
              disableShadow
              title="Kombucha Yerba maté"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum voluptatibus mollitia doloremque distinctio ullam reiciendis nam consequuntur atque debitis."
              className="bg-yerba-900"
            />
          </Reveal>
        </Container>
      </section>
    </Layout>
  );
}
