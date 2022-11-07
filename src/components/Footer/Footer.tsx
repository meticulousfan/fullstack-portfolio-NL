import { Container } from "./styles";

// import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
// import instagramIcon from "../../assets/instagram.png";
// import discordIcon from "../../assets/discord.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Lasse</span>
        <span>Wang</span>
      </a>
      <div>
        <p>
          This site is made by <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        {/* <a
          href="https://www.linkedin.com/in/elijahthomas5515/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a> */}

        <a
          href="https://github.com/meticulousfan"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        {/* <a
          href="https://discord.com/users/426120432991862784"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a> */}
      </div>
    </Container>
  );
}
