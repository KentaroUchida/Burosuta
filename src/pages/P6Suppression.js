import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styleCss = makeStyles({
  root: {
    width : "100%",
    height : "",
    color : "red",
  },
  a: {
    
  }
})

function Page() {
    const classes = styleCss();
    return (
      <div className={classes.root}>
        fuchi
      </div>
    );
}

export default function P6Suppression() {
  return (
    <Page/>
  )
};
