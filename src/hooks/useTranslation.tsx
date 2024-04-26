import { cs } from "@/locales/cs/common";
import { en } from "@/locales/en/common";
import { pl } from "@/locales/pl/common";
import { useRouter } from "next/router";

// How to use:
// import { useTranslation } from "@/hooks/useTranslation";
// ...
// const t = useTranslation();
// ...
// <p>
//   {t.key.string}
// </p>

export const useTranslation = () => {
  const { locale } = useRouter();
  const t = locale === "cs" ? cs : locale === "en" ? en : pl;
  return t;
};
