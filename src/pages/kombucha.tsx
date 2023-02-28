import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import Hero from "@/components/pages/kombucha/Hero";
import IngredientsFlavours from "@/components/pages/kombucha/IngredientsFlavours";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import Image from "next/image";

export default function Kombucha() {
  return (
    <Layout>
      <Seo title="Hlavní stránka" description="Lorem ipsum dolor" />
      <Hero />

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Heading>
            </Reveal>
          </div>
          <Reveal className="flex items-center justify-start">
            <Image
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
      <section className="relative w-screen bg-gray-800">
        <div className="pattern-white absolute inset-0 z-10 h-full w-full" />

        <Container py="lg" className="relative z-30 grid gap-10 lg:grid-cols-2">
          <Reveal className="pb-10 lg:col-span-2">
            <Heading level={2} size="xl" className="mx-auto text-center">
              Výroba
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Heading>
            </Reveal>
          </div>
          <Reveal className="flex items-center justify-start">
            <Image
              src="/images/kombucha/original/kombucha-original-illustration.jpg"
              alt="Kombucha original ilustrace"
              width={3840}
              height={4037}
              className="aspect-square h-full w-full overflow-hidden rounded-full border-8 border-primary object-cover"
            />
          </Reveal>
        </Container>
      </section>

      {/* ********** */}
      {/* ********** */}
      {/*Sekce: Ingredience a příchutě */}
      <IngredientsFlavours />

      {/*Sekce: Výroba */}
      <section className="relative w-screen bg-gray-800">
        <div className="pattern-white absolute inset-0 z-10 h-full w-full" />

        <Container py="lg" className="relative z-30 grid gap-10 lg:grid-cols-2">
          <Reveal className="pb-10 lg:col-span-2">
            <Heading level={2} size="xl" className="mx-auto text-center">
              Výroba
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Heading>
            </Reveal>
          </div>
          <Reveal className="flex items-center justify-start">
            <Image
              src="/images/kombucha/original/kombucha-original-illustration.jpg"
              alt="Kombucha original ilustrace"
              width={3840}
              height={4037}
              className="aspect-square h-full w-full overflow-hidden rounded-full border-8 border-primary object-cover"
            />
          </Reveal>
        </Container>
      </section>

      {/* Placeholdres */}
      <Container py="xl">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          natus. Inventore, nulla. Necessitatibus rerum, pariatur quibusdam
          officia sed deleniti adipisci.
        </div>
      </Container>
      <Container py="xl">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          natus. Inventore, nulla. Necessitatibus rerum, pariatur quibusdam
          officia sed deleniti adipisci.
        </div>
      </Container>
      <Container py="xl">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          natus. Inventore, nulla. Necessitatibus rerum, pariatur quibusdam
          officia sed deleniti adipisci.
        </div>
      </Container>
      <Container py="xl">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          natus. Inventore, nulla. Necessitatibus rerum, pariatur quibusdam
          officia sed deleniti adipisci.
        </div>
      </Container>
      <Container py="xl">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          natus. Inventore, nulla. Necessitatibus rerum, pariatur quibusdam
          officia sed deleniti adipisci.
        </div>
      </Container>
      <Container py="xl">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          natus. Inventore, nulla. Necessitatibus rerum, pariatur quibusdam
          officia sed deleniti adipisci.
        </div>
      </Container>
    </Layout>
  );
}
