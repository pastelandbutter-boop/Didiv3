import { ArrowUpRight, Play } from 'lucide-react'
import type { FeaturedVideo, Locale } from '@/data/didiLinksV5'

type FeaturedVideoV5Props = {
  video: FeaturedVideo
  locale: Locale
  externalLabel: string
}

export function FeaturedVideoV5({
  video,
  locale,
  externalLabel,
}: FeaturedVideoV5Props) {
  const title = video.title[locale]
  const description = video.description[locale]
  const hasEmbed = video.embedUrl.trim().length > 0

  return (
    <section className="didi-v5-video-card" aria-labelledby="featured-video-title">
      <div className="didi-v5-video-copy">
        <span className="didi-v5-video-icon" aria-hidden="true">
          <Play size={18} fill="currentColor" />
        </span>
        <div>
          <h2 id="featured-video-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      {hasEmbed ? (
        <div className="didi-v5-video-frame">
          <iframe
            src={video.embedUrl}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="didi-v5-video-fallback">
          {/* TODO: Add the final YouTube embed URL in didiLinksV5.ts when confirmed. */}
          <a
            className="didi-v5-video-link"
            href={video.watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} - ${externalLabel}`}
          >
            YouTube
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      )}
    </section>
  )
}
