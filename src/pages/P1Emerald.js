import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { findByLabelText } from "@testing-library/react";
import { LEFT } from "react-swipeable";
import { ThemeProvider } from "@material-ui/core";
import MediaQuery from "react-responsive";


const styleCss = makeStyles((theme) =>({
  root: {
    width : "100%",
    height : "100%",
    backgroundColor : "#378ab5",
    color : "white",
    padding : theme.spacing(3),
  },
  stage: {
    backgroundColor : "#6d30ca",
    width : "100%",
  },
  pccharastage: {
    width : "100%",
    display : "flex", //画面のサイズに合わせて横に置くか下に置くか
  },
  pcstage: {
    width : "50%"
  },
  pcchara: {
    width : "50%"
  },
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
            <MediaQuery query="(max-width: 767px)">
              <div>ここにスマートフォン向けの要素を書く</div>
              <div className={classes.pccharastage}>
                <div>
                <img src="/img/pages/Emerald/emestage.jpg" width="100%"/>
                </div>
                <div>
                <p>・ミッド</p>
                <img src="/img/chara/penpen.png" width="30"/>
                <p>・サイド</p>
                <p>※最適コンビは以下の通り</p>
                </div>
              </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 768px)">
              <div className={classes.pccharastage}>
                <div className={classes.pcstage}>
                  <img src="/img/pages/Emerald/emestage.jpg" width="50%"/>
                </div>
                <div className={classes.pcchara}>
                  <p>・ミッド</p>
                  <img src="/img/chara/penpen.png" width="30"/>
                  <p>・サイド</p>
                  <p>※最適コンビは以下の通りaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
              </div>
            </MediaQuery>
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
