import Collapse from "@/components/Collapse";
import Container from "@/components/Container";
import CustomIcon from "@/components/CustomIcon";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import Hero from "@/components/pages/product-detail/Hero";
import CtaCard from "@/components/pages/shared/CtaCard";
import HealthBenefits from "@/components/pages/shared/HealthBenefits";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export default function Home() {
  const t = useTranslation();
  return (
    <Layout>
      <Seo
        title={t.kombuchaDetailPages.matcha.seo.title}
        description={t.kombuchaDetailPages.matcha.seo.description}
      />
      <Hero
        variant="matcha"
        title1={t.kombuchaDetailPages.matcha.hero.title1}
        content1={t.kombuchaDetailPages.matcha.hero.content1}
        title2={t.kombuchaDetailPages.matcha.hero.title2}
        content2={t.kombuchaDetailPages.matcha.hero.content2}
        title3={t.kombuchaDetailPages.matcha.hero.title3}
        content3={t.kombuchaDetailPages.matcha.hero.content3}
      />
      <section className="bg-matcha-800">
        <Container py="xl" className="relative">
          <div className="relative z-20 pt-10">
            <Reveal>
              <Heading level={1} size="2xl" color="rich" hasMarginBottom>
                {t.kombuchaDetailPages.matcha.about.title}
              </Heading>
            </Reveal>
            <Reveal>
              <Heading
                level={"none"}
                size="md"
                color="primary"
                className="!leading-tight"
                hasMarginBottom
              >
                <p>{t.kombuchaDetailPages.matcha.about.perex}</p>
              </Heading>
            </Reveal>
            {/* <Reveal className="pt-10">
              <Button href="https://eshop.fhprager.cz" size="xl">
                {t.kombuchaDetailPages.original.about.buttonLabel}
              </Button>
            </Reveal> */}
          </div>
          <Reveal noVertical>
            <div className="absolute top-10 right-0 z-10 h-52 w-52 origin-top text-matcha-700 md:top-2/3 md:h-2/3 md:w-1/2 md:-translate-y-2/3">
              <img
                src="/icons/leaf-original.svg"
                alt="leaf"
                aria-hidden="true"
                width="720"
                height="720"
                className="w-full object-contain opacity-10"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-matcha-800">
        <Container py="md" className="grid gap-12 sm:grid-cols-12">
          <Reveal
            noVertical
            className="flex items-center justify-center sm:col-span-5"
          >
            <Image
              src="/images/kombucha/matcha/render-can-outline.png"
              alt="Plechovka kombuchy - originál"
              width="2560"
              height="2560"
              loading="lazy"
              className="w-full object-contain md:scale-125"
            />
          </Reveal>
          <div className="my-auto  sm:col-span-7 ">
            <div className="flex w-full flex-col items-start gap-y-8 gap-x-10 md:flex-row">
              <div>
                <Reveal>
                  <CustomIcon iconNumber={4} />
                  <Heading level={3} size="sm" color="rich" hasMarginBottom>
                    {t.kombuchaDetailPages.matcha.about.subtitle1}
                  </Heading>
                  <p>{t.kombuchaDetailPages.matcha.about.content1}</p>
                </Reveal>
              </div>
              <div>
                <Reveal>
                  <CustomIcon iconNumber={3} />
                  <Heading level={3} size="sm" color="rich" hasMarginBottom>
                    {t.kombuchaDetailPages.matcha.about.subtitle2}
                  </Heading>
                  <p>{t.kombuchaDetailPages.matcha.about.content2}</p>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>

        <Container className="grid gap-12 sm:grid-cols-12">
          <Reveal className="sm:col-span-7 sm:col-start-6">
            <Heading level={3} size="md" color="primary" hasMarginBottom>
              {t.kombuchaDetailPages.matcha.otherInfo.title}
            </Heading>
            <Collapse.Group>
              <Collapse
                title={t.kombuchaDetailPages.matcha.otherInfo.collapse1.title}
              >
                <p>
                  {t.kombuchaDetailPages.matcha.otherInfo.collapse1.content}
                </p>
              </Collapse>
              {/* <Collapse
                title={t.kombuchaDetailPages.original.otherInfo.collapse2.title}
              >
                <p>
                  {t.kombuchaDetailPages.original.otherInfo.collapse2.content}
                </p>
              </Collapse> */}
            </Collapse.Group>
          </Reveal>
        </Container>
      </section>

      {/*Sekce: Zdravotní benefity */}
      <HealthBenefits
        variant="matcha"
        title={t.kombuchaDetailPages.matcha.healthBenefitsTitle}
      />

      {/* Další odkazy - kam dál */}
      <section className="bg-matcha-800">
        <Container pb="xl" className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
          <Reveal>
            <CtaCard
              href="/kombucha"
              src="/images/kombucha/original/artwork.jpg"
              width={960}
              height={1009}
              title={t.common.ctaCards.kombucha.title}
              text={t.common.ctaCards.kombucha.content}
            />
          </Reveal>
          <Reveal>
            <CtaCard
              href="/kombucha/yerba-mate"
              src="/images/kombucha/yerba/artwork.jpg"
              width={960}
              height={1009}
              title={t.common.ctaCards.yerba.title}
              text={t.common.ctaCards.yerba.content}
            />
          </Reveal>
        </Container>
      </section>
    </Layout>
  );
}
