import LayoutRoot from "@/components/LayoutRoot";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

import "@/styles/globals.css";
import "@fontsource/be-vietnam-pro/400.css";
import "@fontsource/be-vietnam-pro/500.css";
import "@fontsource/be-vietnam-pro/600.css";
import "@fontsource/be-vietnam-pro/700.css";
import "@fontsource/be-vietnam-pro/800.css";

export default function App({ Component, pageProps }: AppProps) {
  // Disable smooth scroll on route change: https://github.com/vercel/next.js/issues/20125#issuecomment-757547865
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      document.documentElement.classList.add("!scroll-auto");
    });
    router.events.on("routeChangeComplete", () => {
      document.documentElement.classList.remove("!scroll-auto");
    });
  });

  // Fixing the horizontal scroll on the homepage
  const isHomePage = router.pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      document.documentElement.classList.add(
        "max-w-[100vw]",
        "md:max-w-none",
        "overflow-x-hidden"
      );
    } else {
      document.documentElement.classList.remove(
        "max-w-[100vw]",
        "md:max-w-none",
        "overflow-x-hidden"
      );
    }
  }, [isHomePage]);

  return (
    <LayoutRoot>
      <Component {...pageProps} />
    </LayoutRoot>
  );
}
