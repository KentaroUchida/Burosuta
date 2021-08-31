import React from 'react';
import Typography from '@material-ui/core/Typography';
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
        <Typography>
          fuchi
        </Typography>
        fuchi
      </div>
    );
}

export default function Home() {
  return (
    <Page/>
  )
};