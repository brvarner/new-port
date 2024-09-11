import Link from "next/link";

export default function ProjectBento({ title, desc, image, url, classes }) {
  return (
    <Link
      href={url}
      className={classes}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="text-center text-white w-11/12 mx-auto hover:animate-bounce">
            <h3 className="text-white text-5xl font-bold mb-4 ">{title}</h3>
            <p className="text-lg">{desc}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
