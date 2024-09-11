import imagePath from "../../_assets/imagePath";
import { ProjectBento, PageTitle } from "@/app/_components";

const projects = [
  {
    title: "Bordu",
    desc: `A kanban board for non-technical people! It takes in emails from
                users and provides updates on tasks. Built with Ruby on Rails
                with Bootstrap and some front-end JavaScript.`,
    image: imagePath.bordu.src,
    url: "https://bordu.vip",
    classes:
      "rounded-md z-0 border relative min-h-96 grid-flow-dense col-span-8 row-span-3",
  },
  {
    title: "Previous Portfolio",
    desc: `My old 3D rendered portfolio site. Built with three.js and Vite
                with vanilla JavaScript and CSS for functionality and styling.`,
    image: imagePath.oldPortfolio.src,
    url: "https://portfolio-cpr54uw04-brvarners-projects.vercel.app/",
    classes:
      "rounded-md border relative min-h-36 grid-flow-dense col-span-3 row-span-3",
  },
  {
    title: "Spotify Clone",
    desc: `A small Spotify clone with streaming music sourced from the
                Internet Archive. Built in React Native with TypeScript and a
                GraphQL API on AWS Amplify.`,
    image: imagePath.spotify.src,
    url: "https://github.com/brvarner/spotify-clone/tree/main",
    classes:
      "rounded-md border relative min-h-36 grid-flow-dense col-span-2 row-span-3",
  },
  {
    title: "Weather App",
    desc: `A weather app built with React and Bootstrap, pulls weather data
                for the first matching city from the Openweather API.`,
    image: imagePath.weather.src,
    url: "https://bootstrap-weather-app.vercel.app/",
    classes:
      "rounded-md border relative min-h-36 grid-flow-dense col-span-3 row-span-3",
  },
];
export default function Projects() {
  return (
    <div>
      <PageTitle title="Projects" />
      <div className="grid grid-cols-8 gap-6 max-w-7xl w-full mx-auto p-4 rounded-md my-12 grid-flow-dense h-screen">
        {projects.map((project, index) => (
          <ProjectBento
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            url={project.url}
            classes={project.classes}
          />
        ))}
      </div>
    </div>
  );
}
