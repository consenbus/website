import React from "react";
import DocsLayout from "../../components/DocsLayout";
import styles from "../../styles/markdown";
import { withStyles } from "material-ui/styles";

class Docs extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <DocsLayout active="docs">
        <div className={classes.root}>
          <h1 className={classes.title}>Get started</h1>
          <div className={classes.content}>
            <p>ConsenBus is a blazing-fast blockchain platform for IoT.</p>

            <p>
              For more detailed step-by-step instructions on getting started,
              see the tutorial.
            </p>
          </div>
        </div>
      </DocsLayout>
    );
  }
}

export default withStyles(styles)(Docs);
