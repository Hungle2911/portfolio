interface Command {
  description: string;
  keywords: string[];
  execute: () => string;
}
export const commands: { [key: string]: Command } = {
  help: {
    description: 'Show available commands',
    keywords: ['help', '?', 'assist', 'commands'],
    execute: () => `
  ----- Available commands: -----
- help: Show this help message
- about: Display information about me
- skills: List technical skills
- projects: Show project portfolio
- experience: Display work experience
- contact: Show contact information
- clear: Clear all prompts and start fresh
    `.trim(),
  },
  about: {
    description: 'Display information about me',
    keywords: ['about', 'who', 'info', 'william'],
    execute: () => `
    Of course! Here is a little bit about William:
===========================
ABOUT ME
===========================
Name: William Le
Role: Full Stack Developer
Location: Toronto, Ontario, Canada

I'm a passionate developer focused on creating efficient and elegant solutions to complex problems. As a young professional transitioning into the web development field from a background in Marketing, I am driven to become more progressive every day to adapt to the constantly evolving landscape of technology and user needs. I am eager to leverage these skills in a junior web developer role, bringing my enthusiasm, adaptability, and commitment to excellence to every project I undertake.

Type 'skills' to see my technical expertise.
    `.trim(),
  },
  skills: {
    description: 'List technical skills',
    keywords: ['skills', 'tech', 'languages', 'stack'],
    execute: () => `
    Let see! Here are some of the technical skills that William has:
===========================
TECHNICAL SKILLS
===========================
Languages:
JavaScript/TypeScript + Python + Ruby + SQL

Frontend:
React.js + Bootstrap + HTML5/CSS3 + Tailwind CSS

Backend:
Node.js + Express + Django + Ruby on Rails + jQuery

Database:
PostgreSQL+ Prisma + GraphQL

DevOps:
Docker + AWS + Jest + Pytest + Cypress + CI/CD + Git + GitHub Actions + Nginx
    `.trim(),
  },
  projects: {
    description: 'Show project portfolio',
    keywords: ['projects', 'portfolio', 'work'],
    execute: () => `
    Certainly! May I present to you William's project portfolio ノ•ᴥ•ʔノ
===========================
PROJECTS
===========================
1. Rarecipe - Recipe Sharing System
 - Tech: TypeScript, React, Django, Docker, AWS , PostgreSQL
 - GitHub: https://github.com/Hungle2911/rarecipe
 - Description: [
  * Implemented containerization with Docker, ensuring consistent development and deployment environments
  * Utilized PostgreSQL for robust data management and RESTful API design for efficient client-server communication
  * Integrated Nginx as a reverse proxy to handle load balancing and serve static content
  * Employed Git for version control and implemented CI/CD pipeline using GitHub Actions
  * Designed backend with Python, Django REST Framework and Docker using Test Driven Development (TDD)
 ]

2. Feline Good - Appointment Booking System
 - Tech: TypeScript, React, Google Map API, PostgreSQL, Express.js, Prisma, React-hook-form, Auth0
 - GitHub: https://github.com/Hungle2911/pet-hub
 - Description: [
  * User authentication and role-based access (owners/sitters) using Auth0
  * Interactive booking system with Google Maps API integration
  * Implemented RESTful API design principles and modern UI/UX practices
 ]


3. Calsifer's Hearth - Restaurant Ordering Pickup App
 - Tech: TypeScript, React, PostgreSQL, Express.js, React-hook-form, Stripe
 - GitHub: https://github.com/Hungle2911/food-order-pickup-react
 - Description: [
  *  Created a fully functional pre-order food website using React for the front end and Node.js/Express.js for the backend.
  *  Implemented user authentication, product listings, and a shopping cart feature.
  *  Used PostgreSQL for the database and integrated Stripe for payment processing.
 ]

Type 'contact' to get in touch about any projects.
    `.trim(),
  },
  experience: {
    description: 'Display work experience',
    keywords: ['experience', 'work', 'internship'],
    execute: () => `
    Absolutely! Here is a summary of William's work experience:
===========================
WORK EXPERIENCE
===========================
Intern @ RMC Solutions (4/2024-8/2024)
  - Collaborated with a cross-functional team on internal web apps for TELUS clients, streamlining business processes.
  - Optimized websites with the marketing team for improved SEO and search engine rankings.
  - Implemented Django for RESTful API development and conducted endpoint testing with Postman for frontend-backend integration.
  - Developed over 100 unit and component tests with Cypress and Jest to ensure user flow integrity and functionality.

    `.trim(),
  },
  contact: {
    description: 'Show contact information',
    keywords: ['contact', 'connect'],
    execute: () => `
===========================
CONTACT INFORMATION
===========================
Email: leehuanygo@gmail.com
Location: Toronto, Ontario, Canada
GitHub: https://github.com/Hungle2911
LinkedIn: https://www.linkedin.com/in/william-le-6394921b7/

I can redirect you to William's GitHub or LinkedIn if you would like to connect with him. Just type 'github' or 'linkedin' to open the link in a new tab. ᕙ(⇀‸↼‶)ᕗ
    `.trim(),
  },
  hello: {
    description: 'Greet the user',
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    execute: () => `
===========================
Hello fellow human! It's really nice to see you. How can I help you today? (⌐■_■)
===========================
    `.trim(),
  },
  github: {
    description: 'Greet the user',
    keywords: ['github', 'git', 'repository'],
    execute: () => {
      window.open(`https://github.com/Hungle2911`, '_blank');
      return "Opening GitHub...";
    }
  },
  linkedin: {
    description: 'Greet the user',
    keywords: ['linkedin', 'network'],
    execute: () => {
      window.open(`https://www.linkedin.com/in/william-le-6394921b7/`, '_blank');
      return "Opening LinkedIn...";
    }
  },
};