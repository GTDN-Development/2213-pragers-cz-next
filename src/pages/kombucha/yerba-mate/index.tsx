// import Button from "@/components/Button";
import Collapse from "@/components/Collapse";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import Hero from "@/components/pages/product-detail/Hero";
import CtaCard from "@/components/pages/shared/CtaCard";
import HealthBenefits from "@/components/pages/shared/HealthBenefits";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { GiFlamedLeaf, GiMapleLeaf } from "react-icons/gi";

export default function Yerba() {
  const t = useTranslation();
  return (
    <Layout>
      <Seo title="Hlavní stránka" description="Lorem ipsum dolor" />
      <Hero
        variant="yerba"
        title1={t.kombuchaDetailPages.yerba.hero.title1}
        content1={t.kombuchaDetailPages.yerba.hero.content1}
        title2={t.kombuchaDetailPages.yerba.hero.title2}
        content2={t.kombuchaDetailPages.yerba.hero.content2}
        title3={t.kombuchaDetailPages.yerba.hero.title3}
        content3={t.kombuchaDetailPages.yerba.hero.content3}
      />
      <section className="bg-yerba-800">
        <Container py="xl" className="relative">
          <div className="relative z-20 pt-10">
            <Reveal>
              <Heading level={1} size="2xl" color="rich" hasMarginBottom>
                {t.kombuchaDetailPages.yerba.about.title}
              </Heading>
            </Reveal>
            <Reveal>
              <Heading
                level={"none"}
                size="lg"
                color="primary"
                className="!leading-tight"
                hasMarginBottom
              >
                <p>{t.kombuchaDetailPages.yerba.about.perex}</p>
              </Heading>
            </Reveal>
            {/* <Reveal className="pt-10">
              <Button href="https://eshop.fhprager.cz" size="xl">
                {t.kombuchaDetailPages.yerba.about.buttonLabel}
              </Button>
            </Reveal> */}
          </div>
          <Reveal noVertical>
            <GiMapleLeaf className="absolute top-10 right-0 z-10 h-52 w-52 origin-top text-yerba-700 md:top-2/3 md:h-2/3 md:w-1/2 md:-translate-y-2/3" />
          </Reveal>
        </Container>
      </section>

      <section className="bg-yerba-800">
        <Container py="md" className="grid gap-12 sm:grid-cols-12">
          <Reveal
            noVertical
            className="flex items-center justify-center sm:col-span-5"
          >
            <Image
              src="/images/kombucha/mate/kombucha-mate-render-can-outline.png"
              alt="Plechovka kombuchy - originál"
              width="2560"
              height="2560"
              loading="lazy"
              className="w-full object-contain md:scale-125"
            />
          </Reveal>
          <div className="grid gap-x-10 gap-y-8 xs:grid-cols-2 sm:col-span-7">
            <div className="my-auto">
              <Reveal>
                <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
                <Heading level={3} size="sm" color="rich" hasMarginBottom>
                  {t.kombuchaDetailPages.yerba.about.subtitle1}
                </Heading>
                <p>{t.kombuchaDetailPages.yerba.about.content1}</p>
              </Reveal>
            </div>
            <Reveal className="my-auto">
              <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
              <Heading level={3} size="sm" color="rich" hasMarginBottom>
                {t.kombuchaDetailPages.yerba.about.subtitle2}
              </Heading>
              <p>{t.kombuchaDetailPages.yerba.about.content2}</p>
            </Reveal>
          </div>
        </Container>

        <Container className="grid gap-12 sm:grid-cols-12">
          <Reveal className="sm:col-span-7 sm:col-start-6">
            <Heading level={3} size="md" color="primary" hasMarginBottom>
              {t.kombuchaDetailPages.yerba.otherInfo.title}
            </Heading>
            <Collapse.Group>
              <Collapse
                title={t.kombuchaDetailPages.yerba.otherInfo.collapse1.title}
              >
                <p>{t.kombuchaDetailPages.yerba.otherInfo.collapse1.content}</p>
              </Collapse>
              <Collapse
                title={t.kombuchaDetailPages.yerba.otherInfo.collapse2.title}
              >
                <p>{t.kombuchaDetailPages.yerba.otherInfo.collapse2.content}</p>
              </Collapse>
            </Collapse.Group>
          </Reveal>
        </Container>
      </section>

      {/*Sekce: Zdravotní benefity */}
      <HealthBenefits
        variant="yerba"
        title={t.kombuchaDetailPages.yerba.healthBenefitsTitle}
      />

      {/* Další odkazy - kam dál */}
      <section className="bg-yerba-800">
        <Container pb="xl" className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
          <Reveal>
            <CtaCard
              href="/"
              src="/images/kombucha/original/kombucha-original-illustration.jpg"
              width={960}
              height={1009}
              title={t.common.ctaCards.kombucha.title}
              text={t.common.ctaCards.kombucha.content}
            />
          </Reveal>
          <Reveal>
            <CtaCard
              href="/"
              src="/images/kombucha/mate/kombucha-mate-illustration.jpg"
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
