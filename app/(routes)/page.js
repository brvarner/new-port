"use client";

import Image from "next/image";
import Link from "next/link";
import imagePath from "../_assets/imagePath";
import { useState } from "react";
import { ScrollingCarousel } from "../_components";

export default function Home() {
  const [isHoveringLinks, setIsHoveringLinks] = useState(false);
  const [isHoveringAbout, setIsHoveringAbout] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-6 w-full rounded-md my-12">
      <div
        className="rounded-md border relative min-h-80 p-5 blurred-bento text-white drop-shadow-2xl col-span-1 md:col-span-8"
        onMouseEnter={() => setIsHoveringLinks(true)}
        onMouseLeave={() => setIsHoveringLinks(false)}
      >
        <div className="flex flex-col md:flex-row justify-between items-center p-8">
          <div>
            <p className="text-xl md:text-2xl font-bold text-white">
              // Hello, my name is
            </p>
            <h1 className="text-4xl md:text-6xl font-black mt-2 text-white">
              Brandon Varner
            </h1>
          </div>

          <div className="flex mt-4 max-h-60">
            <Image
              src={isHoveringLinks ? imagePath.cartoon : imagePath.headshot}
              alt={
                isHoveringLinks
                  ? "A cartoon rendering of Brandon Varner's head"
                  : "Brandon Varner's headshot"
              }
              width={250}
              height={250}
              className="rounded-full bg-slate-700 drop-shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
      <Link
        href="/about-me"
        className="rounded-md border relative min-h-64 bg-gradient-to-b from-pink-400 to-pink-600 p-8 text-white col-span-1 md:col-span-2"
        onMouseEnter={() => setIsHoveringAbout(true)}
        onMouseLeave={() => setIsHoveringAbout(false)}
      >
        <div className="h-full flex items-center justify-center">
          {isHoveringAbout ? (
            <p className="text-2xl md:text-5xl font-black text-center">
              Learn More
            </p>
          ) : (
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">About Me:</h3>
              <p className="text-sm md:text-base">
                I'm a software developer and communications expert from
                Birmingham, AL. I've been developing for 3 years now, and I've
                been writing professionally for almost a decade.
              </p>
            </div>
          )}
        </div>
      </Link>
      <div className="rounded-md border relative min-h-64 bg-slate-100 col-span-1 md:col-span-6">
        <ScrollingCarousel />
        <h1 className="text-3xl md:text-7xl text-black font-black text-center">
          Tech Stack
        </h1>
      </div>
    </div>
  );
}
