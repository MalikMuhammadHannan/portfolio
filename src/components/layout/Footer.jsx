import { useClickSound } from '@/hooks/useClickSound';
import './Footer.css';

const FOLLOW_LINKS = [
  { label: 'malikhannan.dev@gmail.com', href: 'mailto:malikhannan.dev@gmail.com' },
  { label: '+92 333-136-8190', href: 'tel:+923331368190' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/malik-hannan-b12b8a244/' },
];

export function Footer() {
  const playClick = useClickSound();

  return (
    <footer id="connect-footer" className="footer-panel">
      <p className="footer-tagline">Let's get physical or keep it digital</p>
      <a
        href="mailto:hannanmalik228@gmail.com"
        onClick={playClick}
        className="footer-headline"
      >
        Get in touch
      </a>

      <div className="footer-follow">
        {FOLLOW_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('#') ? undefined : '_blank'}
            rel="noopener noreferrer"
            onClick={playClick}
            className="footer-follow-link"
          >
            {social.label}
          </a>
        ))}
      </div>

      <p className="footer-credit">{new Date().getFullYear()} Malik Hannan</p>
    </footer>
  );
}
