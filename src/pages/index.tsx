import BadgeCircle from "@/components/BadgeCircle";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import CtaContact from "@/components/pages/home/CtaContact";
import CtaPrager from "@/components/pages/home/CtaPrager";
import Hero from "@/components/pages/home/Hero";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import clsx from "clsx";
import Image from "next/image";

function ImageBody({
  className = "",
  src = "",
  alt = "",
  width = 0,
  height = 0,
  ...props
}: {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Reveal
      className={clsx(
        "aspect-[16/10] overflow-hidden rounded-2xl bg-gray-700",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="aspect-[16/10] w-full object-cover"
        {...props}
      />
    </Reveal>
  );
}

export default function Home() {
  return (
    <Layout>
      <Seo title="Hlavní stránka" description="Lorem ipsum dolor" />
      <Hero />
      <Container py="lg">
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
          <ImageBody
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
              <ImageBody
                src="/fh-prager/prager-bg.jpg"
                alt="DOPLNIT!"
                width={1440}
                height={950}
                className="md:col-span-7"
              />
            </div>
            <div className="col-span-1 md:order-1">
              <ImageBody
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

      <CtaContact />
      <CtaPrager />
      <Container py="xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
        quasi? Aliquam, similique nihil fugit voluptates architecto in minus.
        Aliquid, distinctio?
      </Container>
      <Container py="xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
        quasi? Aliquam, similique nihil fugit voluptates architecto in minus.
        Aliquid, distinctio?
      </Container>
      <Container py="xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
        quasi? Aliquam, similique nihil fugit voluptates architecto in minus.
        Aliquid, distinctio?
      </Container>
      <Container py="xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
        quasi? Aliquam, similique nihil fugit voluptates architecto in minus.
        Aliquid, distinctio?
      </Container>
    </Layout>
  );
}
