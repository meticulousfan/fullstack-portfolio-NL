import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Work Experiences</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/magnetoasher"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>Full Stack Engineer</h3>
              <ul>
                <li>
                  Architected and implemented the analytic system to display
                  data extracted from an AI engine using React, TypeScript and
                  D3.js
                </li>
                <li>
                  Established user-friendly optimized check-out page, resulting
                  in a 20% increase in user clicks and 30% in customer purchases
                  (React / NextJS)
                </li>
                <li>
                  Built microservice backend application with NestJS, TypeORM
                  and PostgreSQL.
                </li>
                <li>
                  Built the UI of the market place while collaborating with
                  smart contract engineers (React / TypeScript / MUI).
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node</li>
                <li>React</li>
                <li>Vue</li>
                <li>Express</li>
                <li>MySql</li>
                <li>Ejs</li>
                <li>GraphQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/joaotuliojt/github-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://github-search-blond.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>Full Stack Developer</h3>
              <ul>
                <li>
                  Developed PWA with Vue, JavaScript for healthcare & fitness
                  application
                </li>
                <li>
                  Orchestrated deployment of web applications using Docker,
                  Kubernetes and AWS
                </li>
                <li>
                  Optimized SEO in React app for e-commerce site leading to 25%
                  increase in page views per session via SSR in Next.js and
                  Gatsby
                </li>
                <li>
                  Constructed a one-to-one live video shopping platform
                  utilizing Vue, Nuxt.js, TypeScript and GraphQL
                </li>
                <li>
                  Maintained backend codebase with Express, MySQL and
                  collaborated with product team to realize promised features
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>AWS</li>
                <li>Vue</li>
                <li>Typescript</li>
                <li>Styled Components</li>
                <li>GraphQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://joaotuliojt.github.io/sunnyside-agency/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>Web Developer</h3>
              <ul>
                <li>
                  Restructured APIs to boost trend prediction accuracy by 70%
                </li>
                <li>
                  Involved in a real estate project that gives customers the
                  ability to find perfect apartments
                </li>
                <li>
                  Successfully implemented the UI and related tests of a
                  company's ERP system (React / Cypress)
                </li>
                <li>
                  Built an application to browse and watch videos using Next.js
                  and streaming technology
                </li>
                <li>
                  Participated in the initial wave of developers learning and
                  utilizing React and Vue
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>NextJs</li>
                <li>TypeScript</li>
                <li>SSR</li>
                <li>GraphQL</li>
                <li>Vue/Quasar</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/joaotuliojt/dtmoney-trilha-reactjs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>NodeJs Backend Developer</h3>
              <ul>
                <li>
                  Designed, implemented and integrated GraphQL APIs using
                  Apollo, Nest.js, TypeORM, PostgreSQL
                </li>
                <li>Participated in code review and team design sessions</li>
                <li>
                  Contributed ideas and suggestions in team meetings and
                  delivered updates on deadlines, designs and enhancements,
                </li>
                <li>
                  Implemented work studio platform and OKR dashboard using
                  React, TypeScript, AWS (lambda, API gateway, rest API, S3,
                  Amplify), Node, MongoDB
                </li>
                <li>
                  Monitored and tracked server bugs on AWS CloudWatch and fixed
                  them
                </li>
                <li>Used testing frameworks like Jest/Mocha to test APIs</li>
                <li>Performed migration from MySQL to MongoDB</li>
                <li>
                  Worked on creating different type of indexes based on
                  different collections to get good performance in MongoDB
                </li>
                <li>
                  Containerized all the Ticketing related applications using
                  Docker
                </li>
                <li>
                  Managed Container using Docker by writing Dockerfiles and set
                  up the automated build on Docker HUB and installed and
                  configured kubernets Used infrastructure tools like Terraform
                  and AWS
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Vue</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>Jest/Mocha</li>
                <li>MySQL/MongoDB</li>
                <li>Docker</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/joaotuliojt/dv-musica-library-page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a
                  href="https://joaotuliojt.github.io/dv-musica-library-page/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Music Library</h3>
              <p>
                Uma interface para uma biblioteca de músicas, semelhante ao
                Spotify.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JavaSript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
      </div>
    </Container>
  );
}
