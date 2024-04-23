import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";

function BackgroundText({ className = "" }: { className?: string }) {
  const router = useRouter();
  const { locale } = router;
  return (
    <img
      src={
        locale === "cs"
          ? "/svgs/text-produkty-white.svg"
          : "/svgs/text-products-white.svg"
      }
      alt="Nápis Produkty"
      width="1488"
      height="353"
      loading="lazy"
      aria-hidden="true"
      className={clsx("pointer-events-none opacity-[0.03]", className)}
    />
  );
}

type Props = {
  as?: React.ElementType;
  className?: string;
};

export default function CtaProductLine({
  as: Component = "div",
  className = "",
}: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = useTranslation();
  return (
    <Component className={clsx("relative", className)}>
      <div className="absolute inset-0 flex h-full w-full skew-y-12 scale-y-[1.15] bg-gray-900 sm:skew-y-0 sm:scale-y-100">
        <Container className="flex flex-col gap-5 px-3 pt-5 sm:hidden">
          <BackgroundText className="-skew-x-12" />
          <BackgroundText className="-skew-x-12" />
          <BackgroundText className="-skew-x-12" />
          <BackgroundText className="-skew-x-12" />
        </Container>
      </div>
      <Container py="lg" className="relative">
        <img
          src={
            locale === "cs"
              ? "/svgs/text-produkty-white.svg"
              : "/svgs/text-products-white.svg"
          }
          alt="Nápis Produkty"
          width="1488"
          height="353"
          loading="lazy"
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 z-10 hidden w-full -translate-x-1/2 -translate-y-1/2 opacity-[0.03] sm:block"
        />
        <div className="relative z-30 grid h-full w-full gap-16 sm:grid-cols-2 sm:gap-5 lg:gap-20">
          <Reveal className="order-2 col-span-1 flex flex-col items-center justify-center gap-6 sm:order-1">
            <Heading
              level={3}
              size="md"
              className="mx-auto max-w-lg text-center"
            >
              {t.home.productKombucha.title}
            </Heading>
            <p className="mx-auto max-w-lg text-center">
              {t.home.productKombucha.description}
            </p>
            <Button href="/kombucha" size="xl">
              {t.home.productKombucha.buttonLabel}
            </Button>
          </Reveal>
          <Reveal className="order-1 col-span-1 sm:order-2">
            <Image
              src="/images/kombucha/original/render-can.png"
              alt="Plechovka kombuchy - originál"
              width="2560"
              height="2560"
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </Reveal>
        </div>
      </Container>
    </Component>
  );
}
