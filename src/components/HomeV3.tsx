import type { ComponentType, MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  Coffee,
  FileText,
  Gift,
  Headphones,
  Heart,
  Instagram,
  MessageCircle,
  Sparkles,
  Youtube,
} from 'lucide-react'
import {
  languages,
  linkGroups,
  pageCopy,
  updateFormUrl,
  type DidiLink,
  type IconName,
  type Locale,
} from '@/data/didiLinksV3'
import '@/styles/landing-v3.css'

type BrandIconProps = {
  size?: number
  strokeWidth?: number
  className?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}

function SpotifyIcon({ size = 20, ...props }: BrandIconProps) {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 1.8C6.36 1.8 1.8 6.36 1.8 12S6.36 22.2 12 22.2 22.2 17.64 22.2 12 17.64 1.8 12 1.8Zm4.68 14.7a.73.73 0 0 1-1 .24c-2.76-1.68-6.23-2.06-10.32-1.13a.73.73 0 1 1-.33-1.42c4.47-1.02 8.32-.58 11.41 1.31.35.21.46.66.24 1Zm1.34-2.98a.91.91 0 0 1-1.25.3c-3.16-1.94-7.98-2.5-11.72-1.37a.91.91 0 1 1-.53-1.74c4.27-1.29 9.58-.67 13.2 1.55.43.27.56.83.3 1.26Zm.12-3.1C14.35 8.17 8.09 7.96 4.47 9.06a1.09 1.09 0 0 1-.63-2.09c4.16-1.26 11.06-1.01 15.41 1.57a1.09 1.09 0 1 1-1.11 1.88Z" />
    </svg>
  )
}

function ApplePodcastsIcon({ size = 20, ...props }: BrandIconProps) {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.1a6.9 6.9 0 0 0-3.22 13 .92.92 0 1 0 .86-1.62 5.06 5.06 0 1 1 4.72 0 .92.92 0 0 0 .86 1.62A6.9 6.9 0 0 0 12 2.1Z" />
      <path d="M12 6.1a2.9 2.9 0 0 0-1.18 5.55l-.64 5.83a1.83 1.83 0 0 0 3.64 0l-.64-5.83A2.9 2.9 0 0 0 12 6.1Z" />
      <path d="M7.45 16.08a.93.93 0 0 0-1.31.02.91.91 0 0 0 .02 1.3 8.44 8.44 0 0 0 11.68 0 .91.91 0 0 0 .02-1.3.93.93 0 0 0-1.31-.02 6.57 6.57 0 0 1-9.1 0Z" />
    </svg>
  )
}

function PaintedCassetteV3({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 214 122"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 25.5C26 15.8 178.8 13.5 193.1 23.3C202.7 29.8 204.3 89.3 194.6 97.1C184.4 105.3 32.6 105.8 20.1 96.5C10 89 9.7 35.5 18 25.5Z"
        className="didi-v3-cassette-shell"
      />
      <path
        d="M44.4 32.2C63.5 28.2 149.2 28.8 169.7 32.1C176 33.2 178.8 45.2 174.3 50C167.7 57.2 51.8 57.1 40.9 50.5C36.1 47.7 37.9 33.5 44.4 32.2Z"
        className="didi-v3-cassette-label"
      />
      <path
        d="M49 68.2C59.7 62 155.7 61.6 165.5 67.7C170.4 70.7 167.8 83.1 160.9 84.7C145 88.4 70.1 88.2 54 85C47.9 83.8 44.4 70.9 49 68.2Z"
        className="didi-v3-cassette-window"
      />
      <path
        d="M24.4 30.9C22.1 39.3 21.2 82.4 24.5 91.1"
        className="didi-v3-cassette-sketch"
      />
      <path
        d="M190.2 30.2C193.5 42.1 193.2 79.5 189.3 91.4"
        className="didi-v3-cassette-sketch"
      />
      <circle cx="69" cy="65.5" r="13.2" className="didi-v3-cassette-reel" />
      <circle cx="145.4" cy="65.8" r="13.2" className="didi-v3-cassette-reel" />
      <path
        d="M82.7 66.8C101.9 72.1 119.4 72 132.4 66.2"
        className="didi-v3-cassette-tape"
      />
      <path
        d="M59.5 66.7C64.9 62.7 70.1 62.2 77.3 65.4M136.5 65.6C143.5 61.7 150.7 62 155.7 66.8"
        className="didi-v3-cassette-sketch"
      />
      <path
        d="M33.2 96.8C45.7 101.5 178.7 101.1 187.5 96.2"
        className="didi-v3-cassette-sketch didi-v3-cassette-bottom"
      />
    </svg>
  )
}

const iconMap: Record<IconName, ComponentType<BrandIconProps>> = {
  apple: ApplePodcastsIcon,
  bell: Bell,
  book: BookOpen,
  coffee: Coffee,
  discord: MessageCircle,
  file: FileText,
  gift: Gift,
  headphones: Headphones,
  heart: Heart,
  instagram: Instagram,
  sparkles: Sparkles,
  spotify: SpotifyIcon,
  youtube: Youtube,
}

export function HomeV3() {
  const [locale, setLocale] = useState<Locale>('ko')
  const copy = pageCopy[locale]

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <main className="didi-v3-page">
      <div className="didi-v3-shell">
        <header className="didi-v3-top-bar">
          <LanguageSwitcher locale={locale} onLocaleChange={setLocale} />
        </header>

        <section className="didi-v3-profile-block" aria-labelledby="profile-title">
          <PaintedCassetteV3 className="didi-v3-profile-cassette" />
          <div className="didi-v3-profile-image-wrap">
            <img
              src="/didi-brand-art.png"
              alt={copy.profileAlt}
              className="didi-v3-profile-image"
            />
          </div>
          <div className="didi-v3-profile-copy">
            <p className="didi-v3-profile-kicker">
              <Sparkles size={16} aria-hidden="true" />
              {copy.eyebrow}
            </p>
            <h1 id="profile-title">{copy.brand}</h1>
            <p className="didi-v3-tagline">{copy.tagline}</p>
            <p className="didi-v3-intro">{copy.intro}</p>
          </div>
        </section>

        <StatusCard
          title={copy.statusTitle}
          body={copy.statusBody}
        />

        <CTAUpdateCard
          title={copy.ctaTitle}
          body={copy.ctaBody}
          buttonLabel={copy.ctaButton}
          externalLabel={copy.opensExternal}
        />

        <section className="didi-v3-links-section" aria-labelledby="links-title">
          <div className="didi-v3-section-heading">
            <h2 id="links-title">{copy.linksTitle}</h2>
            <p>{copy.linksIntro}</p>
          </div>

          <div className="didi-v3-link-groups">
            {linkGroups.map((group) => (
              <section
                className="didi-v3-link-group"
                aria-labelledby={`${group.id}-title`}
                key={group.id}
              >
                <h3 id={`${group.id}-title`}>{group.title[locale]}</h3>
                <div className="didi-v3-link-list">
                  {group.links.map((link) => (
                    <LinkCard
                      copy={copy}
                      key={link.id}
                      link={link}
                      locale={locale}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <footer className="didi-v3-site-footer">
          <p>{copy.footer}</p>
          <small>© {new Date().getFullYear()} {copy.copyright}</small>
        </footer>
      </div>
    </main>
  )
}

function LanguageSwitcher({
  locale,
  onLocaleChange,
}: {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}) {
  return (
    <nav className="didi-v3-language-switcher" aria-label="Language">
      {languages.map((language) => (
        <button
          aria-label={language.ariaLabel}
          aria-pressed={locale === language.id}
          className={locale === language.id ? 'is-active' : undefined}
          key={language.id}
          onClick={() => onLocaleChange(language.id)}
          type="button"
        >
          {language.label}
        </button>
      ))}
    </nav>
  )
}

function StatusCard({ title, body }: { title: string; body: string }) {
  return (
    <section className="didi-v3-status-card" aria-labelledby="lesson-status-title">
      <div className="didi-v3-status-icon" aria-hidden="true">
        <Sparkles size={20} />
      </div>
      <div>
        <h2 id="lesson-status-title">{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  )
}

function CTAUpdateCard({
  title,
  body,
  buttonLabel,
  externalLabel,
}: {
  title: string
  body: string
  buttonLabel: string
  externalLabel: string
}) {
  return (
    <section className="didi-v3-update-card" aria-labelledby="updates-title">
      <div className="didi-v3-update-card-copy">
        <span className="didi-v3-mini-icon" aria-hidden="true">
          <Bell size={18} />
        </span>
        <div>
          <h2 id="updates-title">{title}</h2>
          <p>{body}</p>
        </div>
      </div>
      <a
        className="didi-v3-primary-action"
        href={updateFormUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${buttonLabel} - ${externalLabel}`}
      >
        {buttonLabel}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </section>
  )
}

function LinkCard({
  copy,
  link,
  locale,
}: {
  copy: (typeof pageCopy)[Locale]
  link: DidiLink
  locale: Locale
}) {
  const Icon = iconMap[link.icon]
  const isComingSoon = link.status === 'coming-soon'

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isComingSoon) {
      event.preventDefault()
    }
  }

  return (
    <a
      aria-disabled={isComingSoon}
      aria-label={
        isComingSoon
          ? `${link.label[locale]} - ${copy.comingSoon}`
          : `${link.label[locale]} - ${copy.opensExternal}`
      }
      className={`didi-v3-link-card${isComingSoon ? ' is-coming-soon' : ''}`}
      href={link.href}
      onClick={handleClick}
      rel={isComingSoon ? undefined : 'noopener noreferrer'}
      target={isComingSoon ? undefined : '_blank'}
    >
      <span className="didi-v3-link-icon" aria-hidden="true">
        <Icon size={22} />
      </span>
      <span className="didi-v3-link-text">
        <strong>{link.label[locale]}</strong>
        <small>{link.description[locale]}</small>
      </span>
      {isComingSoon ? (
        <span className="didi-v3-link-badge">{copy.comingSoon}</span>
      ) : (
        <ArrowUpRight className="didi-v3-link-arrow" size={18} aria-hidden="true" />
      )}
    </a>
  )
}
