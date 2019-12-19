import React from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends React.Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://www.shareicon.net/data/128x128/2015/09/18/103160_man_512x512.png"
                        alt="avatar"
                        className="avatar-image"/>
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr/>
                            <p>HTML/CSS | BootStrap | Javascript | React | React Native | Node JS | Express | MongoDB</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>
                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>
                                {/* Freecodecamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp"  aria-hidden="true"/>
                                </a>
                                {/* Youtube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square"  aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;