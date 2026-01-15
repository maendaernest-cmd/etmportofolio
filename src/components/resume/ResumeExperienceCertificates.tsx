import React from "react";

type Entry = {
  title: string;
  subtitle?: string;
  href?: string;
};

export type ResumeExperienceCertificatesProps = {
  title?: string;
  entries?: Entry[];
  enableMotion?: boolean;
  className?: string;
};

const defaultEntries: Entry[] = [
  { title: "Junior Instructor | uncommon.org (Harare)" },
  { title: "Software Engineering Intern | Sehi Group" },
  { title: "Software Engineering Technology Bootcamp | uncommon.org (Harare)" },
];

export default function ResumeExperienceCertificates({
  title = "Experience & Certificates",
  entries = defaultEntries,
  enableMotion = false,
  className = "",
}: ResumeExperienceCertificatesProps) {
  const Section: any = enableMotion ? require("framer-motion").motion.section : "section";
  const Item: any = enableMotion ? require("framer-motion").motion.li : "li";

  return (
    <Section
      className={[
        "relative z-10 py-8",
        "bg-background",
        className,
      ].join(" ")}
      {...(enableMotion
        ? {
            initial: { opacity: 0, y: 8 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-10% 0px -10% 0px" },
            transition: { duration: 0.4, ease: "easeOut" },
          }
        : {})}
    >
      <div className="mx-auto w-full max-w-3xl px-4">
        <h2 className="mb-4 text-2xl font-bold text-foreground">{title}</h2>
        <ul className="space-y-3">
          {entries?.map((e, i) => {
            const content = (
              <>
                <h3 className="text-lg font-semibold text-foreground">{e.title}</h3>
                {e.subtitle ? (
                  <p className="text-sm text-muted-foreground">{e.subtitle}</p>
                ) : null}
              </>
            );
            return (
              <Item
                key={i}
                className="p-3 border rounded-lg border-border bg-card"
                {...(enableMotion
                  ? {
                      initial: { opacity: 0, y: 6 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { delay: i * 0.05, duration: 0.35 },
                    }
                  : {})}
              >
                {e.href ? (
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus:ring-2 focus:ring-ring rounded"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Item>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
