import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./experience";
import Skills from "./Skill";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Paul</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            <h5>Address</h5>
            <p>1 Hacker way menlo park, 9405</p>
            <h5>Phone</h5>
            <p>(123-456-7890</p>
            <h5>Email</h5>
            <p>Someone@example.com</p>
            <h5>Web</h5>
            <p>website.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h1>Education</h1>
            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <Education
              startYear={2007}
              endYear={2009}
              schoolName="My 2nd University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
                startYear={2007}
                endYear={2009}
                jobName="My 1st job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  
            />
            <Experience
                startYear={2002}
                endYear={2005}
                jobName="My 1st job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills
                Skill="javascript"
                progress={100}
            />
            <Skills
                Skill="VueJS"
                progress={20}
            />
            <Skills
                Skill="Angular"
                progress={40}
            />
            <Skills
                Skill="ReactJS"
                progress={70}
            />
            <Skills
                Skill="html/css"
                progress={30}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
