import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = props => {
  return (
    <>
      <section
        style={{
          padding: "80px"
        }}
      >
        <div style={{ margin: "auto", width: "1280px" }}>
          <div
            style={{
              display: "inline-block",
              width: "400px",
              textAlign: "center"
            }}
          >
            <img
              style={{ borderRadius: "150px" }}
              src="http://placebeard.it/300/300"
              alt="Description"
            ></img>
          </div>

          <div
            style={{
              width: "880px",
              display: "inline-block",
              fontSize: "x-large"
            }}
          >
            <blockquote cite="https://www.dbarone.com/">
              <p>
                People always ask me 'How have you made the Business
                Intelligence community a better place?'. I tell them 'I'm good
                with colors. I use a lot of them in my charts. Accountants like
                me because I compliment them on their Excel skills. I love
                working with complex organisations because German ERP software
                brings the best out in me. If you talk about Big Data, I'll
                smile at you like I pretend to know what you're talking about,
                but above all, I've put the humanity (and sexuality) back into
                BI.
              </p>
              <cite>
                <a href="https://www.dbarone.com">David Barone</a>
              </cite>
            </blockquote>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            title="Linkedin"
            href="https://www.linkedin.com/in/david-barone-083aa05b/"
          >
            <FontAwesomeIcon
              style={{ fontSize: 40, margin: "10px" }}
              icon={["fab", "linkedin"]}
            />
          </a>

          <a title="Github" href="https://github.com/davidbarone">
            <FontAwesomeIcon
              style={{ fontSize: 40, margin: "10px" }}
              icon={["fab", "github"]}
            />
          </a>

          <a title="Mail" href="mailto:davidbarone@live.com">
            <FontAwesomeIcon
              style={{ fontSize: 40, margin: "10px" }}
              icon="envelope-square"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
