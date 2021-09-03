import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { findByLabelText } from "@testing-library/react";
import { LEFT } from "react-swipeable";
import { ThemeProvider } from "@material-ui/core";

const styleCss = makeStyles((theme) =>({
  root: {
    width : "100%",
    height : "",
    backgroundColor : "#378ab5",
    color : "white",
    padding : theme.spacing(8),
  },
  stage: {
    backgroundColor : "#6d30ca",
    width : "50%",
  },
  chara: {
    display : "flex",
  }
}));

function Page() {
    const classes = styleCss();
    return (
     
      <body className={classes.root}>
        <header></header>
        <main>

          <div>
            <h2>エメラルドハント<img src="/img/pages/Emerald/eme1.png" width="30"/></h2>
            </div>
            <section>
              <div>
              <p>ステージ一覧</p>
              </div>
              <div className={classes.stage}>
              <p>・ごつごつ街道・ごつごつ街道・ごつごつ街道・ごつごつ街道<br></br>
              ・ごつごつ街道・ごつごつ街道・ごつごつ街道・ごつごつ街道<br></br>
              ・ごつごつ街道・ごつごつ街道・ごつごつ街道・ごつごつ街道</p>
              </div>
            </section>
            <section>
              <div>
            <p><img src="/img/pages/Emerald/check.png" width="20"/>ごつごつ街道</p>
            <p>aaaaaaa</p></div>
            <div className={classes.chara}>
              <div>
              <img src="/img/pages/Emerald/emestage.jpg" width="200"/>
              </div>
              <div>
              <p>・ミッド</p>
              <p>・サイド</p>
              <p>※最適コンビは以下の通り</p>
              </div>
            </div>
            <div>
              <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb<br></br>
              cccccccccccccccccccccccccccccccccccccccccccccccccccc</p>
            </div>
            </section>
          <div><img src="/img/pages/Emerald/hako.png" width="100"/></div>
        </main>
        <footer></footer>
      </body>

    );
}

export default function P1Emerald() {
  return (
    <Page/>
  )
};
