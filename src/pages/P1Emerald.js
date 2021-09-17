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
                <img src="/img/pages/Emerald/eme1.png" alt="" width="30"/>
              </Grid>
              <Grid item>
                <ResponsiveFontProvider>
                  <Typography variant="h5" className={classes.title}>エメラルドハント</Typography>
                </ResponsiveFontProvider>
              </Grid>
              <Grid item>
                <img src="/img/pages/Emerald/eme1.png" alt="" width="30"/>
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
                <li><AnchorLink href="#stage2" offset="75">クリスタルアーケード</AnchorLink></li>
                <li><AnchorLink href="#stage3" offset="75">サボテンの罠</AnchorLink></li>
                <li><AnchorLink href="#stage4" offset="75">エメラルドの要塞</AnchorLink></li>
                <li><AnchorLink href="#stage5" offset="75">アンダーマイン</AnchorLink></li>
                <li><AnchorLink href="#stage6" offset="75">ディープダイナー</AnchorLink></li>
                <li><AnchorLink href="#stage7" offset="75">沈んだ鉱山</AnchorLink></li>
                <li><AnchorLink href="#stage8" offset="75">ダイヤモンドダスト</AnchorLink></li>
                <li><AnchorLink href="#stage9" offset="75">四畳半</AnchorLink></li>
                <li><AnchorLink href="#stage10" offset="75">ダブルレール</AnchorLink></li>
                <li><AnchorLink href="#stage11" offset="75">トロッコの狂気</AnchorLink></li>
                <li><AnchorLink href="#stage12" offset="75">鋭いアングル</AnchorLink></li>
                <li><AnchorLink href="#stage13" offset="75">寂れたアーケード</AnchorLink></li>
                <li><AnchorLink href="#stage14" offset="75">綿菓子パラダイス</AnchorLink></li>
            </div>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage1" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                ごつごつ坑道
              </p>
              <p>中央は開けているがサイドには壁があり、ブッシュも豊富なので割とあらゆるキャラが使用可能。</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/ごつごつ坑道.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  <img src="/img/chara/ジーン.png" alt="" width="15%"/>
                  <img src="/img/chara/エリザベス.png" alt="" width="15%"/>
                  <img src="/img/chara/8bit.png" alt="" width="15%"/>
                  <img src="/img/chara/ジェシー.png" alt="" width="15%"/>
                  <p className={classes.smmidside}>サイド</p>
                  <img src="/img/chara/ローサ.png" alt="" width="15%"/>
                  <img src="/img/chara/モーティス.png" alt="" width="15%"/>
                  <img src="/img/chara/リコ.png" alt="" width="15%"/>
                  <img src="/img/chara/サンディ.png" alt="" width="15%"/>
                  <img src="/img/chara/タラ.png" alt="" width="15%"/>
                  <img src="/img/chara/ストゥー.png" alt="" width="15%"/>
                  <p>※最適コンビは以下の通り</p>
                  <img src="/img/chara/ジーン.png" alt="" width="15%"/>
                  <img src="/img/chara/サンディ.png" alt="" width="15%"/>
                  <img src="/img/chara/タラ.png" alt="" width="15%"/>
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <MediaQuery query="(min-width: 601px)">
            <Grid>
              <Grid className={classes.pccharastage}>
                <Grid className={classes.left}>
                  <img src="/img/pages/Emerald/stage/ごつごつ坑道.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.pcmidside}>ミッド</p>
                  <img src="/img/chara/ジーン.png" alt="" width="12%"/>
                  <img src="/img/chara/エリザベス.png" alt="" width="12%"/>
                  <img src="/img/chara/8bit.png" alt="" width="12%"/>
                  <img src="/img/chara/ジェシー.png" alt="" width="12%"/>
                  <p className={classes.pcmidside}>サイド</p>
                  <img src="/img/chara/ローサ.png" alt="" width="12%"/>
                  <img src="/img/chara/モーティス.png" alt="" width="12%"/>
                  <img src="/img/chara/リコ.png" alt="" width="12%"/>
                  <img src="/img/chara/サンディ.png" alt="" width="12%"/>
                  <img src="/img/chara/タラ.png" alt="" width="12%"/>
                  <img src="/img/chara/ストゥー.png" alt="" width="12%"/>
                  <p>※最適コンビは以下の通り</p>
                  <img src="/img/chara/ジーン.png" alt="" width="12%"/>
                  <img src="/img/chara/サンディ.png" alt="" width="12%"/>
                  <img src="/img/chara/タラ.png" alt="" width="12%"/>
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>ジーンに対してはベルやジェシーなどが強い。</p>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage2" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                クリスタルアーケード
              </p>
              <p>開発中</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/クリスタルアーケード.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
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
                  <img src="/img/pages/Emerald/stage/クリスタルアーケード.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>開発中</p>
          </section>

          <br></br>
          
          <section>
            <div>
              <p id="stage3" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                サボテンの罠
              </p>
              <p>開発中</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/サボテンの罠.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
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
                  <img src="/img/pages/Emerald/stage/サボテンの罠.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>開発中</p>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage4" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                エメラルドの要塞
              </p>
              <p>開発中</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/エメラルドの要塞.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
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
                  <img src="/img/pages/Emerald/stage/エメラルドの要塞.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>開発中</p>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage5" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                アンダーマイン
              </p>
              <p>押し込まれると負ける。チームで協力して殲滅しよう。</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/アンダーマイン.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  <img src="/img/chara/ジーン.png" alt="" width="15%"/>
                  <img src="/img/chara/ジェシー.png" alt="" width="15%"/>
                  <img src="/img/chara/ベル.png" alt="" width="15%"/>
                  <p className={classes.smmidside}>サイド</p>
                  <img src="/img/chara/モーティス.png" alt="" width="15%"/>
                  <img src="/img/chara/リコ.png" alt="" width="15%"/>
                  <img src="/img/chara/サンディ.png" alt="" width="15%"/>
                  <img src="/img/chara/タラ.png" alt="" width="15%"/>
                  <img src="/img/chara/ストゥー.png" alt="" width="15%"/>
                  <img src="/img/chara/Emz.png" alt="" width="15%"/>
                  <img src="/img/chara/ペニー.png" alt="" width="15%"/>
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
                  <img src="/img/pages/Emerald/stage/アンダーマイン.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  <img src="/img/chara/ジーン.png" alt="" width="12%"/>
                  <img src="/img/chara/ジェシー.png" alt="" width="12%"/>
                  <img src="/img/chara/ベル.png" alt="" width="12%"/>
                  <p className={classes.smmidside}>サイド</p>
                  <img src="/img/chara/モーティス.png" alt="" width="12%"/>
                  <img src="/img/chara/リコ.png" alt="" width="12%"/>
                  <img src="/img/chara/サンディ.png" alt="" width="12%"/>
                  <img src="/img/chara/タラ.png" alt="" width="12%"/>
                  <img src="/img/chara/ストゥー.png" alt="" width="12%"/>
                  <img src="/img/chara/Emz.png" alt="" width="12%"/>
                  <img src="/img/chara/ペニー.png" alt="" width="12%"/>
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>開発中</p>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage6" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                ディープダイナー
              </p>
              <p>開発中</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/ディープダイナー.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
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
                  <img src="/img/pages/Emerald/stage/ディープダイナー.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>開発中</p>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage7" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                沈んだ鉱山
              </p>
              <p>開発中</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/沈んだ鉱山.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
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
                  <img src="/img/pages/Emerald/stage/沈んだ鉱山.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>開発中</p>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage8" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                ダイヤモンドダスト
              </p>
              <p>開発中</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/ダイヤモンドダスト.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
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
                  <img src="/img/pages/Emerald/stage/ダイヤモンドダスト.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>開発中</p>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage9" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                四畳半
              </p>
              <p>開発中</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/四畳半.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
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
                  <img src="/img/pages/Emerald/stage/四畳半.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>開発中</p>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage10" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                ダブルレール
              </p>
              <p>開発中</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/ダブルレール.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
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
                  <img src="/img/pages/Emerald/stage/ダブルレール.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>開発中</p>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage11" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                トロッコの狂気
              </p>
              <p>開発中</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/トロッコの狂気.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
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
                  <img src="/img/pages/Emerald/stage/トロッコの狂気.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>開発中</p>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage12" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                鋭いアングル
              </p>
              <p>開発中</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/鋭いアングル.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
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
                  <img src="/img/pages/Emerald/stage/鋭いアングル.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>開発中</p>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage13" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                寂れたアーケード
              </p>
              <p>開発中</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/寂れたアーケード.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
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
                  <img src="/img/pages/Emerald/stage/寂れたアーケード.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>開発中</p>
          </section>

          <br></br>

          <section>
            <div>
              <p id="stage14" className={classes.stagetitle2}>
                <img src="/img/pages/check.png" alt="" width="20"/>
                綿菓子パラダイス
              </p>
              <p>開発中</p>
            </div>
          <MediaQuery query="(max-width: 600px)">
            <Grid>
              <Grid >
                <Grid className={classes.center}>
                  <img src="/img/pages/Emerald/stage/綿菓子パラダイス.png" alt="" width="80%"/>
                </Grid>
                <Grid >
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
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
                  <img src="/img/pages/Emerald/stage/綿菓子パラダイス.png" alt="" width="100%"/>
                </Grid>
                <Grid className={classes.right}>
                  <p className={classes.smmidside}>ミッド</p>
                  開発中
                  <p className={classes.smmidside}>サイド</p>
                  開発中
                  <p>※最適コンビは以下の通り</p>
                  開発中
                </Grid>
              </Grid>
            </Grid>
          </MediaQuery>
          <p>開発中</p>
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
      </div>

    );
}

export default function P1Emerald() {
  return (
    <Page/>
  )
};
