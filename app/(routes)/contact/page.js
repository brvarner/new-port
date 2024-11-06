"use client";
import { PageTitle } from "@/app/_components";
import Link from "next/link";
import Script from "next/script";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Contact() {
  gsap.registerPlugin(useGSAP);
  const container = useRef();

  useGSAP(() => {
    var tl = gsap.timeline({ repeat: -1 });
    tl.to("h2", 30, { backgroundPosition: "-960px 0" }, { scope: container });
  });

  return (
    <div>
      <PageTitle title="Contact Me" classes="title" />
      <div className="bg-slate-600 rounded w-5/6 h-64 align-center justify-center flex flex-col align-self-center mx-auto mt-5">
        <p className="text-center sm:text-xl md:text-2xl mt-5">
          For all inquiries, please email:
        </p>
        <Link href="mailto:info@bvarner.dev">
          <h5 className="text-4xl md:text-7xl xl:text-8xl font-black text-center">
            info at bvarner.dev
          </h5>
        </Link>
      </div>
    </div>
  );
}
