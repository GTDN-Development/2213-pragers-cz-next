import Layout from "@/components/Layout";
import Hero from "@/components/pages/home/Hero";
import Seo from "@/components/Seo";

// import { useTranslation } from "@/hooks/useTranslation";

export default function Contact() {
  // const t = useTranslation();
  return (
    <Layout>
      <Seo title="Hlavní stránka" description="Lorem ipsum dolor" />
      <Hero />
      <div className="text-8xl">Kontakt</div>
    </Layout>
  );
}
