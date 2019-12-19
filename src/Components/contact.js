import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Paul</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "60%", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Arial" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (123-456-7890)
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Arial" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    MySkypeId
                  </ListItemContent>{" "}
                </ListItem>


                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Arial" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    (243-456-7908)
                  </ListItemContent>{" "}
                </ListItem>


                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Arial" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                        someone@exapmle.com
                  </ListItemContent>{" "}
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
