import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import clsx from "clsx";
import { GiFlamedLeaf } from "react-icons/gi";

export default function HealthBenefits({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "original" | "yerba";
}) {
  return (
    <section
      className={clsx(
        "relative w-screen",
        variant === "original" && "bg-original-800",
        variant === "yerba" && "bg-mate-800",
        variant === "default" && "bg-gray-800",
        className
      )}
    >
      {variant === "default" && (
        <div className="pattern-white absolute inset-0 z-10 h-full w-full" />
      )}

      <Container py="xl" className="relative z-30">
        <Reveal className="pb-10 lg:col-span-2">
          <Heading
            level={2}
            size="xl"
            className="mx-auto text-center"
            hasMarginBottom
          >
            Zdravotní benefity
          </Heading>
        </Reveal>
        <div className="grid w-full sm:grid-cols-2 sm:gap-10 xl:grid-cols-4">
          <Reveal className="col-span-1 flex items-center justify-start sm:justify-center">
            <div
              className={clsx(
                "flex h-64 w-64 flex-col items-center justify-center rounded-full text-center",
                variant === "original" && "bg-original-700",
                variant === "yerba" && "bg-mate-700",
                variant === "default" && "bg-gray-900"
              )}
            >
              <GiFlamedLeaf className="mb-3 h-10 w-10 text-primary" />
              <Heading level={3} size="xs" hasMarginBottom>
                Lorem ipsum
              </Heading>
              <p className="max-w-[11rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Reveal>

          <Reveal className="col-span-1 flex items-center justify-end sm:justify-center">
            <div
              className={clsx(
                "flex h-64 w-64 flex-col items-center justify-center rounded-full text-center",
                variant === "original" && "bg-original-700",
                variant === "yerba" && "bg-mate-700",
                variant === "default" && "bg-gray-900"
              )}
            >
              <GiFlamedLeaf className="mb-3 h-10 w-10 text-primary" />
              <Heading level={3} size="xs" hasMarginBottom>
                Lorem ipsum
              </Heading>
              <p className="max-w-[11rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Reveal>

          <Reveal className="col-span-1 flex items-center justify-start sm:justify-center">
            <div
              className={clsx(
                "flex h-64 w-64 flex-col items-center justify-center rounded-full text-center",
                variant === "original" && "bg-original-700",
                variant === "yerba" && "bg-mate-700",
                variant === "default" && "bg-gray-900"
              )}
            >
              <GiFlamedLeaf className="mb-3 h-10 w-10 text-primary" />
              <Heading level={3} size="xs" hasMarginBottom>
                Lorem ipsum
              </Heading>
              <p className="max-w-[11rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Reveal>

          <Reveal className="col-span-1 flex items-center justify-end sm:justify-center">
            <div
              className={clsx(
                "flex h-64 w-64 flex-col items-center justify-center rounded-full text-center",
                variant === "original" && "bg-original-700",
                variant === "yerba" && "bg-mate-700",
                variant === "default" && "bg-gray-900"
              )}
            >
              <GiFlamedLeaf className="mb-3 h-10 w-10 text-primary" />
              <Heading level={3} size="xs" hasMarginBottom>
                Lorem ipsum
              </Heading>
              <p className="max-w-[11rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
