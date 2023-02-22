import BadgeCircle from "@/components/BadgeCircle";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import Hero from "@/components/pages/about/Hero";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { IoLeafOutline } from "react-icons/io5";

import BodyImage from "@/components/pages/shared/BodyImage";

export default function About() {
  return (
    <Layout>
      <Seo title="Hlavní stránka" description="Lorem ipsum dolor" />
      <Hero />
      <Container py="md">
        <Reveal className="pb-10">
          <Heading
            level={2}
            size="xl"
            color="primary"
            hasMarginBottom
            className="mx-auto text-center"
          >
            Co je Pragers?
          </Heading>
          <p className="mx-auto max-w-prose text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            delectus possimus enim, autem, dolores, laudantium nisi commodi
            deserunt itaque excepturi illum. Dolorum, est quo doloribus ut
            aliquam nostrum minus pariatur!
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
                Lorem ipsum
              </Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                iure ab labore iusto cupiditate consectetur!
              </p>
            </Reveal>
          </div>
          <BodyImage
            src="/fh-prager/prager-bg.jpg"
            alt="DOPLNIT!"
            width={1440}
            height={950}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Heading>
          </Reveal>

          <div className="grid gap-10 pt-24 md:grid-cols-2">
            <div className="col-span-1 space-y-8 md:order-2">
              <Reveal className="max-w-md pb-12">
                <Heading level={3} size="xs" hasMarginBottom>
                  Lorem ipsum
                </Heading>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta iure ab labore iusto cupiditate consectetur!
                </p>
              </Reveal>
            </div>
            <div className="col-span-1 md:order-1">
              <BodyImage
                src="/fh-prager/prager-bg.jpg"
                alt="DOPLNIT!"
                width={1440}
                height={950}
                className="md:col-span-7"
              />
            </div>
          </div>
        </Container>
      </Container>

      <div className="relative bg-emerald-800">
        <div className="pattern-white absolute inset-0 z-10 h-full w-full" />
        <Container
          py="xl"
          className="relative z-20 grid items-center gap-20 sm:gap-8 md:grid-cols-2 lg:gap-16"
        >
          <Reveal className="col-span-1 flex flex-col items-start justify-center gap-8">
            <IoLeafOutline className="h-24 w-24 text-primary" />
            <Heading level={2} size="lg">
              Udržitelnost
            </Heading>
            <p className="max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              dolorum id, quasi consequatur consequuntur et sint neque amet
              iusto eum incidunt quaerat inventore pariatur dicta minus
              asperiores dolorem eaque iste?
            </p>
            <Button size="lg">Zjistit více</Button>
          </Reveal>
          <BodyImage
            src="/fh-prager/prager-bg.jpg"
            alt="DOPLNIT!"
            width={1440}
            height={950}
            className="col-span-1"
          />
        </Container>
      </div>

      <Container pt="lg" pb="xl">
        <Reveal className="pb-10">
          <Heading
            level={2}
            size="xl"
            color="primary"
            hasMarginBottom
            className="mx-auto text-center"
          >
            Naše mise
          </Heading>
          <p className="mx-auto max-w-prose text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            delectus possimus enim, autem, dolores, laudantium nisi commodi
            deserunt itaque excepturi illum. Dolorum, est quo doloribus ut
            aliquam nostrum minus pariatur!
          </p>
        </Reveal>

        <Container
          py="sm"
          isInner
          className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-12"
        >
          <BodyImage
            src="/fh-prager/prager-bg.jpg"
            alt="DOPLNIT!"
            width={1440}
            height={950}
            className="col-span-2"
          />
          <Reveal className="col-span-1 flex flex-col items-start justify-center gap-5">
            <IoLeafOutline className="h-14 w-14 text-primary" />
            <Heading level={3} size="xs">
              Lorem ipsum
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              illo quod? Repellendus maxime ipsum quidem?
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="col-span-1 flex flex-col items-start justify-center gap-5"
          >
            <IoLeafOutline className="h-14 w-14 text-primary" />
            <Heading level={3} size="xs">
              Lorem ipsum
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              illo quod? Repellendus maxime ipsum quidem?
            </p>
          </Reveal>
        </Container>

        <Container
          py="sm"
          isInner
          className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-12"
        >
          <Reveal className="col-span-1 flex flex-col items-start justify-center gap-5">
            <IoLeafOutline className="h-14 w-14 text-primary" />
            <Heading level={3} size="xs">
              Lorem ipsum
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              illo quod? Repellendus maxime ipsum quidem?
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="col-span-1 flex flex-col items-start justify-center gap-5"
          >
            <IoLeafOutline className="h-14 w-14 text-primary" />
            <Heading level={3} size="xs">
              Lorem ipsum
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              illo quod? Repellendus maxime ipsum quidem?
            </p>
          </Reveal>
          <BodyImage
            src="/fh-prager/prager-bg.jpg"
            alt="DOPLNIT!"
            width={1440}
            height={950}
            className="col-span-2"
          />
        </Container>
      </Container>
    </Layout>
  );
}
