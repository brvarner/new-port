import Image from "next/image";
import { PageTitle, Job } from "@/app/_components";

const jobs = [
  {
    title: "Founder/CEO/Engineer",
    company: "Bordu",
    dates: "August 2024 - Present",
    points: [
      "Created an efficient communication tool to help users break the email chain.",
      "Built with Ruby on Rails, JavaScript, and Bootstrap for easy spin-up and maintenance.",
    ],
  },
  {
    title: "Software Engineering Apprentice",
    company: "Discovery Partners Institute",
    dates: "May 2024 - August 2024",
    points: [
      "Refreshed my skills with SQL, HTML, CSS, and JavaScript while learning new skills including Ruby on Rails.",
      "Helped classmates find solutions to coding and non-coding problems dozens of times.",
      "Networked with multiple Fortune 500 executives and learned about the business side of software development.",
      "Built a Rails app throughout the Software Development Life Cycle with dozens of independent users.",
    ],
  },
  {
    title: "Senior Communications and Marketing Associate",
    company: "Spanish Coalition for Housing (SCH)",
    dates: "July 2023 - May 2024",
    points: [
      "Led a four-person team in publicizing the organization’s community efforts.",
      "Started a blog that informed the public of our actions and increased site traffic by 10%.",
      "Managed social media and email blasts to over 10,000 subscribers.",
    ],
  },
  {
    title: "Founding Engineer",
    company: "BUZD!",
    dates: "February 2022 - September 2022",
    points: [
      `Created a driver’s-side delivery app singlehandedly using React Native which enabled the business to earn over
$50,000 in its lifetime.`,
      `Constructed an administrative website using Next.js that allowed staff to manage inventory, orders, and
customers, increasing efficiency by 75%.`,
      `Collaborated with a team of two other developers to make crucial elements of a customer-facing app, including
product displays and an advertising carousel, increasing advertising options 5x.`,
    ],
  },
];

const text = [
  `I'm a software engineer and communications pro with diverse
            interests. I grew up in the Birmingham, AL metro area, but I've
            since branched out in search of a brighter future as a developer.`,
  `I've been developing since 2021, when I started the Innovate Bham
            coding bootcamp. I learned HTML, CSS, JavaScript, MySQL, and React
            during this course, and went on to learn React Native and Next.js on
            my own after graduating and landing my first coding job in 2022.`,
  `Since that time, I've focused on upskilling. I recently completed a
            highly competitive job training program from the University of
            Illinois's Discovery Partners Institute. During this program, I
            learned Ruby and the Ruby on Rails framework. I've obtained
            certificates in Java, and I've also learned C++ with other
            technologies. I love playing video games, and I hope to get into
            game development in the near future.`,
  `Though I briefly pivoted back to communications out of necessity,
            I'm hoping that my next coding opportunity will be a fruitful chance
            to learn and grow as a developer. I'm available for contract work
            and full-time employment.`,
  `In my free time, I'm usually hanging out with my wife, Resha, and/or
            our cat Katsu and our dog Lucky. I'm also a huge football fan! My
            teams are the Las Vegas Raiders, University of Alabama Crimson Tide,
            Sioux Falls Storm, and Ottawa Redblacks.`,
];

export default function AboutMe() {
  return (
    <div>
      <PageTitle title="Brandon Varner" />
      <article className="flex flex-col justify-center align-middle">
        <header className="mb-5">
          <h2 className="sm:text-xl md:text-2xl lg:text-4xl text-center font-semibold">
            Software Engineer and Comms Expert
          </h2>
        </header>
        <main>
          {text.map((p, index) => (
            <p key={index} className="my-3">
              {p}
            </p>
          ))}
          <div>
            <h2 className="text-4xl font-black mb-5">Selected Experience</h2>
            {jobs.map((job, index) => (
              <Job
                key={index}
                title={job.title}
                company={job.company}
                dates={job.dates}
                points={job.points}
              />
            ))}
          </div>
        </main>
      </article>
    </div>
  );
}
