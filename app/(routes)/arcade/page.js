"use client";

import { PageTitle } from "@/app/_components";
import React, { memo } from "react";
import Pico8 from "react-pico-8";

const StablePico8 = memo(() => (
  <Pico8
    src="/pico-games/space/game.js"
    placeholder="/pico-games/space/game.map.png"
    autoPlay={false}
    legacyButtons={false}
    hideCursor={true}
    center={true}
    blockKeys={true}
    usePointer={true}
  />
));

StablePico8.displayName = "StablePico8";

export default function Arcade() {
  return (
    <div className="flex flex-col items-center gap-6 mt-5">
      <PageTitle title={"Arcade"} />
      <div className="flex flex-col items-center gap-4">
        <p>
          I've been working on game development, starting with the{" "}
          <a className="underline" href="https://www.lexaloffle.com/pico-8.php">
            Pico-8
          </a>{" "}
          Fantasy Console. Pico-8 lets you export games as HTML/JS, so I'll be
          adding some games below as I complete them.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 justify-center">
        <h3 className="text-xl font-semibold">Space</h3>

        <div
          tabIndex={0}
          style={{
            transform: "scale(.8)",
            transformOrigin: "top center",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            // marginBottom: "15px",
          }}
        >
          <p className="text-center text-md mb-6">
            The first Pico-8 game I've built, using a tutorial. No sound just
            yet, besides the built-in startup sound.
          </p>

          <p className="text-center text-md mb-6">
            Move with the Arrow Keys, Fire with the Z Key, Pause with the Enter
            Key.
          </p>

          <p className="text-center text-md mb-6">
            Shoot the aliens, don't die.
          </p>

          <iframe
            title="Space Pico-8 Game"
            src="/api/pico/space/game.html"
            width="540"
            height="540"
            style={{ border: "none" }}
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
}
