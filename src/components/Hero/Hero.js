import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Paragraph } from "./HeroStyles";

const Hero = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi there, I'm Jigar Sutariya, a full stack developer based in Surat,
          Gujarat, India. I specialize in developing scalable, reliable, and
          efficient web applications using a variety of technologies, including
          React.js, Next.js, Node.js, MongoDB, Express.
        </SectionText>
        <SectionText>
          I have 1 year of experience developing web applications and have
          worked on projects ranging from simple landing pages to complex
          enterprise applications. My expertise includes building APIs,
          integrating with third-party services, and creating intuitive user
          interfaces that prioritize user experience.
        </SectionText>
        <SectionText>
          My approach to development is centered around creating modular and
          reusable code that can be easily maintained and scaled. I'm a big
          believer in clean code and testing, and I'm always looking for ways to
          improve my development process and deliver high-quality code that
          exceeds my clients' expectations.
        </SectionText>
        <SectionText>
          Please feel free to explore my portfolio and reach out to me if you
          have any questions or are interested in working together. Thank you
          for taking the time to visit my website!
        </SectionText>
        <Button onClick={() => (window.location = `https://google.com`)}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
