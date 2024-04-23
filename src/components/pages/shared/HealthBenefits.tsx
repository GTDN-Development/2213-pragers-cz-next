import Container from "@/components/Container";
import CustomIcon from "@/components/CustomIcon";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";

export default function HealthBenefits({
  title,
  className = "",
  variant = "default",
}: {
  title?: string;
  className?: string;
  variant?: "default" | "original" | "yerba" | "matcha";
}) {
  const t = useTranslation();

  const defaultTitle = t.common.healthBenefits.title;

  return (
    <section
      className={clsx(
        "relative w-screen",
        variant === "original" && "bg-original-800",
        variant === "yerba" && "bg-yerba-800",
        variant === "default" && "bg-gray-800",
        variant === "matcha" && "bg-matcha-800",
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
            {!title ? defaultTitle : title}
          </Heading>
        </Reveal>
        <div className="grid w-full gap-y-8 sm:grid-cols-2 sm:gap-x-10 xl:grid-cols-4">
          <Reveal className="col-span-1 flex items-center justify-start sm:justify-center">
            <div
              className={clsx(
                "flex h-72 w-72 flex-col items-center justify-center rounded-full text-center",
                variant === "original" && "bg-original-700",
                variant === "yerba" && "bg-yerba-700",
                variant === "default" && "bg-gray-900",
                variant === "matcha" && "bg-matcha-700"
              )}
            >
              <CustomIcon iconNumber={1} />
              <Heading
                level={3}
                size="sm"
                className="max-w-[260px]"
                hasMarginBottom
              >
                {t.common.healthBenefits.subtitle1}
              </Heading>
              {/* <p className="max-w-[11rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
            </div>
          </Reveal>

          <Reveal className="col-span-1 flex items-center justify-end sm:justify-center">
            <div
              className={clsx(
                "flex h-72 w-72 flex-col items-center justify-center rounded-full text-center",
                variant === "original" && "bg-original-700",
                variant === "yerba" && "bg-yerba-700",
                variant === "default" && "bg-gray-900",
                variant === "matcha" && "bg-matcha-700"
              )}
            >
              <CustomIcon iconNumber={5} />
              <Heading
                level={3}
                size="sm"
                className="max-w-[260px]"
                hasMarginBottom
              >
                {t.common.healthBenefits.subtitle2}
              </Heading>
              {/* <p className="max-w-[11rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
            </div>
          </Reveal>

          <Reveal className="col-span-1 flex items-center justify-start sm:justify-center">
            <div
              className={clsx(
                "flex h-72 w-72 flex-col items-center justify-center rounded-full text-center",
                variant === "original" && "bg-original-700",
                variant === "yerba" && "bg-yerba-700",
                variant === "default" && "bg-gray-900",
                variant === "matcha" && "bg-matcha-700"
              )}
            >
              <CustomIcon iconNumber={10} />
              <Heading
                level={3}
                size="sm"
                className="max-w-[260px]"
                hasMarginBottom
              >
                {t.common.healthBenefits.subtitle3}
              </Heading>
              {/* <p className="max-w-[11rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
            </div>
          </Reveal>

          <Reveal className="col-span-1 flex items-center justify-end sm:justify-center">
            <div
              className={clsx(
                "flex h-72 w-72 flex-col items-center justify-center rounded-full text-center",
                variant === "original" && "bg-original-700",
                variant === "yerba" && "bg-yerba-700",
                variant === "default" && "bg-gray-900",
                variant === "matcha" && "bg-matcha-700"
              )}
            >
              <CustomIcon iconNumber={2} />
              <Heading
                level={3}
                size="sm"
                className="max-w-[260px]"
                hasMarginBottom
              >
                {t.common.healthBenefits.subtitle4}
              </Heading>
              {/* <p className="max-w-[11rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
