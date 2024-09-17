import { technologies } from "./technologies";
import Image from "next/image";

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
