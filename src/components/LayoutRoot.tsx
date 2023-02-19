import Favicon from "@/components/Favicon";
import NextHead from "next/head";

type LayoutRootProps = {
  children: React.ReactNode;
};

export default function LayoutRoot({ children }: LayoutRootProps) {
  return (
    <>
      <Favicon />
      <NextHead>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=2.0"
        />
      </NextHead>
      {children}
    </>
  );
}
