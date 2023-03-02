import Button from "@/components/Button";
import Collapse from "@/components/Collapse";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import Hero from "@/components/pages/product-detail/Hero";
import CtaCard from "@/components/pages/shared/CtaCard";
import HealthBenefits from "@/components/pages/shared/HealthBenefits";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import Image from "next/image";
import { GiFlamedLeaf, GiMapleLeaf } from "react-icons/gi";

export default function Home() {
  return (
    <Layout>
      <Seo title="Hlavní stránka" description="Lorem ipsum dolor" />
      <Hero variant="original" />
      <section className="bg-original-800">
        <Container py="xl" className="relative">
          <div className="relative z-20 pt-10">
            <Reveal>
              <Heading level={1} size="2xl" color="rich" hasMarginBottom>
                Original
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </Heading>
            </Reveal>
            <Reveal className="pt-10">
              <Button size="xl">Zobrazit v e-shopu</Button>
            </Reveal>
          </div>
          <Reveal noVertical>
            <GiMapleLeaf className="absolute top-10 right-0 z-10 h-52 w-52 origin-top text-original-700 md:top-2/3 md:h-2/3 md:w-1/2 md:-translate-y-2/3" />
          </Reveal>
        </Container>
      </section>

      <section className="bg-original-800">
        <Container py="md" className="grid gap-12 sm:grid-cols-12">
          <Reveal
            noVertical
            className="flex items-center justify-center sm:col-span-5"
          >
            <Image
              src="/images/kombucha/original/kombucha-original-render-can-outline.png"
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
                  Lorem ipsum
                </Heading>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio iusto, atque facilis repellat unde ratione nam fuga
                  voluptatibus tempora excepturi!
                </p>
              </Reveal>
            </div>
            <Reveal className="my-auto">
              <GiFlamedLeaf className="mb-4 h-10 w-10 text-primary" />
              <Heading level={3} size="sm" color="rich" hasMarginBottom>
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

        <Container className="grid gap-12 sm:grid-cols-12">
          <Reveal className="sm:col-span-7 sm:col-start-6">
            <Heading level={3} size="md" color="primary" hasMarginBottom>
              Další informace
            </Heading>
            <Collapse.Group>
              <Collapse title="Výživové údaje">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  repudiandae eveniet minus harum necessitatibus temporibus quam
                  ex non ratione placeat tempora similique molestiae, cum
                  aliquid saepe possimus iure totam quae maxime! Veniam corporis
                  quod minima aspernatur, distinctio porro sint! Expedita?
                </p>
              </Collapse>
              <Collapse title="Výživové údaje">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  repudiandae eveniet minus harum necessitatibus temporibus quam
                  ex non ratione placeat tempora similique molestiae, cum
                  aliquid saepe possimus iure totam quae maxime! Veniam corporis
                  quod minima aspernatur, distinctio porro sint! Expedita?
                </p>
              </Collapse>
            </Collapse.Group>
          </Reveal>
        </Container>
      </section>

      {/*Sekce: Zdravotní benefity */}
      <HealthBenefits variant="original" />

      {/* Další odkazy - kam dál */}
      <section className="bg-original-800">
        <Container pb="xl" className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
          <Reveal>
            <CtaCard
              href="/"
              src="/images/kombucha/original/kombucha-original-illustration.jpg"
              width={960}
              height={1009}
              title="Pragers Kombucha"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum voluptatibus mollitia doloremque distinctio ullam reiciendis nam consequuntur atque debitis."
            />
          </Reveal>
          <Reveal>
            <CtaCard
              href="/"
              src="/images/kombucha/original/kombucha-original-illustration.jpg"
              width={960}
              height={1009}
              title="Pragers Kombucha"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum voluptatibus mollitia doloremque distinctio ullam reiciendis nam consequuntur atque debitis."
            />
          </Reveal>
        </Container>
      </section>
    </Layout>
  );
}
