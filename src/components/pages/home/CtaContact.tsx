import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import clsx from "clsx";

type Props = {
  className?: string;
};

export default function CtaContact({ className = "" }: Props) {
  return (
    <div
      className={clsx(
        className,
        "group relative flex w-screen items-center justify-center overflow-hidden bg-primary-400 py-16 sm:py-28 xl:py-36"
      )}
    >
      <div
        className="absolute inset-0 z-10 h-full w-full bg-hero-pattern-black opacity-10"
        style={{ backgroundSize: "240px" }}
      />
      <div className="absolute left-1/2 top-1/2 z-20 h-[410px] w-[410px] origin-center -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-transform duration-700 group-hover:scale-[2.15] xs:h-[540px] xs:w-[540px] sm:h-[640px] sm:w-[640px] lg:h-[870px] lg:w-[870px]" />

      <Container className="relative z-30 flex h-full flex-col items-center justify-center gap-5 sm:gap-8">
        <Heading level={3} size="lg" color="black" className="text-center">
          Napište nám!
        </Heading>
        <p className="max-w-md text-center text-gray-800 lg:max-w-prose">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam qui
          iure rem corporis delectus vitae minima!
        </p>
        <Button href="/kontakt" intent="black" isFocusable={false}>
          Přejít na kontakt
        </Button>
      </Container>
    </div>
  );
}
