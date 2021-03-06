import Head from 'next/head'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import htmr from 'htmr'

import aboutLocale from '@/locales/about'

import Timeline from '@/components/Timeline'

export default function About() {
  return (
    <>
      <Head>
        <title>{aboutLocale.seo.en.title}</title>
      </Head>
      <NextSeo {...aboutLocale.seo.en} />

      <div className="flex flex-col pt-28">
        <div className="flex flex-col items-center">
          <Image
            src="/images/avatar.webp"
            width={200}
            height={200}
            layout="intrinsic"
            alt="agallio's avatar"
            className="rounded-full"
          />
        </div>

        <div className="mt-16">
          <h1 className="font-black tracking-wide text-3xl mb-4 sm:text-4xl dark:text-white">
            {aboutLocale.about_me.en}{' '}
            <span role="img" aria-label="man working with macbook">
              🧑🏻‍💻
            </span>
          </h1>
          <p className="md:text-lg leading-relaxed text-gray-700 my-2 dark:text-gray-200">
            {htmr(aboutLocale.description.en)}
          </p>

          <p className="mt-4 mb-2 leading-relaxed md:text-lg text-gray-700 dark:text-gray-200">
            {htmr(aboutLocale.long_description.en)}
          </p>

          <p className="mt-4 mb-2 leading-relaxed md:text-lg text-gray-700 dark:text-gray-200">
            {htmr(aboutLocale.music_description.en)}
          </p>

          <h1 className="font-black tracking-wide text-3xl mb-4 mt-12 sm:text-4xl dark:text-white">
            {aboutLocale.timeline.en}
          </h1>

          <Timeline />
        </div>
      </div>
    </>
  )
}
