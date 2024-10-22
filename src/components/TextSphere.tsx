import { TagCloud } from "@frank-mayer/react-tag-cloud";

const TextSphere = () => {
  return (
    <TagCloud
      options={(w: Window & typeof globalThis): TagCloudOptions => ({
        radius: Math.min(600, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: "medium",
      })}
      onClickOptions={{ passive: true }}
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
