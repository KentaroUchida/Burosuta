import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styleCss = makeStyles({
  root: {
    width : "100%",
    height : "",
    color : "red",
  },
})

function Page() {
    const classes = styleCss();
    return (
      <main className={classes.root}>
        fuchi
        <section></section>
      </main>
    );
}

export default function P1Emerald() {
  return (
    <Page/>
  )
};
