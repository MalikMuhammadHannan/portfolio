import { Download } from 'lucide-react';
import { profile } from '@/data/profile';
import { experience, education } from '@/data/experience';
import { useClickSound } from '@/hooks/useClickSound';
import './Experience.css';

export function Experience() {
  const playClick = useClickSound();

  return (
    <section id="experience" className="experience-panel w-full">
      <span className="ghost-word" aria-hidden>
        Career
      </span>
      <div className="ghost-ring" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="sr-only">Experience</h2>
        <div className="relative mb-12">
          <a
            href={profile.cvUrl}
            download="Malik Hannan.pdf"
            onClick={playClick}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Download className="size-4" />
            Download CV
          </a>
        </div>

        <ul className="experience-list mb-14 divide-y divide-border">
          {experience.map((exp) => (
            <li key={exp.company} className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-muted-foreground md:w-1/5">{exp.period}</div>
              <div className="md:w-3/5">
                <h3 className="mb-1.5 text-lg font-semibold tracking-tight text-foreground">{exp.title}</h3>
                <ul className="list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2 md:w-1/5 md:justify-end">
                {exp.link && exp.link !== '#' ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:underline"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-foreground">{exp.company}</span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <h3 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">Education</h3>
        <ul className="experience-list mb-14 divide-y divide-border">
          {education.map((edu) => (
            <li
              key={edu.institution}
              className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between"
            >
              <div className="text-sm text-muted-foreground md:w-1/5">{edu.period}</div>
              <div className="md:w-3/5">
                <h3 className="mb-1.5 text-lg font-semibold tracking-tight text-foreground">{edu.degree}</h3>
              </div>
              <div className="flex items-center gap-2 md:w-1/5 md:justify-end">
                <span className="text-sm font-medium text-foreground">{edu.institution}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
