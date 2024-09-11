import { PageTitle } from "@/app/_components";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <PageTitle title="Blog" />
      <div className="flex flex-col align-center justify-center mt-5">
        <p className="text-center text-2xl">
          My blog is currently under construction, but you can view over 80
          examples of my writing on{" "}
          <Link
            href="https://muckrack.com/brandon-varner-1/portfolio"
            className="text-blue-400"
          >
            my Muck Rack page.
          </Link>
        </p>
      </div>
    </div>
  );
}
