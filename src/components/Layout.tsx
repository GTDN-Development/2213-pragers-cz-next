import Header from "@/components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main id="content">{children}</main>
    </>
  );
}
