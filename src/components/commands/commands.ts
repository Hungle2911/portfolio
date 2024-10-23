interface Command {
  description: string;
  execute: () => string;
}
export const commands: { [key: string]: Command } = {
  help: {
    description: 'Show available commands',
    execute: () => `
Available commands:
- help: Show this help message
- about: Display information about me
- skills: List technical skills
- projects: Show project portfolio
- experience: Display work experience
- contact: Show contact information
- social: Display social media links
    `.trim(),
  },
  about: {
    description: 'Display information about me',
    execute: () => `
===========================
ABOUT ME
===========================
Name: William Le
Role: Full Stack Developer
Location: Toronto, Ontario, Canada

I'm a passionate developer focused on creating efficient and elegant solutions
to complex problems. As a young professional transitioning into the web development field from a background in Marketing, I am driven to become more progressive every day to adapt to the constantly evolving landscape of technology and user needs. I am eager to leverage these skills in a junior web developer role, bringing my enthusiasm, adaptability, and commitment to excellence to every project I undertake.

Type 'skills' to see my technical expertise.
    `.trim(),
  },
  skills: {
    description: 'List technical skills',
    execute: () => `
===========================
TECHNICAL SKILLS
===========================
Languages:
- JavaScript/TypeScript
- Python
- Ruby
- SQL

Frontend:
- React.js
- Bootstrap
- HTML5/CSS3
- Tailwind CSS

Backend:
- Node.js
- Express
- Django
- Ruby on Rails
- Jest
- Pytest
- Cypress

Database:
- PostgreSQL
- Prisma
- GraphQL


DevOps:
- Docker
- AWS
- CI/CD
- Git
    `.trim(),
  },

};