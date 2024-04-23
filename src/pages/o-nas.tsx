import BadgeCircle from "@/components/BadgeCircle";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import Hero from "@/components/pages/about/Hero";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { useTranslation } from "@/hooks/useTranslation";

import CustomIcon from "@/components/CustomIcon";
import BodyImage from "@/components/pages/shared/BodyImage";

export default function About() {
  const t = useTranslation();
  return (
    <Layout>
      <Seo title={t.about.seo.title} description={t.about.seo.description} />
      <Hero />

      {/* Sekce: Co je pragers */}
      <Container as="section" id="vice" py="md">
        <Reveal className="pb-10">
          <Heading
            level={2}
            size="xl"
            color="primary"
            hasMarginBottom
            className="mx-auto text-center"
          >
            {t.about.about.title}
          </Heading>
          <p className="mx-auto max-w-prose text-center">
            {t.about.about.perex}
          </p>
        </Reveal>

        <Container
          isInner
          py="md"
          className="grid gap-10 md:grid-cols-12 xl:gap-16"
        >
          <div className="flex max-w-md flex-col justify-end md:col-span-5">
            <Parallax className="hidden pb-24 md:block">
              <BadgeCircle />
            </Parallax>
            <Reveal hasTriggerMargin={false}>
              <Heading level={3} size="xs" hasMarginBottom>
                {t.about.about.subtitle1}
              </Heading>
              <p>{t.about.about.content1}</p>
            </Reveal>
          </div>
          <BodyImage
            src="/images/common/pragers-common-1.jpg"
            alt="pragers"
            width={1920}
            height={1280}
            className="md:col-span-7"
          />
        </Container>

        <Container isInner py="md">
          <Reveal>
            <Heading
              level={"none"}
              size="lg"
              color="primary"
              className="!leading-tight"
              hasMarginBottom
            >
              <p>{t.about.about.largeText}</p>
            </Heading>
          </Reveal>

          <div className="grid gap-10 pt-24 md:grid-cols-2">
            <div className="col-span-1 space-y-8 md:order-2">
              <Reveal className="max-w-md pb-12">
                <Heading level={3} size="xs" hasMarginBottom>
                  {t.about.about.subtitle2}
                </Heading>
                <p>{t.about.about.content2}</p>
              </Reveal>
            </div>
            <div className="col-span-1 md:order-1">
              <BodyImage
                src="/images/common/pragers-common-3.jpg"
                alt="pragers"
                width={1920}
                height={1280}
                className="md:col-span-7"
              />
            </div>
          </div>
        </Container>
      </Container>

      {/* Sekce: Udržitelnost */}
      <section className="relative bg-emerald-800">
        <div className="pattern-white absolute inset-0 z-10 h-full w-full" />
        <Container
          py="xl"
          className="relative z-20 grid items-center gap-20 sm:gap-8 md:grid-cols-2 lg:gap-12"
        >
          <Reveal className="col-span-1 flex flex-col items-start justify-center gap-10">
            <CustomIcon iconNumber={8} isLarge />
            <Heading level={2} size="lg">
              {t.about.enviroment.title}
            </Heading>
            <p className="max-w-prose">{t.about.enviroment.content}</p>
            {/* <Button size="lg">{t.about.enviroment.buttonLabel}</Button> */}
          </Reveal>
          <BodyImage
            src="/images/kombucha/original/artwork.jpg"
            alt="Kombucha original illustration"
            width={1920}
            height={2019}
            className="col-span-1"
          />
        </Container>
      </section>

      {/* Sekce: Naše mise */}
      <Container as={"section"} pt="lg" pb="xl">
        <Reveal className="pb-10">
          <Heading
            level={2}
            size="xl"
            color="primary"
            hasMarginBottom
            className="mx-auto text-center"
          >
            {t.about.ourMission.title}
          </Heading>
          <p className="mx-auto max-w-prose text-center">
            {t.about.ourMission.content}
          </p>
        </Reveal>

        <Container
          py="sm"
          isInner
          className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-12"
        >
          <BodyImage
            src="/images/common/pragers-common-2.jpg"
            alt="pragers"
            width={1920}
            height={1280}
            className="col-span-2"
          />
          <Reveal className="col-span-1 flex flex-col items-start justify-center gap-5">
            <CustomIcon iconNumber={7} />
            <Heading level={3} size="xs">
              {t.about.ourMission.subtitle1}
            </Heading>
            <p>{t.about.ourMission.content1}</p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="col-span-1 flex flex-col items-start justify-center gap-5"
          >
            <CustomIcon iconNumber={6} />
            <Heading level={3} size="xs">
              {t.about.ourMission.subtitle2}
            </Heading>
            <p>{t.about.ourMission.content2}</p>
          </Reveal>
        </Container>

        <Container
          py="sm"
          isInner
          className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-12"
        >
          <Reveal className="col-span-1 flex flex-col items-start justify-center gap-5">
            <CustomIcon iconNumber={3} />
            <Heading level={3} size="xs">
              {t.about.ourMission.subtitle3}
            </Heading>
            <p>{t.about.ourMission.content3}</p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="col-span-1 flex flex-col items-start justify-center gap-5"
          >
            <CustomIcon iconNumber={4} />
            <Heading level={3} size="xs">
              {t.about.ourMission.subtitle4}
            </Heading>
            <p>{t.about.ourMission.content4}</p>
          </Reveal>
          <BodyImage
            src="/images/common/pragers-common-7.jpg"
            alt="pragers"
            width={1920}
            height={1280}
            className="col-span-2"
          />
        </Container>
      </Container>
    </Layout>
  );
}
