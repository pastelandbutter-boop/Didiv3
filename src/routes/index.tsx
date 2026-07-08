import { createFileRoute } from '@tanstack/react-router'
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
} from '@/data/didiLinks'
import { HomeV3 } from '@/components/HomeV3'

export const Route = createFileRoute('/')({
  // V3 renders on the homepage; the original Home implementation remains below.
  component: HomeV3,
})

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

function Home() {
  const [locale, setLocale] = useState<Locale>('ko')
  const copy = pageCopy[locale]

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <main className="didi-page">
      <div className="page-shell">
        <header className="top-bar">
          <LanguageSwitcher locale={locale} onLocaleChange={setLocale} />
        </header>

        <section className="profile-block" aria-labelledby="profile-title">
          <div className="profile-image-wrap">
            <img
              src="/didi-brand-art.png"
              alt={copy.profileAlt}
              className="profile-image"
            />
          </div>
          <div className="profile-copy">
            <p className="profile-kicker">
              <Sparkles size={16} aria-hidden="true" />
              {copy.eyebrow}
            </p>
            <h1 id="profile-title">{copy.brand}</h1>
            <p className="tagline">{copy.tagline}</p>
            <p className="intro">{copy.intro}</p>
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

        <section className="links-section" aria-labelledby="links-title">
          <div className="section-heading">
            <h2 id="links-title">{copy.linksTitle}</h2>
            <p>{copy.linksIntro}</p>
          </div>

          <div className="link-groups">
            {linkGroups.map((group) => (
              <section
                className="link-group"
                aria-labelledby={`${group.id}-title`}
                key={group.id}
              >
                <h3 id={`${group.id}-title`}>{group.title[locale]}</h3>
                <div className="link-list">
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

        <footer className="site-footer">
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
    <nav className="language-switcher" aria-label="Language">
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
    <section className="status-card" aria-labelledby="lesson-status-title">
      <div className="status-icon" aria-hidden="true">
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
    <section className="update-card" aria-labelledby="updates-title">
      <div className="update-card-copy">
        <span className="mini-icon" aria-hidden="true">
          <Bell size={18} />
        </span>
        <div>
          <h2 id="updates-title">{title}</h2>
          <p>{body}</p>
        </div>
      </div>
      <a
        className="primary-action"
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
      className={`link-card${isComingSoon ? ' is-coming-soon' : ''}`}
      href={link.href}
      onClick={handleClick}
      rel={isComingSoon ? undefined : 'noopener noreferrer'}
      target={isComingSoon ? undefined : '_blank'}
    >
      <span className="link-icon" aria-hidden="true">
        <Icon size={22} />
      </span>
      <span className="link-text">
        <strong>{link.label[locale]}</strong>
        <small>{link.description[locale]}</small>
      </span>
      {isComingSoon ? (
        <span className="link-badge">{copy.comingSoon}</span>
      ) : (
        <ArrowUpRight className="link-arrow" size={18} aria-hidden="true" />
      )}
    </a>
  )
}
