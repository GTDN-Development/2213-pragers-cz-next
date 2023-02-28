import BrandStrip from "@/components/BrandStrip";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function Hero({ className = "" }: Props) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) {
    return (
      <>
        <div
          className={clsx(
            "relative isolate hidden h-[100rem] w-screen overflow-hidden bg-gray-900 lg:block",
            className
          )}
        >
          <Parallax
            offset={-50}
            className="absolute inset-x-0 -top-16 z-10 h-[2187px] origin-[50%_0%] opacity-75"
          >
            <div
              className="h-full"
              style={{
                backgroundImage: `url(/images/kombucha/parallax-base-xs-better-q.jpg)`,
                backgroundSize: "3264px",
                backgroundPosition: "center",
                backgroundRepeat: "repeat-x",
              }}
            />
          </Parallax>
          <Parallax
            offset={-80}
            className="absolute top-[200px] z-10 flex w-full origin-[50%_0%] items-center justify-center"
          >
            <Reveal noVertical>
              <Heading
                level={1}
                size="inherit"
                className="text-center text-9xl text-white 2xl:text-[10.5rem]"
              >
                Pragers <br />
                Kombucha
              </Heading>
            </Reveal>
          </Parallax>
          <Parallax
            offset={75}
            className="absolute inset-x-0 top-[430px] z-20 h-[1709px] origin-[50%_0%]"
          >
            <div
              className="h-full"
              style={{
                backgroundImage: `url(/images/kombucha/parallax-middle-xs.png)`,
                backgroundSize: "3264px",
                backgroundPosition: "center",
                backgroundRepeat: "repeat-x",
              }}
            />
          </Parallax>
          <Parallax
            offset={150}
            className="absolute inset-x-0 top-[920px] z-30 h-[1250px] origin-[50%_0%]"
          >
            <div
              className="h-full"
              style={{
                backgroundImage: `url(/images/kombucha/parallax-top-xs.png)`,
                backgroundSize: "3264px",
                backgroundPosition: "center",
                backgroundRepeat: "repeat-x",
              }}
            />
          </Parallax>
        </div>
        <BrandStrip />
      </>
    );
  }

  return (
    <>
      <div className="items-srart relative flex h-[calc(100vh-5rem)] min-h-[400px] w-screen flex-col justify-start pt-36">
        <Image
          src="/images/kombucha/original/kombucha-original-illustration.jpg"
          alt="Kombucha original ilustrace"
          width={3840}
          height={4037}
          className="absolute inset-0 -z-10 h-full object-cover opacity-50"
        />
        <Container className="relative z-10 flex flex-col items-start justify-start">
          <Heading level={1} size="2xl" color="rich" hasMarginBottom>
            Pragers
            <br />
            Kombucha
          </Heading>
          <Button size="lg">Zjistit více</Button>
        </Container>
      </div>
      <BrandStrip />
    </>
  );
}
