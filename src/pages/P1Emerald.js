import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { findByLabelText } from "@testing-library/react";
import { LEFT } from "react-swipeable";
import { ThemeProvider, Typography } from "@material-ui/core";
import { ResponsiveFontProvider } from '../components/ResponsiveFontProvider';
import MediaQuery from "react-responsive";


const styleCss = makeStyles((theme) =>({
  root: {
    height : "100%",
    backgroundColor : "#378ab5",
    color : "white",
    paddingTop : "30px",
    paddingLeft : "10%",
    paddingRight : "10%",
  },
  title : {
    fontWeight : "900",
  },
  center: {
    alignItems : "center",
    justifyContent : "center",
    display : "flex",
  },
  stagetitle : {
    fontSize : "1.0rem",
    fontWeight : "800",
  },
  stage: {
    backgroundColor : "#6d30ca",
    width : "100%",
    border : "solid",
  },
  stagetitle2 : {
    fontSize : "1.0rem",
    fontWeight : "700",
    textAlign : "center",
    display : "flex",
  },
  pccharastage: {
    display : "flex", //画面のサイズに合わせて横に置くか下に置くか
  },
  pcstage: {
    width : "50%"
  },
  pcchara: {
    width : "50%",
    textAlign : "start",
  },
  left:{
    paddingLeft : "5%",
    width : "35%",
  },
  right: {
    paddingLeft : "5%",
    width : "75%",
  }
}));

function Page() {
    const classes = styleCss();
    return (
     
      <body className={classes.root}>
        <header></header>
        <main>

          <div>
            <Grid className={classes.center}>
              <Grid item>
                <img src="/img/pages/Emerald/eme1.png" width="30"/>
              </Grid>
              <Grid item>
                <ResponsiveFontProvider>
                  <Typography variant="h5" className={classes.title}>エメラルドハント</Typography>
                </ResponsiveFontProvider>
              </Grid>
              <Grid item>
                <img src="/img/pages/Emerald/eme1.png" width="30"/>
              </Grid>
            </Grid>
            
            </div>
            <section>
            <br></br>
              <div>
              <p className={classes.stagetitle}>ステージ一覧</p>
              </div>
              <div className={classes.stage}>
              <p>・ごつごつ坑道・ごつごつ坑道・ごつごつ坑道・ごつごつ坑道<br></br>
              ・ごつごつ坑道・ごつごつ坑道・ごつごつ坑道・ごつごつ坑道<br></br>
              ・ごつごつ坑道・ごつごつ坑道・ごつごつ坑道・ごつごつ坑道</p>
              </div>
            </section>
            <section>
              <div>
              <br></br>
              <p className={classes.stagetitle2}><img src="/img/pages/Emerald/check.png" width="20"/>ごつごつ坑道</p>
              <p>中央は開けているがサイドには壁があり、ブッシュも豊富なので割とあらゆるキャラが使用可能。</p>
            </div>
            <MediaQuery query="(max-width: 767px)">
              <div>ここにスマートフォン向けの要素を書く</div>
              <div className={classes.pccharastage}>
                <div className={classes.left}>
                <img src="/img/pages/Emerald/emestage.jpg" width="100%"/>
                </div>
                <div width="150%">
                <p>・ミッド</p>
                <img src="/img/chara/penpen.png" width="30"/>
                <p>・サイド</p>
                <p>※最適コンビは以下の通り</p>
                </div>
              </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 768px)">
              <Grid>
                <Grid className={classes.pccharastage}>
                <Grid className={classes.left}>
                  <img src="/img/pages/Emerald/emestage.jpg" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p>・ミッド</p>
                  <img src="/img/chara/ジーン.png" width="10%"/>
                  <img src="/img/chara/エリザベス.png" width="10%"/>
                  <img src="/img/chara/8bit.png" width="10%"/>
                  <p>・サイド</p>
                  <img src="/img/chara/ローサ.png" width="10%"/>
                  <img src="/img/chara/モーティス.png" width="10%"/>
                  <img src="/img/chara/リコ.png" width="10%"/>
                  <img src="/img/chara/サンディ.png" width="10%"/>
                  <img src="/img/chara/タラ.png" width="10%"/>
                  <img src="/img/chara/ストゥー.png" width="10%"/>
                  <p>※最適コンビは以下の通り</p>
                  <img src="/img/chara/ジーン.png" width="10%"/>
                  <img src="/img/chara/サンディ.png" width="10%"/>
                  <img src="/img/chara/タラ.png" width="10%"/>
                </Grid>
                </Grid>
              </Grid>
              <p>ジーンに対してはベルやジェシーなどが強い。</p>
            </MediaQuery>
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
