"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ImgLink from "./imgLink";
import imagePath from "../_assets/imagePath";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [currentHomeEmoji, setCurrentHomeEmoji] = useState("");

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setCurrentHomeEmoji(emojiPicker());

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    {
      id: 1,
      link: "projects",
    },
    {
      id: 2,
      link: "blog",
    },
    {
      id: 3,
      link: "contact",
    },
    {
      id: 4,
      link: "about me",
    },
    {
      id: 5,
      link: "https://github.com/brvarner",
      img: imagePath.github,
    },
    {
      id: 6,
      link: "https://www.linkedin.com/in/brandonvarneral/",
      img: imagePath.linkedIn,
    },
  ];

  const emojis = ["🏠", "🏡", "🏢", "🛖"];

  const emojiPicker = () => {
    let emoIndex = Math.floor(Math.random() * emojis.length);
    return emojis[emoIndex];
  };

  return (
    <div className="border-b-slate-400 border-2 flex justify-between items-center w-full h-20 px-4 text-white nav sticky z-40">
      <div>
        <h1 className="font-signature ml-2">
          <Link
            href="/"
            className="link-underline link-underline-black text-4xl"
          >
            {currentHomeEmoji}
          </Link>
        </h1>
      </div>

      <div>
        <ul className="hidden md:flex">
          {links.map(({ id, link, img }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium linkText hover:scale-105 hover:text-white duration-200 link-underline"
            >
              {id <= 4 ? (
                <Link href={id == 4 ? "about-me" : `${link}`}>{link}</Link>
              ) : (
                <ImgLink url={link} img={img} />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, img }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {id <= 4 ? (
                <Link
                  onClick={() => setNav(!nav)}
                  href={id == 4 ? "about-me" : `${link}`}
                >
                  {link}
                </Link>
              ) : (
                <ImgLink nav={nav} setNav={setNav} url={link} img={img} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
