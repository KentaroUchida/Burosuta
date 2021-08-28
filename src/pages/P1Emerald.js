import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { red } from "@material-ui/core/colors";

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

export default function P1Emerald() {
  return (
    <Page/>
  )
};
