import React from "react";
import "./App.css";
import { Layout, Navigation, Drawer, Header, Content } from "react-mdl";
import Main from "./Components/main";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}}to="/">My Portfolio</Link>} scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About Me</Link>
              <Link to="/contact">contact</Link>
              <Link to="/projects">projects</Link>
            </Navigation>
          </Header>
          <Drawer  title={<Link style={{textDecoration:'none', color:'black'}}to="/">My Portfolio</Link>} >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About Me</Link>
              <Link to="/contact">contact</Link>
              <Link to="/projects">projects</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
