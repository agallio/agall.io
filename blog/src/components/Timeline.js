import { useState } from 'react'

export const Year = ({ children }) => (
  <div className="flex items-center my-4">
    <p className="text-lg font-bold dark:text-white">{children}</p>
    <div className="flex-1 h-px ml-4 bg-gray-200 dark:bg-gray-600" />
  </div>
)

export const Step = ({ title, children }) => (
  <li className="flex">
    <div className="flex mt-1 text-green-700 dark:text-green-300">
      <svg className="mr-2 w-4 h-4" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </g>
      </svg>
    </div>

    <div className="mb-4">
      <p className="font-medium text-gray-900 mb-2 dark:text-white">{title}</p>
      <p className="text-gray-700 dark:text-gray-200">{children}</p>
    </div>
  </li>
)

const FullTimeline = () => (
  <>
    <Year>2018</Year>
    <ul>
      <Step title="Introduction To React &amp; Node.js">
        I learned to use React &amp; Node.js to build{' '}
        <a
          href="https://freedomlife.id"
          target="_blank"
          rel="noreferrer"
          className="bouncy-anchor"
        >
          FreedomLife
        </a>{' '}
        as well as my main challenge during my internship to help my company to
        develop their product using React &amp; Node.js.
      </Step>
      <Step title="Mentoring LKS - Web Design">
        I was appointed to be a mentor for my juniors who were going to
        participate in LKS - Web Design.
      </Step>
      <Step title="Started FreedomLife">
        I started creating a web-based bible reading guide app called,{' '}
        <a
          href="https://freedomlife.id"
          target="_blank"
          rel="noreferrer"
          className="bouncy-anchor"
        >
          FreedomLife
        </a>
        . In this initial phase I started by doing research on what potential
        users need in this application.
      </Step>
      <Step title="Frontend Engineer - Internship">
        Because I entered the vocational high school with a school period of 4
        years, this last year was used to do a full-time internship job. I took
        a 1-year internship at Docotel Group as a Frontend Engineer.
      </Step>
    </ul>
    <Year>2017</Year>
    <ul>
      <Step title="Became A Runner-Up LKS - Web Design 🥳">
        After a long journey for 2 years, I became a runner-up in the LKS
        (student competency competition) at the provincial level.
      </Step>
      <Step title="LKS - Web Design II">
        Praise God for the second time I passed the school level selection, and
        proceeded to the provincial level for the second time.
      </Step>
      <Step title="LKS - Web Design Selection II">
        I returned to participate in the LKS selection at the school level, with
        more thorough preparation.
      </Step>
      <Step title="Special PHP Mentoring">
        I&apos;m following special mentoring for PHP programming language. My
        mentor was <br />
        <a
          href="https://twitter.com/therusetiawan"
          target="_blank"
          rel="nooopener noreferrer"
          className="bouncy-anchor"
        >
          Heru Setiawan
        </a>
        . In this mentoring session also discussed what made me fail in last
        year&apos;s LKS selection.
      </Step>
    </ul>
    <Year>2016</Year>
    <ul>
      <Step title="Lost LKS - Web Design 🥲">
        I lost at provincial level. I feel sad, but there is also sense of
        passion to learn to be better in the next year.
      </Step>
      <Step title="LKS - Web Design">
        Praise God I passed the school level selection, then I went up to the
        LKS (student competency competition) at the provincial level.
      </Step>
      <Step title="LKS - Web Design Selection">
        After completing the training, I participated in the LKS (student
        competency competition) selection at the school level.
      </Step>
      <Step title="LKS - Web Design Training">
        I participated in web design training to prepare for LKS (student
        competency competition) selection at school level.
      </Step>
      <Step title="Became A Teacher Assistant To Teach Web Development">
        I was entrusted to teach classmates in web development lessons. The
        lesson is PHP Native, HTML, and CSS to create a simple CRUD application.
      </Step>
    </ul>
    <Year>2015</Year>
    <ul>
      <Step title="Go To Vocational High School (Computer &amp; Engineering) 🤓">
        My interest in technology made me interested in learning more by
        entering vocational high school that have computer and engineering
        fields.
      </Step>
    </ul>
    <Year>2013</Year>
    <ul>
      <Step title="Learn Web Development II (JavaScript)">
        Next, I learned by myself over the internet to know what JavaScript is
        and how it works.
      </Step>
      <Step title="Learn Web Development I (HTML &amp; CSS)">
        My father bought me a book about basic web development, then I started
        reading it and practicing it. At that time I learned what HTML &amp; CSS
        are and how they work.
      </Step>
      <Step title="Learn What The Internet Is">
        I started learning about what the internet is and what&apos;s available
        in it, other than gaming.
      </Step>
      <Step title="My First Computer">
        The first computer that I used was my father&apos;s. I used to use it to
        play Facebook web-flash games, like Restaurant City, Farmville, and
        Ninja Saga.
      </Step>
    </ul>
    <Year>2000</Year>
    <ul>
      <Step title="Born 🧑🏻‍🍼"></Step>
    </ul>
  </>
)

const Timeline = () => {
  const [isFullTimeline, setFullTimeline] = useState(false)

  return (
    <>
      <Year>2021</Year>
      <ul>
        <Step title="Joined Traveloka!">
          I joined as a Software Engineer at Traveloka, to help them with
          everything related to the Web.{' '}
          <span role="img" aria-label="congratulations">
            🥳
          </span>
        </Step>
        <Step title="FreedomLife 10K Users 🚀">
          Finally, after 6 months from 2K users, FreedomLife hits 10K users with
          ± 2.5K monthly active users!{' '}
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
        </Step>
      </ul>
      <Year>2020</Year>
      <ul>
        <Step title="FreedomLife 2K Users 🔥">
          FreedomLife reaches two thousand users by the end of 2020. It makes me
          sure that there are still many people who want to understand the heart
          of a Father for His children.
        </Step>
        <Step title="Became a Frontend Engineering Lead 👨🏻‍💻">
          Starting at the beginning of 2020, I was given the opportunity to move
          to a tech leadership role in the frontend engineering team at PrivyID.
        </Step>
        <Step title="Released FreedomLife 🚀">
          After being built for more than a year, I finally released my
          open-source project, a one-year Bible reading guide application,{' '}
          <a
            href="https://freedomlife.id"
            target="_blank"
            rel="noreferrer"
            className="bouncy-anchor"
          >
            FreedomLife
          </a>
          .
        </Step>
        <Step title="Frontend Engineer - Full-time II">
          After my rest period, I returned to work at PrivyID as a Frontend
          Engineer.
        </Step>
      </ul>
      <Year>2019</Year>
      <ul>
        <Step title="1 Month Break 🛌">
          At the end of 2019, I decided to take a 1 month break to make my mind
          and mentality return to normal &amp; healthy condition after almost 2
          years of work.
        </Step>
        <Step title="Testing FreedomLife Beta">
          Conduct an initial test of the{' '}
          <a
            href="https://freedomlife.id"
            target="_blank"
            rel="noreferrer"
            className="bouncy-anchor"
          >
            FreedomLife
          </a>{' '}
          app on users who are respondents to previous research, to improve the
          application.
        </Step>
        <Step title="Working With People Abroad">
          At Skyshi I had the opportunity to work for a multinational company,
          GetCraft. I work with people from Singapore, US, Australia and
          Bulgaria. I got a lot of new knowledge, as well as new insights from
          the people living abroad.
        </Step>
        <Step title="Frontend Engineer - Full-time I">
          Finally, after I graduated and after the end of my internship, I got a
          full-time jobat Skyshi Digital Indonesia as a Frontend Engineer.
        </Step>
        <Step title="Graduated From Vocational High School 🎓">
          An achievement that I think is extraordinary. Finally, after 4 years,
          I graduated with all my wonderful once-in-a-lifetime experiences.
        </Step>
        <Step title="Start Designing FreedomLife">
          After doing some research, I started designing the initial framework
          for{' '}
          <a
            href="https://freedomlife.id"
            target="_blank"
            rel="noreferrer"
            className="bouncy-anchor"
          >
            FreedomLife
          </a>{' '}
          app, starting from UI and UX design, then the data design and the code
          architecture.
        </Step>
      </ul>

      {isFullTimeline && <FullTimeline />}

      <div
        aria-label={`Read ${isFullTimeline ? 'Less' : 'More'}`}
        role="button"
        tabIndex="0"
        className="flex items-center mt-8 focus:outline-none"
        onClick={() => setFullTimeline(!isFullTimeline)}
        onKeyDown={() => undefined}
      >
        <div className="flex-1 h-px mr-4 bg-gray-200 dark:bg-gray-600" />
        <p className="flex items-center justify-center font-medium dark:text-white">
          {isFullTimeline ? (
            <>
              See Less{' '}
              <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </>
          ) : (
            <>
              See More{' '}
              <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </>
          )}
        </p>
        <div className="flex-1 h-px ml-4 bg-gray-200 dark:bg-gray-600" />
      </div>
    </>
  )
}

export default Timeline
