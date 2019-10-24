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

          <div style={{ width: "60%", display: "inline-block" }}>
            <blockquote cite="http://www.dbarone.com/">
              <p>
                <ul>
                  <li>I'm a translator. Translating data into insights.</li>

                  <li>I'm an artist. Painting by numbers. Business numbers.</li>

                  <li>I'm a data smith. Forging the figures every day.</li>

                  <li>
                    Accountants like me because I compliment them on their Excel
                    skills.
                  </li>

                  <li>
                    I love working with complex organisations as it's easy to
                    look good when everyone else is using German ERP software.
                  </li>

                  <li>Big Data. what is it? I dunno.</li>

                  <li>But above all - I'm a human.</li>
                </ul>
              </p>
              <cite>
                <a href="http://www.dbarone.com">BI Guy</a>
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
