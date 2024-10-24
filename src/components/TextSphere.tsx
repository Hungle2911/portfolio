import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { TagCloudOptions } from "@frank-mayer/react-tag-cloud/types";

const TextSphere = () => {
  return (
    <TagCloud
      options={(w: Window & typeof globalThis): TagCloudOptions => ({
        radius: Math.min(600, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: "normal",
        itemClass: "text-blue-400 font-pixelify",
      })}
      onClickOptions={{ passive: true }}
      onClick={(tag: string) => console.log(tag)}
    >
      {[
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "Sass",
        "React",
        "Tailwind CSS",
        "jQuery",
        "MaterialUI",
        "Bootstrap",
        "NodeJS",
        "GraphQL",
        "PostgreSQL",
        "Prisma",
        "Ruby on Rails",
        "ExpressJs",
        "PostgreSQL",
        "Ruby",
        "Django",
        "Python",
        "Django REST",
        "Cypress",
        "Chai",
        "Mocha",
        "Jest",
        "Docker",
        "AWS",
        "Gunicorn",
        "Nginx",
        "GitHub Action",
        "Pytest",
      ]}
    </TagCloud>
  );
};

export default TextSphere;
