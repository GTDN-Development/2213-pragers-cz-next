import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import UiLink from "@/components/UiLink";
import { contact } from "@/configs/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";

export default function Contact() {
  const t = useTranslation();
  return (
    <Layout>
      <Seo
        title={t.contact.seo.title}
        description={t.contact.seo.description}
      />
      <section>
        <Container py="xl">
          <Heading level={1} size="2xl" color="primary" hasMarginBottom>
            {t.contact.title}
          </Heading>
          <Container
            isInner
            py="md"
            className="grid w-full gap-y-8 sm:grid-cols-2 sm:gap-x-10 xl:grid-cols-4"
          >
            <Reveal className="col-span-1 flex items-center justify-start sm:justify-center">
              <div
                className={clsx(
                  "flex h-72 w-72 flex-col items-center justify-center rounded-full bg-gray-900 text-center"
                )}
              >
                <Heading
                  level={3}
                  size="xs"
                  className="max-w-[260px]"
                  hasMarginBottom
                >
                  {t.contact.item1.title}
                </Heading>
                <ul className="flex max-w-[11rem] flex-col gap-2">
                  {contact.map((item) => (
                    <li key={item.label}>
                      <UiLink
                        href={item.href}
                        hoverEffect="scale-down"
                        className="text-primary"
                      >
                        {item.label}
                      </UiLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal className="col-span-1 flex items-center justify-end sm:justify-center">
              <div
                className={clsx(
                  "flex h-72 w-72 flex-col items-center justify-center rounded-full bg-gray-900 text-center"
                )}
              >
                <Heading
                  level={3}
                  size="xs"
                  className="max-w-[260px]"
                  hasMarginBottom
                >
                  {t.contact.item2.title}
                </Heading>
                <div className="max-w-[11rem]">{t.contact.item2.content}</div>
              </div>
            </Reveal>

            <Reveal className="col-span-1 flex items-center justify-start sm:justify-center">
              <div
                className={clsx(
                  "flex h-72 w-72 flex-col items-center justify-center rounded-full bg-gray-900 text-center"
                )}
              >
                <Heading
                  level={3}
                  size="xs"
                  className="max-w-[260px]"
                  hasMarginBottom
                >
                  {t.contact.item3.title}
                </Heading>
                <div className="max-w-[11rem]">
                  <p>{t.contact.item3.content}</p>
                </div>
              </div>
            </Reveal>
          </Container>
        </Container>
      </section>
    </Layout>
  );
}
