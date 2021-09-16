import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { findByLabelText } from "@testing-library/react";
import { LEFT } from "react-swipeable";
import { ThemeProvider, Typography } from "@material-ui/core";
import { ResponsiveFontProvider } from '../components/ResponsiveFontProvider';
import MediaQuery from "react-responsive";
import ReactDOM from "react-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";


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
    alignItems : "center",
    justifyContent : "center",
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
    width : "45%",
  },
  right: {
    paddingLeft : "5%",
    width : "75%",
  },
  pcmidside :{
    background: "linear-gradient(transparent 70%, #1f4e66 70%)",
    textAlign : "center",
    fontWeight : "600",
    marginRight : "85%",
  },
  smmidside: {
    background: "linear-gradient(transparent 70%, #1f4e66 70%)",
    textAlign : "center",
    fontWeight : "600",
    marginRight : "75%",
  },
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
                <li><AnchorLink href="#stage1" offset="75">ごつごつ坑道</AnchorLink></li>
                <li><AnchorLink href="#stage2" offset="75">アンダーマイン</AnchorLink></li>
            </div>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage1" className={classes.stagetitle2}><img src="/img/pages/Emerald/check.png" width="20"/>ごつごつ坑道</p>
              <p>中央は開けているがサイドには壁があり、ブッシュも豊富なので割とあらゆるキャラが使用可能。</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/ごつごつ坑道.jpg" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  <img src="/img/chara/ジーン.png" width="15%"/>
                  <img src="/img/chara/エリザベス.png" width="15%"/>
                  <img src="/img/chara/8bit.png" width="15%"/>
                  <img src="/img/chara/ジェシー.png" width="15%"/>
                  <p className={classes.smmidside}>サイド</p>
                  <img src="/img/chara/ローサ.png" width="15%"/>
                  <img src="/img/chara/モーティス.png" width="15%"/>
                  <img src="/img/chara/リコ.png" width="15%"/>
                  <img src="/img/chara/サンディ.png" width="15%"/>
                  <img src="/img/chara/タラ.png" width="15%"/>
                  <img src="/img/chara/ストゥー.png" width="15%"/>
                  <p>※最適コンビは以下の通り</p>
                  <img src="/img/chara/ジーン.png" width="15%"/>
                  <img src="/img/chara/サンディ.png" width="15%"/>
                  <img src="/img/chara/タラ.png" width="15%"/>
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <MediaQuery query="(min-width: 601px)">
            <Grid>
              <Grid className={classes.pccharastage}>
                <Grid className={classes.left}>
                  <img src="/img/pages/Emerald/stage/ごつごつ坑道.jpg" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.pcmidside}>ミッド</p>
                  <img src="/img/chara/ジーン.png" width="12%"/>
                  <img src="/img/chara/エリザベス.png" width="12%"/>
                  <img src="/img/chara/8bit.png" width="12%"/>
                  <img src="/img/chara/ジェシー.png" width="12%"/>
                  <p className={classes.pcmidside}>サイド</p>
                  <img src="/img/chara/ローサ.png" width="12%"/>
                  <img src="/img/chara/モーティス.png" width="12%"/>
                  <img src="/img/chara/リコ.png" width="12%"/>
                  <img src="/img/chara/サンディ.png" width="12%"/>
                  <img src="/img/chara/タラ.png" width="12%"/>
                  <img src="/img/chara/ストゥー.png" width="12%"/>
                  <p>※最適コンビは以下の通り</p>
                  <img src="/img/chara/ジーン.png" width="12%"/>
                  <img src="/img/chara/サンディ.png" width="12%"/>
                  <img src="/img/chara/タラ.png" width="12%"/>
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>ジーンに対してはベルやジェシーなどが強い。</p>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage2" className={classes.stagetitle2}><img src="/img/pages/Emerald/check.png" width="20"/>アンダーマイン</p>
              <p>押し込まれると負ける。チームで協力して殲滅しよう。</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/アンダーマイン.png" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  <img src="/img/chara/ジーン.png" width="15%"/>
                  <img src="/img/chara/ジェシー.png" width="15%"/>
                  <img src="/img/chara/ベル.png" width="15%"/>
                  <p className={classes.smmidside}>サイド</p>
                  <img src="/img/chara/モーティス.png" width="15%"/>
                  <img src="/img/chara/リコ.png" width="15%"/>
                  <img src="/img/chara/サンディ.png" width="15%"/>
                  <img src="/img/chara/タラ.png" width="15%"/>
                  <img src="/img/chara/ストゥー.png" width="15%"/>
                  <img src="/img/chara/Emz.png" width="15%"/>
                  <img src="/img/chara/ペニー.png" width="15%"/>
                  <p>※最適コンビは以下の通り</p>
                  分かりません。
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <MediaQuery query="(min-width: 601px)">
            <Grid>
              <Grid className={classes.pccharastage}>
                <Grid className={classes.left}>
                  <img src="/img/pages/Emerald/stage/アンダーマイン.png" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  <img src="/img/chara/ジーン.png" width="12%"/>
                  <img src="/img/chara/ジェシー.png" width="12%"/>
                  <img src="/img/chara/ベル.png" width="12%"/>
                  <p className={classes.smmidside}>サイド</p>
                  <img src="/img/chara/モーティス.png" width="12%"/>
                  <img src="/img/chara/リコ.png" width="12%"/>
                  <img src="/img/chara/サンディ.png" width="12%"/>
                  <img src="/img/chara/タラ.png" width="12%"/>
                  <img src="/img/chara/ストゥー.png" width="12%"/>
                  <img src="/img/chara/Emz.png" width="12%"/>
                  <img src="/img/chara/ペニー.png" width="12%"/>
                  <p>※最適コンビは以下の通り</p>
                  分かりません。
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p></p>
          </section>



          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

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
