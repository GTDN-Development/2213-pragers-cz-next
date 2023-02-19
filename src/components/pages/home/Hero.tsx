import BrandStrip from "@/components/BrandStrip";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import clsx from "clsx";
import { HiArrowDown } from "react-icons/hi2";

type Props = {
  className?: string;
};

export default function Hero({ className = "" }: Props) {
  return (
    <>
      <div
        className={clsx(
          "relative h-[calc(100vh-5rem)] w-screen bg-mate-700 md:min-h-[580px]",
          className
        )}
      >
        <div
          className="absolute inset-0 z-10 h-full w-full bg-hero-pattern-white opacity-10"
          style={{ backgroundSize: "240px" }}
        />
        <Container
          py="xl"
          className="relative z-30 grid h-full gap-8 md:grid-cols-12"
        >
          <div className="col-span-1 flex flex-col items-start justify-center gap-5 md:col-span-7">
            <Heading level={1} size="2xl">
              Lorem ipsum dolor
            </Heading>
            <Button size="lg" rightIcon={<HiArrowDown />}>
              Zjistit více
            </Button>
          </div>
          <div className="relative z-20 col-span-1 md:col-span-7">
            <div className="absolute z-20 aspect-square h-20 w-20 rounded-full" />
          </div>
        </Container>
      </div>
      <BrandStrip />
    </>
  );
}
