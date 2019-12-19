import React from 'react';
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skill extends React.Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          {/* <p>
            {this.props.startYear}-{this.props.endYear}
          </p> */}
          <div style={{display:'flex'}}>
          {this.props.Skill}
          <ProgressBar
              style={{ margin: "auto", width: "75%" }}
              progress={this.props.progress}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skill;