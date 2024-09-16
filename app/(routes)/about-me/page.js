import Image from "next/image";
import { PageTitle } from "@/app/_components";

export default function AboutMe() {
  return (
    <div>
      <PageTitle title="Brandon Varner" />
      <article className="flex flex-col justify-center align-middle">
        <header className="mb-5">
          <h2 className="sm:text-xl md:text-2xl lg:text-4xl text-center">
            Software Engineer and Comms Expert
          </h2>
        </header>
        <main>
          <p className="mb-3">
            I'm a software engineer and communications pro with diverse
            interests. I grew up in the Birmingham, AL metro area, but I've
            since branched out in search of a brighter future as a developer.
          </p>
          <p className="my-3">
            I've been developing since 2021, when I started the Innovate Bham
            coding bootcamp. I learned HTML, CSS, JavaScript, MySQL, and React
            during this course, and went on to learn React Native and Next.js on
            my own after graduating and landing my first coding job in 2022.
          </p>
          <p className="my-3">
            Since that time, I've focused on upskilling. I recently completed a
            highly competitive job training program from the University of
            Illinois's Discovery Partners Institute. During this program, I
            learned Ruby and the Ruby on Rails framework. I've obtained
            certificates in Java, and I've also learned C++ with other
            technologies. I love playing video games, and I hope to get into
            game development in the near future.
          </p>
          <p className="my-3">
            Though I briefly pivoted back to communications out of necessity,
            I'm hoping that my next coding opportunity will be a fruitful chance
            to learn and grow as a developer. I'm available for contract work
            and full-time employment.
          </p>
          <p className="my-3">
            In my free time, I'm usually hanging out with my wife, Resha, and/or
            our cat Katsu and our dog Lucky.
          </p>
          <p className="my-3">
            I'm also a huge football fan. My teams are the Las Vegas Raiders,
            University of Alabama Crimson Tide, Sioux Falls Storm, and Ottawa
            Redblacks.
          </p>
          <div>
            <h2>Selected Experience</h2>
            <div>
              <h3>Software Engineering Apprentice</h3>
              <h4>Discovery Partners Institute</h4>
              <h4>May 2024 - August 2024</h4>

              <ol>
                <li>Test my thing</li>
                <li>Test my thing</li>
              </ol>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
}
