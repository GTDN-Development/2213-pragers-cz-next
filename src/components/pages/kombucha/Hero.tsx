import BrandStrip from "@/components/BrandStrip";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";
import Image from "next/image";

export function HeroMobile({ className = "" }: { className?: string }) {
  const t = useTranslation();

  return (
    <>
      <section
        className={clsx(
          "items-srart relative flex h-[calc(100vh-5rem)] min-h-[400px] w-screen flex-col justify-start pt-36 lg:hidden",
          className
        )}
      >
        <Image
          src="/images/kombucha/original/artwork.jpg"
          alt="Kombucha original ilustrace"
          width={1920}
          height={2019}
          className="absolute inset-0 -z-10 h-full object-cover opacity-50"
        />
        <Container className="relative z-10 flex flex-col items-start justify-start">
          <Heading level={1} size="2xl" color="rich" hasMarginBottom>
            {t.kombucha.hero.title}
          </Heading>
          <Button href="#vice" size="lg">
            {t.kombucha.hero.buttonLabel}
          </Button>
        </Container>
      </section>
      <BrandStrip className="lg:hidden" />
    </>
  );
}

// Desktop - old
export function Hero({
  className = "",
  parallaxTargetRef = null,
}: {
  className?: string;
  parallaxTargetRef: React.RefObject<HTMLDivElement> | null;
}) {
  const t = useTranslation();
  return (
    <>
      <section
        className={clsx(
          "relative isolate hidden h-[86rem] w-screen overflow-hidden bg-gray-900 lg:block",
          className
        )}
      >
        <Parallax
          target={parallaxTargetRef}
          offset={0}
          className="absolute inset-x-0 z-10 h-[1358px] origin-[50%_0%] opacity-75"
        >
          <div
            className="h-full"
            style={{
              backgroundImage: `url(/images/kombucha/parallax-wide-base.jpg)`,
              backgroundSize: "3841px",
              backgroundPosition: "center",
              backgroundRepeat: "repeat-x",
            }}
          />
        </Parallax>
        <Parallax
          target={parallaxTargetRef}
          offset={-200}
          className="absolute top-[250px] z-10 flex w-full origin-[50%_0%] items-center justify-center"
        >
          <Reveal noVertical>
            <Heading
              level={1}
              size="inherit"
              className="mx-auto max-w-6xl text-center text-8xl text-white 2xl:text-9xl"
            >
              {t.kombucha.hero.title}
            </Heading>
          </Reveal>
        </Parallax>
        <Parallax
          target={parallaxTargetRef}
          offset={500}
          className="absolute inset-x-0 top-[-500px] z-20 h-[1358px] origin-[50%_0%]"
        >
          <div
            className="h-full"
            style={{
              backgroundImage: `url(/images/kombucha/parallax-wide-middle.png)`,
              backgroundSize: "3841px",
              backgroundPosition: "center",
              backgroundRepeat: "repeat-x",
            }}
          />
        </Parallax>
        <Parallax
          target={parallaxTargetRef}
          offset={1000}
          className="absolute inset-x-0 top-[-1000px] z-30 h-[1645px] origin-[50%_0%]"
        >
          <div
            className="h-full"
            style={{
              backgroundImage: `url(/images/kombucha/parallax-wide-top.png)`,
              backgroundSize: "3841px",
              backgroundPosition: "center",
              backgroundRepeat: "repeat-x",
            }}
          />
        </Parallax>
      </section>
      <BrandStrip className="hidden lg:block" />
    </>
  );
}

// Desktop - old
// export function HeroOld({ className = "" }: { className?: string }) {
//   const t = useTranslation();
//   return (
//     <>
//       <section
//         className={clsx(
//           "relative isolate hidden h-[100rem] w-screen overflow-hidden bg-gray-900 lg:block",
//           className
//         )}
//       >
//         <Parallax
//           offset={-50}
//           className="absolute inset-x-0 -top-16 z-10 h-[2187px] origin-[50%_0%] opacity-75"
//         >
//           <div
//             className="h-full"
//             style={{
//               backgroundImage: `url(/images/kombucha/parallax-base.jpg)`,
//               backgroundSize: "3264px",
//               backgroundPosition: "center",
//               backgroundRepeat: "repeat-x",
//             }}
//           />
//         </Parallax>
//         <Parallax
//           offset={-80}
//           className="absolute top-[200px] z-10 flex w-full origin-[50%_0%] items-center justify-center"
//         >
//           <Reveal noVertical>
//             <Heading
//               level={1}
//               size="inherit"
//               className="mx-auto max-w-6xl text-center text-9xl text-white 2xl:text-[10.5rem]"
//             >
//               {t.kombucha.hero.title}
//             </Heading>
//           </Reveal>
//         </Parallax>
//         <Parallax
//           offset={75}
//           className="absolute inset-x-0 top-[430px] z-20 h-[1709px] origin-[50%_0%]"
//         >
//           <div
//             className="h-full"
//             style={{
//               backgroundImage: `url(/images/kombucha/parallax-middle.png)`,
//               backgroundSize: "3264px",
//               backgroundPosition: "center",
//               backgroundRepeat: "repeat-x",
//             }}
//           />
//         </Parallax>
//         <Parallax
//           offset={150}
//           className="absolute inset-x-0 top-[920px] z-30 h-[1250px] origin-[50%_0%]"
//         >
//           <div
//             className="h-full"
//             style={{
//               backgroundImage: `url(/images/kombucha/parallax-top.png)`,
//               backgroundSize: "3264px",
//               backgroundPosition: "center",
//               backgroundRepeat: "repeat-x",
//             }}
//           />
//         </Parallax>
//       </section>
//       <BrandStrip className="hidden lg:block" />
//     </>
//   );
// }
