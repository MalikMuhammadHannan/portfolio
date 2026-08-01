import { skills } from '@/data/skills';
import './About.css';

export function About() {
  return (
    <section id="about" className="about-panel w-full border-t border-border bg-muted/30">
      <span className="ghost-word" aria-hidden>
        About
      </span>
      <div className="ghost-ring" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="about-copy">
          <p className="mb-6 text-lg leading-relaxed font-medium text-foreground">
            Full Stack Software Engineer with 2.5+ years of experience building scalable web
            applications using React.js, Next.js, TypeScript, Node.js, Django, and FastAPI.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            I've worked across POS systems, AI-powered applications, and CMS platforms, spanning
            frontend, backend, and database layers. I'm skilled in API development, system
            integration, and performance optimization, with hands-on experience across
            PostgreSQL, MongoDB, Supabase, OpenAI, Pinecone, Plaid, and Sentry.
          </p>
        </div>

        <div className="about-skills mt-14 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.label}>
              <h3 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
                {group.label}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{group.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
