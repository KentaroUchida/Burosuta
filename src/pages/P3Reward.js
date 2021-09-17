import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import { ResponsiveFontProvider } from '../components/ResponsiveFontProvider';
import MediaQuery from "react-responsive";
import AnchorLink from "react-anchor-link-smooth-scroll";

const styleCss = makeStyles((theme) =>({
  root: {
    height : "100%",
    backgroundColor : "#4dabe9",
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
    color:"white",
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
    marginRight : "82%",
  },
  smmidside: {
    background: "linear-gradient(transparent 70%, #1f4e66 70%)",
    textAlign : "center",
    fontWeight : "600",
    marginRight : "75%",
  },
  white : {
    coler : "white",
  },
}));


function Page() {
    const classes = styleCss();
    return (
      <div className={classes.root}>
        <header></header>
        <main>

          <div>
            <Grid className={classes.center}>
              <Grid item>
                <img src="/img/pages/Reward/reward.png" alt="" width="30"/>
              </Grid>
              <Grid item>
                <ResponsiveFontProvider>
                  <Typography variant="h5" className={classes.title}>賞金稼ぎ</Typography>
                </ResponsiveFontProvider>
              </Grid>
              <Grid item>
                <img src="/img/pages/Reward/reward.png" alt="" width="30"/>
              </Grid>
            </Grid> 
          </div>

          <section>
          <br></br>
            <div>
            <p className={classes.stagetitle}>ステージ一覧</p>
            </div>
            <div className={classes.stage}>
                <li><AnchorLink href="#stage1" offset="75">ミルフィーユ</AnchorLink></li>
            </div>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage1" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                ミルフィーユ
              </p>
              <p>壁が入り組んでおり遠距離や投げがよく使われる。また、それらのカウンターもよく使われる。</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Soccer/stage/ミルフィーユ.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  <img src="/img/chara/ティック.png" alt="" width="15%"/>
                  <p className={classes.smmidside}>サイド</p>
                  <img src="/img/chara/ブロック.png" alt="" width="15%"/>
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <MediaQuery query="(min-width: 601px)">
            <Grid>
              <Grid className={classes.pccharastage}>
                <Grid className={classes.left}>
                  <img src="/img/pages/Soccer/stage/センターフィールド.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.pcmidside}>ミッド</p>
                  <img src="/img/chara/ティック.png" alt="" width="12%"/>
                  <p className={classes.pcmidside}>サイド</p>
                  <img src="/img/chara/ブロック.png" alt="" width="12%"/>
                  <p>※最適コンビは以下の通り</p>
                  開発中
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
          <br></br>

        </main>
        <footer></footer>
      </div>
    );
}

export default function P3Reward() {
  return (
    <Page/>
  )
};
