import { createFileRoute } from "@tanstack/react-router";
import { LangProvider, useLang } from "@/components/proposal/LangContext";
import { TopNav } from "@/components/proposal/TopNav";
import { Hero } from "@/components/proposal/Hero";
import { Tabs } from "@/components/proposal/Tabs";
import { Footer } from "@/components/proposal/Footer";
import { ReadingProgress } from "@/components/proposal/ReadingProgress";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saudi Football Model: A Proposal to SAFF" },
      {
        name: "description",
        content:
          "A national plan to build the football development system Saudi Arabia deserves. Submitted to the Secretary General of SAFF, April 2026.",
      },
      {
        property: "og:title",
        content: "Saudi Football Model: A Proposal to SAFF",
      },
      {
        property: "og:description",
        content:
          "Six pillars. One integrated system. The plan to build the football infrastructure that produces results in 2034 and beyond.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LangProvider>
      <Shell />
      <Toaster position="bottom-right" />
    </LangProvider>
  );
}

function Shell() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      lang={isAr ? "ar" : "en"}
      className={`min-h-screen bg-white ${isAr ? "font-arabic" : ""}`}
    >
      <ReadingProgress />
      <TopNav />
      <main>
        <Hero />
        <Tabs />
      </main>
      <Footer />
    </div>
  );
}
