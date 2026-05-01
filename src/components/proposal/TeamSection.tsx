import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Linkedin, Mail, Phone } from "lucide-react";
import { teamSection, teamMembers, te, type TeamMember } from "@/content/proposal";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "./LangContext";
import { PILLAR_COLORS } from "@/lib/constants";

const STORAGE_KEY = "team-member-images";

export function TeamSection() {
  const { lang } = useLang();
  const data = teamSection[lang];
  const members = teamMembers[lang];
  const [images, setImages] = useState<Record<number, string>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setImages(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  function handleImageChange(index: number, dataUrl: string | null) {
    setImages((prev) => {
      const next = { ...prev };
      if (dataUrl === null) delete next[index];
      else next[index] = dataUrl;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }

  return (
    <section>
      <SectionHeading eyebrow={te("teamEyebrow", lang)} headline={te("teamHeadline", lang)} />

      <div className="relative mt-10 overflow-hidden rounded-[32px] border border-[var(--color-gold)]/30 bg-[linear-gradient(135deg,#06140D,#006C35_55%,#913191)] p-8 text-center text-white shadow-[0_30px_80px_rgba(3,42,24,.22)] sm:p-12">
        <div className="hero-pattern absolute inset-0 opacity-70" />
        <div className="relative">
          <span className="mx-auto mb-5 block h-[3px] w-24 rounded-full bg-[linear-gradient(90deg,var(--color-gold),#fff,var(--color-gold))]" />
          <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">{data.headline}</h3>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82">{data.body}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, i) => (
          <MemberCard
            key={i}
            member={member}
            accentColor={PILLAR_COLORS[i % PILLAR_COLORS.length]}
            image={member.image || images[i]}
            onImageChange={(dataUrl) => handleImageChange(i, dataUrl)}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
}

function MemberCard({
  member,
  accentColor,
  image,
  onImageChange,
  lang,
}: {
  member: TeamMember;
  accentColor: string;
  image?: string;
  onImageChange: (dataUrl: string | null) => void;
  lang: "en" | "ar";
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") onImageChange(reader.result);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  }

  const uploadLabel = lang === "ar" ? "إضافة صورة" : "Add photo";
  const removeLabel = lang === "ar" ? "إزالة" : "Remove";

  return (
    <div className="gov-card flex h-full flex-col gap-4 p-6 transition-transform duration-300 hover:-translate-y-1" style={{ borderTopColor: accentColor, borderTopWidth: "4px" }}>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="relative h-32 w-32 overflow-hidden rounded-[26px] border-2 border-dashed border-[var(--color-gold)]/35 bg-[var(--color-paper)] shadow-[0_14px_34px_rgba(6,30,16,.10)] transition-colors hover:border-[var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
          style={image ? { borderStyle: "solid", borderColor: accentColor } : undefined}
          aria-label={uploadLabel}
        >
          {image ? <img src={image} alt={member.name || member.role} className="h-full w-full object-cover" /> : <span className="flex h-full w-full items-center justify-center text-3xl text-[var(--color-ink-soft)]/40">+</span>}
        </button>
        <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
      </div>

      {image && (
        <button type="button" onClick={() => onImageChange(null)} className="self-center rounded-full bg-[var(--color-gold)]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--color-ink-soft)] hover:text-[var(--color-navy)]">
          {removeLabel}
        </button>
      )}

      <div className="text-center">
        <p className="eyebrow justify-center" style={{ color: accentColor }}>{member.role}</p>
        <p className="mt-2 font-serif text-xl font-bold leading-snug text-[var(--color-navy-deep)]">
          {member.name || (lang === "ar" ? "الاسم الكامل" : "Full Name")}
        </p>
      </div>
      {member.bio && <p className="text-center text-sm leading-7 text-[var(--color-ink-soft)]">{member.bio}</p>}

      {(member.email || member.phone || member.linkedin) && (
        <>
          <span aria-hidden className="mx-auto mt-1 block h-px w-16" style={{ background: accentColor, opacity: 0.45 }} />
          <div className="mt-auto flex flex-col gap-2 pt-2 text-xs text-[var(--color-ink-soft)]">
            {member.email && (
              <a href={`mailto:${member.email}`} className="flex items-center gap-2 rounded-xl border border-[var(--color-gold)]/20 bg-white/55 px-3 py-2 hover:bg-[var(--color-gold)]/10 hover:text-[var(--color-navy)]">
                <Mail size={14} style={{ color: accentColor }} />
                <span dir="ltr" className="truncate">{member.email}</span>
              </a>
            )}
            {member.phone && (
              <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 rounded-xl border border-[var(--color-gold)]/20 bg-white/55 px-3 py-2 hover:bg-[var(--color-gold)]/10 hover:text-[var(--color-navy)]">
                <Phone size={14} style={{ color: accentColor }} />
                <span dir="ltr">{member.phone}</span>
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-[var(--color-gold)]/20 bg-white/55 px-3 py-2 hover:bg-[var(--color-gold)]/10 hover:text-[var(--color-navy)]">
                <Linkedin size={14} style={{ color: accentColor }} />
                <span dir="ltr" className="truncate">{member.linkedin}</span>
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
}
