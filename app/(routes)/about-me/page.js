import { PageTitle, Job } from "@/app/_components";
import { text } from "./text";
import { jobs } from "./jobs";
import { technologies } from "@/app/_components/technologies";

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
          <div className="bg-yellow-50 rounded drop-shadow-md my-5 text-black p-5">
            {text.map((p, index) => (
              <p key={index} className="my-3">
                {p}
              </p>
            ))}
          </div>
          {/* <div className="bg-black w-full h-1 my-2" /> */}
          <div className="bg-yellow-50 rounded drop-shadow-md my-2 text-black p-5">
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
              />
            ))}
          </div>
        </main>
        <footer>
          <h3 className="text-4xl font-black mb-5">Tech Stack</h3>
          <p className="mb-3">I'm experienced with:</p>
          <ul className="list-disc list-inside">
            {technologies.map((tech, index) => (
              <li key={index}>{tech.tech}</li>
            ))}
          </ul>
        </footer>
      </article>
    </div>
  );
}
