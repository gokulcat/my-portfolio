import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Gokul",
  lastName: "C",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "ReactJS Developer",
  avatar: "/images/Gokul.jpeg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/gokulcat",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gokul-c-9647401a0/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:gokulcat15@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>ReactJS Developer</>,
  subline: (
    <>
      I'm Gokul, a UI/UX engineer at
      <InlineCode>Infosys technologies Limited</InlineCode>.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://www.linkedin.com/in/gokul-c-9647401a0/",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Gokul is a UI/UX design engineer with a passion for transforming complex
        challenges into simple, elegant design solutions. My work spans digital
        interfaces, interactive experiences, and the convergence of design and
        technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Infosys Limited",
        timeframe: "2021 - 2024",
        role: "System Engineer",
        achievements: [
          <h1>React Experience</h1>,
          <>
            <b>Responsive Design:</b> Leveraged CSS frameworks and tools such as
            Flexbox and Grid to create adaptable layouts that enhance usability
            on mobile, tablet, desktop environments and Cross-Browser
            Compatible.
          </>,
          <>
            <b>State Management:</b> Employed React.js hooks (e.g., useState,
            useEffect, and useReducer) and the Context API to manage complex
            application state, ensuring efficient data flow and reactivity
            within the user interface.
          </>,
          <>
            <b>Custom Hooks Development:</b> Developed reusable custom hooks to
            encapsulate business logic and optimize functionality, improving
            code maintainability and redundancy.
          </>,
          <>
            <b>Performance Optimization:</b> Implemented techniques like code
            splitting and lazy loading to enhance application performance,
            resulting in faster load times and smoother user interactions.
          </>,
          <>
            <b>Version Control & Collaboration:</b> Proficient in using Git for
            version control, managing code repositories, and handling branching
            strategies to facilitate smooth team collaboration and efficient
            feature development.
          </>,
          <>
            <b>AI Enabled:</b> I leveraged GitHub Copilot AI to assist in
            developing websites using React. By utilizing its powerful
            code-suggestion capabilities, I was able to streamline the
            development process, increase efficiency, and focus more on
            optimizing user interfaces. Copilot AI helped accelerate coding
            tasks such as creating reusable components, handling state
            management, and integrating APIs, significantly improving overall
            project turnaround.
          </>,
          <h1>Figma Experience</h1>,
          <>
            <b>UI/UX Collaboration:</b> Over a year of experience using Figma to
            design wireframes, interactive prototypes, and optimize user
            interfaces for enhanced UX.
          </>,
          <>
            <b>Design Prototyping & Workflow Optimization:</b> Developed a range
            of interactive prototypes to streamline communication between
            designers and developers, ensuring seamless design-to-code handoffs.
          </>,
          <>
            <b>Component Libraries & Design Systems:</b> Worked on Figma-based
            design systems to maintain consistency across applications.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          //    {
          //    }
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Pondicherry Engineering College",
        description: <>Studied Electronics and Communication engineering.</>,
      },
      {
        name: "Amalorpavam Higher Secondary School",
        description: <>Studied SSLC and HSC(TamilNadu Board Education).</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React JS",
        description: <>Building next gen apps with ReactJS.</>,
        images: [
          {
            src: "/images/projects/project-01/React.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Figma",
        description: <>Able to Design Wireframe and prototype in Figma.</>,
        images: [
          {
            src: "/images/projects/project-01/Figma.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about Tech and Design...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
