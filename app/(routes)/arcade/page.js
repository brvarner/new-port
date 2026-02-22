"use client";

import { PageTitle } from "@/app/_components";
import { useState, React } from "react";
import Pico8 from "react-pico-8";

export default function Arcade() {
  const [running, setRunning] = useState(true);

  return (
    <div className="flex flex-col items-center gap-6 mt-5">
      <PageTitle title={"Arcade"} />

      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl font-semibold">Space</h3>

        <div
          tabIndex={0}
          onMouseEnter={() => setRunning(true)}
          onMouseLeave={() => setRunning(false)}
          style={{
            transform: "scale(.8)",
            transformOrigin: "top center",
            // marginBottom: "15px",
          }}
        >
          <p className="text-center text-md mb-6">
            The first Pico 8 game I've built, using a tutorial. No sound just
            yet! Use Arrow Keys to Move, Z Button to Fire.
          </p>

          <Pico8
            src="/pico-games/space/game.js"
            placeholder="/pico-games/space/game.map.png"
            running={running}
            autoPlay={false}
            legacyButtons={false}
            hideCursor={true}
            center={true}
            blockKeys={true}
            usePointer={true}
          />
        </div>
      </div>
    </div>
  );
}
