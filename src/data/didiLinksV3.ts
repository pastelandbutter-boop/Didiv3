export type Locale = 'ko' | 'en' | 'ja'

export type IconName =
  | 'apple'
  | 'bell'
  | 'book'
  | 'coffee'
  | 'discord'
  | 'file'
  | 'gift'
  | 'headphones'
  | 'heart'
  | 'instagram'
  | 'sparkles'
  | 'spotify'
  | 'youtube'

export type LocalizedText = Record<Locale, string>

export type DidiLink = {
  id: string
  label: LocalizedText
  description: LocalizedText
  href: string
  icon: IconName
  status?: 'coming-soon'
}

export type DidiLinkGroup = {
  id: string
  title: LocalizedText
  links: DidiLink[]
}

export const languages: Array<{ id: Locale; label: string; ariaLabel: string }> = [
  { id: 'ko', label: '한국어', ariaLabel: '한국어로 보기' },
  { id: 'en', label: 'English', ariaLabel: 'View in English' },
  { id: 'ja', label: '日本語', ariaLabel: '日本語で見る' },
]

export const pageCopy = {
  ko: {
    brand: 'Didi의 한국문화 Podcast',
    eyebrow: '매일 조금씩 한국어',
    profileAlt: 'Didi Korean Podcast 브랜드 일러스트',
    tagline: '한국어를 공부처럼 말고, 매일 조금씩 자연스럽게.',
    intro: '영상, 팟캐스트, 일상 이야기로 한국어와 한국 문화를 편하게 만나보세요.',
    statusTitle: '현재 1:1 수업은 새 학생을 받지 않아요.',
    statusBody: '새 자리가 생기면 여기와 뉴스레터에서 알려드릴게요.',
    ctaTitle: '수업 / 소식 알림 받기',
    ctaBody: '새 수업 자리, PDF 자료, 새 콘텐츠 소식을 받고 싶다면 여기에 남겨 주세요.',
    ctaButton: '알림 신청하기',
    linksTitle: '링크 모음',
    linksIntro: '보고, 듣고, 함께 공부할 수 있는 공간을 한 번에 정리했어요.',
    comingSoon: '준비 중',
    opensExternal: '새 탭에서 열기',
    footer: '새 소식은 이 페이지에 업데이트됩니다.',
    copyright: 'Didi Korean Podcast',
  },
  en: {
    brand: 'Didi Korean Culture Podcast',
    eyebrow: 'Daily Korean links',
    profileAlt: 'Didi Korean Podcast brand illustration',
    tagline: 'Learn Korean naturally, little by little every day.',
    intro: 'Meet Korean language and culture through videos, podcasts, and daily stories.',
    statusTitle: 'I’m not accepting new 1:1 students right now.',
    statusBody: 'If new spots open, I’ll announce them here and through updates.',
    ctaTitle: 'Korean Lessons & Updates',
    ctaBody: 'Leave your info here for class openings, PDF materials, and new content updates.',
    ctaButton: 'Join updates',
    linksTitle: 'Links',
    linksIntro: 'Watch, listen, follow, and find future extras in one simple place.',
    comingSoon: 'Coming soon',
    opensExternal: 'Opens in a new tab',
    footer: 'New updates will be added to this page.',
    copyright: 'Didi Korean Podcast',
  },
  ja: {
    brand: 'Didiの韓国文化 Podcast',
    eyebrow: '毎日少しずつ韓国語',
    profileAlt: 'Didi Korean Podcast ブランドイラスト',
    tagline: '韓国語を勉強っぽくなく、毎日少しずつ自然に。',
    intro: '動画、ポッドキャスト、日常の話で韓国語と韓国文化に気軽に触れてみてください。',
    statusTitle: '現在、1:1レッスンの新しい生徒は募集していません。',
    statusBody: '新しい空きが出たら、ここやお知らせで共有します。',
    ctaTitle: 'レッスン / お知らせを受け取る',
    ctaBody: '新しいレッスン枠、PDF資料、新しいコンテンツのお知らせを受け取りたい方はこちらへ。',
    ctaButton: 'お知らせに登録する',
    linksTitle: 'リンク',
    linksIntro: '見る、聞く、フォローする場所をわかりやすくまとめました。',
    comingSoon: '準備中',
    opensExternal: '新しいタブで開く',
    footer: '新しいお知らせはこのページに追加されます。',
    copyright: 'Didi Korean Podcast',
  },
} satisfies Record<Locale, Record<string, string>>

export const updateFormUrl = 'https://forms.gle/LmExEusVvP8Qmgbe9'

export const linkGroups: DidiLinkGroup[] = [
  {
    id: 'watch',
    title: {
      ko: '보기',
      en: 'Watch',
      ja: '見る',
    },
    links: [
      {
        id: 'youtube-podcast',
        label: {
          ko: 'YouTube Podcast',
          en: 'YouTube Podcast',
          ja: 'YouTube Podcast',
        },
        description: {
          ko: '한국 문화와 자연스러운 한국어',
          en: 'Korean culture and natural Korean',
          ja: '韓国文化と自然な韓国語',
        },
        href: 'https://www.youtube.com/@DidiKoreanPodcast',
        icon: 'youtube',
      },
      {
        id: 'youtube-vlog',
        label: {
          ko: 'YouTube Vlog',
          en: 'YouTube Vlog',
          ja: 'YouTube Vlog',
        },
        description: {
          ko: '일상, 여행, 카페, 한국 생활',
          en: 'Daily life, travel, cafes, and life in Korea',
          ja: '日常、旅行、カフェ、韓国生活',
        },
        href: 'https://www.youtube.com/@lvlsdd',
        icon: 'coffee',
      },
    ],
  },
  {
    id: 'listen',
    title: {
      ko: '듣기',
      en: 'Listen',
      ja: '聞く',
    },
    links: [
      {
        id: 'spotify',
        label: {
          ko: 'Spotify Podcast',
          en: 'Spotify Podcast',
          ja: 'Spotify Podcast',
        },
        description: {
          ko: '걸으면서 듣는 한국어',
          en: 'Korean you can listen to while walking',
          ja: '歩きながら聞ける韓国語',
        },
        href: 'https://open.spotify.com/show/031bkrESQ56OdNq0Yk1lKs',
        icon: 'spotify',
      },
      {
        id: 'apple-podcasts',
        label: {
          ko: 'Apple Podcast',
          en: 'Apple Podcast',
          ja: 'Apple Podcast',
        },
        description: {
          ko: 'Apple Podcasts에서 듣기',
          en: 'Listen on Apple Podcasts',
          ja: 'Apple Podcastsで聞く',
        },
        href: 'https://podcasts.apple.com/us/podcast/didi%EC%9D%98-%ED%95%9C%EA%B5%AD%EB%AC%B8%ED%99%94-podcast-korean-podcast/id1692014664',
        icon: 'apple',
      },
    ],
  },
  {
    id: 'community',
    title: {
      ko: '커뮤니티',
      en: 'Community',
      ja: 'コミュニティ',
    },
    links: [
      {
        id: 'instagram',
        label: {
          ko: 'Instagram',
          en: 'Instagram',
          ja: 'Instagram',
        },
        description: {
          ko: '짧은 영상과 소식',
          en: 'Short videos and updates',
          ja: '短い動画とお知らせ',
        },
        href: 'https://www.instagram.com/didikoreanpodcast',
        icon: 'instagram',
      },
      {
        id: 'discord',
        label: {
          ko: 'Discord',
          en: 'Discord',
          ja: 'Discord',
        },
        description: {
          ko: '함께 공부하는 공간',
          en: 'A space to study together',
          ja: '一緒に勉強する場所',
        },
        // TODO: Replace with the official Discord invite when it is ready.
        href: '#coming-soon',
        icon: 'discord',
        status: 'coming-soon',
      },
    ],
  },
  {
    id: 'support',
    title: {
      ko: '후원 / 자료',
      en: 'Support & Extras',
      ja: '応援 / 資料',
    },
    links: [
      {
        id: 'membership',
        label: {
          ko: 'Membership / Support',
          en: 'Membership / Support',
          ja: 'Membership / Support',
        },
        description: {
          ko: '콘텐츠를 응원하기',
          en: 'Support the content',
          ja: 'コンテンツを応援する',
        },
        // TODO: Replace with the official support or membership URL.
        href: '#coming-soon',
        icon: 'heart',
        status: 'coming-soon',
      },
      {
        id: 'pdf-materials',
        label: {
          ko: 'PDF Materials',
          en: 'PDF Materials',
          ja: 'PDF Materials',
        },
        description: {
          ko: '자료 준비 중',
          en: 'Materials in progress',
          ja: '資料を準備中',
        },
        // TODO: Replace with the PDF materials URL when downloads are ready.
        href: '#coming-soon',
        icon: 'file',
        status: 'coming-soon',
      },
      {
        id: 'merch',
        label: {
          ko: 'Merch',
          en: 'Merch',
          ja: 'Merch',
        },
        description: {
          ko: '굿즈 준비 중',
          en: 'Merch in progress',
          ja: 'グッズを準備中',
        },
        // TODO: Replace with the official merch URL when the shop is ready.
        href: '#coming-soon',
        icon: 'gift',
        status: 'coming-soon',
      },
    ],
  },
]
