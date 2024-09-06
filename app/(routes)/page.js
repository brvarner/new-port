"use client";
import Image from "next/image";
import cartoonPic from "../_assets/headshots/cartoonBrandon.png";
import humanPic from "../_assets/headshots/Brandon(1)(1).png";
import { useState } from "react";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);
  return (
    <section className="bg-white p-24">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-3 bg-gray-50 h-auto md:h-full flex flex-col">
            <div
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className=" bg-teal-700 group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow justify-between"
            >
              <div>
                <p className="text-2xl font-bold">Hello, my name is</p>
                <h1 className="text-6xl font-black">Brandon Varner</h1>
              </div>
              {isHovering ? (
                <Image
                  className="rounded-full bg-slate-700 bg-contain"
                  src={cartoonPic}
                  alt=""
                  height="200"
                />
              ) : (
                <Image
                  className="rounded-full bg-slate-700"
                  src={humanPic}
                  height="200"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
