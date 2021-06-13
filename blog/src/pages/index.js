// import Image from 'next/image'
import { useRouter } from 'next/router'

import homeLocale from '@/locales/home'

import BlogPost from '@/components/BlogPost'

const RecentBlogPost = ({ locale }) => {
  if (locale === 'id') {
    return (
      <>
        <BlogPost
          slug="fe-engineering-lead"
          date="13-05-2021"
          title="Menjadi Seorang Frontend Engineering Lead Di Awal Usia 20-an"
          summary="Cerita pengalaman saya menjadi seorang frontend engineering lead di awal usia 20-an."
        />
        <BlogPost
          slug="spotify-with-nextjs"
          date="27-01-2021"
          title="Menggunakan Spotify API di Next.js"
          summary='Belajar bagaimana cara menggunakan Spotify API untuk widget "now playing" seperti yang ada di footer blog ini.'
        />
        <BlogPost
          slug="switch-to-tailwind"
          date="22-01-2021"
          title="Beralih ke Tailwind CSS"
          summary="Mengapa saya akhirnya beralih ke Tailwind CSS? Apa pengaruhnya ke performa blog ini?"
        />
      </>
    )
  } else {
    return (
      <BlogPost
        slug="en-hello-world"
        date="21-01-2021"
        title="Hello World!"
        summary="This is my first english post!"
      />
    )
  }
}

export default function IndexPage() {
  const router = useRouter()
  const { locale } = router

  return (
    <div className="flex flex-col pt-28">
      <h1 className="mb-6 text-3xl tracking-wide font-black md:text-4xl dark:text-white">
        {homeLocale.greetings[locale]}{' '}
        <span role="img" aria-label="melambaikan tangan">
          👋🏻
        </span>
      </h1>
      <p className="text-gray-700 dark:text-gray-100 leading-relaxed sm:text-xl">
        {homeLocale.description_start[locale]}{' '}
        <a
          href="https://traveloka.com"
          target="_blank"
          rel="noreferrer"
          className="bouncy-anchor"
        >
          Traveloka
        </a>
        , {homeLocale.description_end[locale]}{' '}
        <a
          href="https://freedomlife.id"
          target="_blank"
          rel="noreferrer"
          className="bouncy-anchor"
        >
          FreedomLife
        </a>
        .
      </p>

      <p className="sm:text-xl mt-6">
        <a href="/about" className="bouncy-anchor">
          Tentang Saya →
        </a>
      </p>

      {/* <h2 className="mt-12 font-bold text-2xl dark:text-white">Projects</h2>
      <a
        href="https://freedomlife.id"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="border mt-4 rounded-t-xl border-gray-200 cursor-pointer transition transform hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900">
          <div className="p-4">
            <h1 className="font-medium text-lg dark:text-white sm:text-xl">
              FreedomLife
            </h1>
            <p className="text-sm text-gray-800 dark:text-gray-300 sm:text-base">
              {locale === 'id'
                ? 'Panduan Baca Alkitab Setahun'
                : 'A 1-Year Bible Reading Guide'}
            </p>
          </div>
        </div>
        <div className="rounded-b-xl cursor-pointer border border-t-0 bg-white dark:bg-black dark:border-gray-700">
          <div className="flex items-center justify-center py-16 sm:py-6">
            <Image
              src="/images/projects/freedomlife.png"
              width={45}
              height={45}
              alt="FreedomLife Logo"
              className="rounded-b-xl cursor-pointer"
            />
            <h1 className="ml-[5px] text-4xl font-logo text-gray-800 dark:text-white">
              freedomlife
            </h1>
          </div>
        </div>
      </a> */}

      <h2 className="mt-12 font-bold text-2xl dark:text-white">
        {homeLocale.recent_post[locale]}
      </h2>
      <RecentBlogPost locale={locale} />
    </div>
  )
}
