"use client";

import Image from "next/image";
import Link from "next/link";
import imagePath from "../_assets/imagePath";
import { useState } from "react";
import ScrollingCarousel from "../_components/carousel";

export default function Home() {
  const [isHoveringLinks, setIsHoveringLinks] = useState(false);
  const [isHoveringAbout, setIsHoveringAbout] = useState(false);

  return (
    <div className="grid grid-cols-8 gap-6 w-full rounded-md my-12 grid-flow-dense">
      <div
        className="rounded-md border relative min-h-80 grid-flow-dense col-span-8 row-span-2 p-5 sm-w-full bg-teal-700 text-white"
        onMouseEnter={() => setIsHoveringLinks(true)}
        onMouseLeave={() => setIsHoveringLinks(false)}
      >
        <p className="text-xl md:text-2xl font-bold text-white">
          // Hello, my name is
        </p>
        <h1 className="text-4xl md:text-6xl font-black mt-2 text-white">
          Brandon Varner
        </h1>
        <div className="flex flex-row justify-between align-middle items-center p-8">
          <div className="mt-8 relative">
            <Image
              src={isHoveringLinks ? imagePath.cartoon : imagePath.headshot}
              alt={
                isHoveringLinks
                  ? "A cartoon rendering of Brandon Varner's head"
                  : "Brandon Varner's headshot"
              }
              width={isHoveringLinks ? 128 : 150}
              height={isHoveringLinks ? 128 : 150}
              className="rounded-full bg-slate-700"
            />
          </div>
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://github.com/brvarner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={imagePath.github}
                alt="GitHub logo"
                width={125}
                height={125}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/brandonvarneral/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={imagePath.linkedIn}
                alt="LinkedIn logo"
                width={125}
                height={125}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="rounded-md border relative min-h-64 grid-flow-dense col-span-2 row-span-8 bg-gradient-to-b from-pink-400 to-pink-600 p-8 text-white">
        <div
          className="h-full flex items-center justify-center"
          onMouseEnter={() => setIsHoveringAbout(true)}
          onMouseLeave={() => setIsHoveringAbout(false)}
        >
          {isHoveringAbout ? (
            <p className="text-3xl md:text-5xl font-black text-center">
              Learn More
            </p>
          ) : (
            <div>
              <h3 className="text-2xl font-bold mb-2">About Me:</h3>
              <p className="text-lg md:text-base">
                I'm a software developer and communications expert from
                Birmingham, AL. I've been developing for 3 years now, and I've
                been writing professionally for almost a decade.
              </p>
            </div>
          )}
        </div>
      </div>
      <div
        className="rounded-md border relative min-h-64 grid-flow-dense col-span-6 row-span"
        style={{ backgroundColor: "#f5f5f5", color: "black" }}
      >
        <ScrollingCarousel />
      </div>
    </div>
  );
}
