import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "en" | "ar";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const Ctx = createContext<LangCtx>({ lang: "ar", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
