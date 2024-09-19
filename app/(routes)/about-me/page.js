import { PageTitle, Job, AboutCard } from "@/app/_components";
import { text } from "./text";
import { jobs } from "./jobs";
import { technologies } from "@/app/_components/technologies";

export default function AboutMe() {
  const halfTechShort = Math.floor(technologies.length / 2);
  const firstHalfTech = technologies.slice(0, halfTechShort);
  const secondHalfTech = technologies.slice(halfTechShort, technologies.length);
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
          <AboutCard>
            {text.map((p, index) => (
              <p key={index} className="my-3">
                {p}
              </p>
            ))}
          </AboutCard>

          <AboutCard>
            <h3 className="text-4xl font-black mb-5 text-center">
              Selected Experience
            </h3>
            {jobs.map((job, index) => (
              <Job
                key={index}
                title={job.title}
                company={job.company}
                dates={job.dates}
                points={job.points}
                index={index}
              />
            ))}
          </AboutCard>
        </main>
        <footer>
          <AboutCard>
            <div className="text-center mb-3">
              <h3 className="text-4xl font-black mb-2">Tech Stack</h3>
              <p>I'm experienced with:</p>
            </div>
            <div className="flex flex-row justify-around my-2">
              <ul className="list-disc list-inside">
                {firstHalfTech.map((tech, index) => (
                  <li key={index} className="text-md md:text-xl">
                    {tech.tech}
                  </li>
                ))}
              </ul>
              <ul className="list-disc list-inside">
                {secondHalfTech.map((tech, index) => (
                  <li key={index} className="text-md md:text-xl">
                    {tech.tech}
                  </li>
                ))}
              </ul>
            </div>
          </AboutCard>
        </footer>
      </article>
    </div>
  );
}
