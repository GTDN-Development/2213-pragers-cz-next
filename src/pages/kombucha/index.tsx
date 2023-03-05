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
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export default function Kombucha() {
  const t = useTranslation();
  return (
    <Layout>
      <Seo
        title={t.kombucha.seo.title}
        description={t.kombucha.seo.description}
      />
      <Hero />
      <HeroMobile />

      {/*Sekce: Co je kombucha? */}
      <section id="vice" className="bg-gray-900">
        <Container py="lg" className="grid gap-10 lg:grid-cols-2">
          <Reveal className="pb-10 lg:col-span-2">
            <Heading level={2} size="xl" className="mx-auto text-center">
              {t.kombucha.aboutKombucha.title}
            </Heading>
          </Reveal>
          <div className="flex items-center justify-start">
            <Reveal className="pb-10">
              <Heading
                level={"none"}
                size="sm"
                color="primary"
                className="text-center !leading-relaxed lg:text-left"
                hasMarginBottom
              >
                <p>{t.kombucha.aboutKombucha.paragraph1}</p>
              </Heading>
              <Heading
                level={"none"}
                size="sm"
                color="primary"
                className="pt-10 text-center !leading-relaxed lg:text-left"
                hasMarginBottom
              >
                <p>{t.kombucha.aboutKombucha.paragraph2}</p>
              </Heading>
            </Reveal>
          </div>
          <Reveal className="flex items-center justify-start">
            <div className="aspect-square h-max w-full">
              <Image
                src="/images/common/photo-1.jpg"
                alt="pragers"
                width={1920}
                height={1280}
                className="aspect-square h-full w-full overflow-hidden rounded-full border-8 border-primary object-cover"
              />
            </div>
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
              {t.kombucha.whyWeAreDifferent.kicker}
            </Heading>
            <Heading level={2} size="xl" className="mx-auto md:mx-0">
              {t.kombucha.whyWeAreDifferent.title}
            </Heading>
          </Reveal>

          <Container isInner py="sm" className="flex flex-col gap-16 md:gap-28">
            {/* Row 1 */}
            <div className="grid gap-10 md:grid-cols-3">
              <Reveal className="flex items-center justify-center md:col-start-2">
                <div className="flex aspect-square h-40 w-40 items-center justify-center rounded-full bg-primary p-10 md:h-56 md:w-56 xl:h-64 xl:w-64">
                  <Image
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
                <Heading level={3} size="sm" hasMarginBottom>
                  {t.kombucha.whyWeAreDifferent.subtitle1}
                </Heading>
                <p className="max-w-md text-center">
                  {t.kombucha.whyWeAreDifferent.content1}
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
                <Heading level={3} size="sm" hasMarginBottom>
                  {t.kombucha.whyWeAreDifferent.subtitle2}
                </Heading>
                <p className="max-w-md text-center">
                  {t.kombucha.whyWeAreDifferent.content2}
                </p>
              </Reveal>
              <Reveal className="row-start-1 flex items-center justify-center md:row-start-auto">
                <div className="flex aspect-square h-40 w-40 items-center justify-center rounded-full bg-primary p-10 md:h-56 md:w-56 xl:h-64 xl:w-64">
                  <Image
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
                  <Image
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
                <Heading level={3} size="sm" hasMarginBottom>
                  {t.kombucha.whyWeAreDifferent.subtitle3}
                </Heading>
                <p className="max-w-md text-center">
                  {t.kombucha.whyWeAreDifferent.content3}
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
              {t.kombucha.learnMore}
            </Heading>
          </Reveal>
          <Reveal>
            <CtaCard
              href="/kombucha/original"
              src="/images/kombucha/original/kombucha-original-illustration.jpg"
              width={960}
              height={1009}
              disableBg
              disableShadow
              title={t.common.ctaCards.original.title}
              text={t.common.ctaCards.original.content}
              className="bg-original-800"
            />
          </Reveal>
          <Reveal>
            <CtaCard
              href="/kombucha/yerba-mate"
              src="/images/kombucha/mate/kombucha-mate-illustration.jpg"
              width={960}
              height={1009}
              disableBg
              disableShadow
              title={t.common.ctaCards.yerba.title}
              text={t.common.ctaCards.yerba.content}
              className="bg-yerba-800"
            />
          </Reveal>
        </Container>
      </section>
    </Layout>
  );
}
