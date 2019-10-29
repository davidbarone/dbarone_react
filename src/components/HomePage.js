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
        <div>
          <div
            style={{
              display: "inline-block",
              width: "40%",
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
              width: "60%",
              display: "inline-block",
              fontSize: "x-large"
            }}
          >
            <blockquote cite="http://www.dbarone.com/">
              <p>
                People always ask me 'How have you made the Business
                Intelligence community a better place?'. I tell them 'I'm good
                with colors. I use a lot of them in my charts. Accountants like
                me because I compliment them on their Excel skills. I love
                working with complex organisations as it's easy to look good
                when everyone else is using German ERP software. If you talk
                about Big Data, I'll smile at you like I understand what you're
                talking about, but above all, I've put the humanity back into
                BI.
              </p>
              <cite>
                <a href="http://www.dbarone.com">
                  David Barone (Job interview in 2003).
                </a>
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
