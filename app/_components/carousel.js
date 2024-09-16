import imagePath from "../_assets/imagePath";
import Image from "next/image";

const technologies = [
  { tech: "Java", image: imagePath.java },
  { tech: "C++", image: imagePath.cpp },
  { tech: "JavaScript", image: imagePath.javaScript },
  { tech: "Ruby", image: imagePath.ruby },
  { tech: "React", image: imagePath.react },
  { tech: "React Native", image: imagePath.reactNative },
  { tech: "Next.js", image: imagePath.next },
  { tech: "Ruby on Rails", image: imagePath.rails },
  { tech: "Vite", image: imagePath.vite },
  { tech: "jQuery", image: imagePath.jquery },
  { tech: "HTML", image: imagePath.html },
  { tech: "CSS", image: imagePath.css },
  { tech: "Node.js", image: imagePath.node },
  { tech: "Bun", image: imagePath.bun },
  { tech: "Express", image: imagePath.express },
  { tech: "PostgreSQL", image: imagePath.postgreSQL },
  { tech: "MySQL", image: imagePath.mySQL },
  { tech: "SQLite", image: imagePath.sqlite },
  { tech: "RESTful APIs", image: imagePath.api },
  { tech: "Git", image: imagePath.git },
  { tech: "Firebase", image: imagePath.firebase },
  { tech: "Tailwind CSS", image: imagePath.tailwind },
  { tech: "SCSS", image: imagePath.scss },
  { tech: "Bootstrap", image: imagePath.bootstrap },
  { tech: "Visual Studio Code", image: imagePath.vscode },
  { tech: "Linux", image: imagePath.linux },
];

export default function ScrollingCarousel() {
  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10">
      <div className="relative flex">
        <div className="animate-scroll flex">
          {technologies.map((tech, index) => (
            <div
              key={`${tech.tech}-${index}`}
              className="flex flex-col items-center justify-around w-40 mx-4 bg-white rounded-lg drop-shadow-md"
            >
              <Image
                src={tech.image}
                width={100}
                height={100}
                alt={`Logo for ${tech.tech}`}
              ></Image>
              <span className="text-lg font-semibold text-gray-800">
                {tech.tech}
              </span>
            </div>
          ))}
        </div>
        <div className="animate-scroll flex" aria-hidden="true">
          {technologies.map((tech, index) => (
            <div
              key={`${tech.tech}-${index}-duplicate`}
              className="flex flex-col items-center justify-around w-40 mx-4 bg-white rounded-lg shadow-md"
            >
              <span className="text-lg font-semibold text-gray-800">
                {tech.tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
