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
    backgroundColor : "#54457F",
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
    textAlign : "center",
    display : "flex",
  },
  stage: {
    backgroundColor : "#DE896B",
    width : "100%",
    border : "solid",
    borderColor : "#fefefe",
    paddingRight : "7%",
    paddingLeft : "7%",
    display : "flex",
    flexWrap : "wrap",
  },
  stagecenter : {
    alignItems : "center",
    display : "flex",
    paddingLeft : "12px",
  },
  stagePaddingLeft:{
    padding : "4px",
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
    background: "linear-gradient(transparent 70%, #9EBD6E 70%)",
    textAlign : "center",
    fontWeight : "550",
    marginRight : "82%",
  },
  smmidside: {
    background: "linear-gradient(transparent 70%, #9EBD6E 70%)",
    textAlign : "center",
    fontWeight : "550",
    marginRight : "75%",
  },
  white : {
    coler : "white",
  },
}));

function Page() {

    const classes = styleCss();

    const Stages = ({stageTitle,tag}) => {
      return(
        <div>
        <MediaQuery query="(max-width: 550px)">
        <Grid className={classes.stagecenter}>
          <img src="/img/pages/skall.png" alt="" width="15"/>
          <Grid className={classes.stagePaddingLeft}>
            <AnchorLink href={tag} offset="75" style={{color:"#fefefe"}}>
              {stageTitle}
            </AnchorLink>
          </Grid>
        </Grid>
        </MediaQuery>
        <MediaQuery query="(min-width: 551px)">
        <Grid className={classes.stagecenter}>
          <img src="/img/pages/skall.png" alt="" width="15"/>
          <Grid className={classes.stagePaddingLeft}>
            <AnchorLink href={tag} offset="85" style={{color:"#fefefe"}}>
              {stageTitle}
            </AnchorLink>
          </Grid>
        </Grid>
        </MediaQuery>
        </div>
      );
    };

    const ASm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/ローサ.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <img src="/img/chara/サンディ.png" alt="" width="15%"/>
          <img src="/img/chara/タラ.png" alt="" width="15%"/>
        </Grid>
      )
    }

    const APc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.pcmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.pcmidside}>サイド</p>
          <img src="/img/chara/ローサ.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <img src="/img/chara/サンディ.png" alt="" width="12%"/>
          <img src="/img/chara/タラ.png" alt="" width="12%"/>
        </Grid>
      )
    }

    const BSm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <img src="/img/chara/サンディ.png" alt="" width="15%"/>
          <img src="/img/chara/タラ.png" alt="" width="15%"/>
        </Grid>
      )
    }

    const BPc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.pcmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.pcmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <img src="/img/chara/サンディ.png" alt="" width="12%"/>
          <img src="/img/chara/タラ.png" alt="" width="12%"/>
        </Grid>
      )
    }

    const CSm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <img src="/img/chara/サンディ.png" alt="" width="15%"/>
          <img src="/img/chara/タラ.png" alt="" width="15%"/>
        </Grid>
      )
    }

    const CPc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.pcmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.pcmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <img src="/img/chara/サンディ.png" alt="" width="12%"/>
          <img src="/img/chara/タラ.png" alt="" width="12%"/>
        </Grid>
      )
    }

    const DSm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <img src="/img/chara/サンディ.png" alt="" width="15%"/>
          <img src="/img/chara/タラ.png" alt="" width="15%"/>
        </Grid>
      )
    }

    const DPc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.pcmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.pcmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <img src="/img/chara/サンディ.png" alt="" width="12%"/>
          <img src="/img/chara/タラ.png" alt="" width="12%"/>
        </Grid>
      )
    }

    const ESm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          開発中
        </Grid>
      )
    }

    const EPc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          開発中
        </Grid>
      )
    }

    const FSm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <img src="/img/chara/サンディ.png" alt="" width="15%"/>
          <img src="/img/chara/タラ.png" alt="" width="15%"/>
        </Grid>
      )
    }

    const FPc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.pcmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.pcmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <img src="/img/chara/サンディ.png" alt="" width="12%"/>
          <img src="/img/chara/タラ.png" alt="" width="12%"/>
        </Grid>
      )
    }

    const GSm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <img src="/img/chara/サンディ.png" alt="" width="15%"/>
          <img src="/img/chara/タラ.png" alt="" width="15%"/>
        </Grid>
      )
    }

    const GPc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.pcmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.pcmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <img src="/img/chara/サンディ.png" alt="" width="12%"/>
          <img src="/img/chara/タラ.png" alt="" width="12%"/>
        </Grid>
      )
    }

    const HSm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <img src="/img/chara/サンディ.png" alt="" width="15%"/>
          <img src="/img/chara/タラ.png" alt="" width="15%"/>
        </Grid>
      )
    }

    const HPc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.pcmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.pcmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <img src="/img/chara/サンディ.png" alt="" width="12%"/>
          <img src="/img/chara/タラ.png" alt="" width="12%"/>
        </Grid>
      )
    }

    const ISm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <img src="/img/chara/サンディ.png" alt="" width="15%"/>
          <img src="/img/chara/タラ.png" alt="" width="15%"/>
        </Grid>
      )
    }

    const IPc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.pcmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.pcmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <img src="/img/chara/サンディ.png" alt="" width="12%"/>
          <img src="/img/chara/タラ.png" alt="" width="12%"/>
        </Grid>
      )
    }

    const JSm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <img src="/img/chara/サンディ.png" alt="" width="15%"/>
          <img src="/img/chara/タラ.png" alt="" width="15%"/>
        </Grid>
      )
    }

    const JPc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.pcmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.pcmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <img src="/img/chara/サンディ.png" alt="" width="12%"/>
          <img src="/img/chara/タラ.png" alt="" width="12%"/>
        </Grid>
      )
    }

    const KSm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <img src="/img/chara/サンディ.png" alt="" width="15%"/>
          <img src="/img/chara/タラ.png" alt="" width="15%"/>
        </Grid>
      )
    }

    const KPc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.pcmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.pcmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <img src="/img/chara/サンディ.png" alt="" width="12%"/>
          <img src="/img/chara/タラ.png" alt="" width="12%"/>
        </Grid>
      )
    }

    const LSm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <img src="/img/chara/サンディ.png" alt="" width="15%"/>
          <img src="/img/chara/タラ.png" alt="" width="15%"/>
        </Grid>
      )
    }

    const LPc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.pcmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.pcmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <img src="/img/chara/サンディ.png" alt="" width="12%"/>
          <img src="/img/chara/タラ.png" alt="" width="12%"/>
        </Grid>
      )
    }

    const MSm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <img src="/img/chara/サンディ.png" alt="" width="15%"/>
          <img src="/img/chara/タラ.png" alt="" width="15%"/>
        </Grid>
      )
    }

    const MPc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.pcmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.pcmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <img src="/img/chara/サンディ.png" alt="" width="12%"/>
          <img src="/img/chara/タラ.png" alt="" width="12%"/>
        </Grid>
      )
    }

    const NSm = ({a = {}}) => {
      return (
        <Grid >
          <p className={classes.smmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <p className={classes.smmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="15%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="15%"/>
          <img src="/img/chara/サンディ.png" alt="" width="15%"/>
          <img src="/img/chara/タラ.png" alt="" width="15%"/>
        </Grid>
      )
    }

    const NPc = ({a = {}}) => {
      return (
        <Grid className={classes.right}>
          <p className={classes.pcmidside}>ミッド</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <p className={classes.pcmidside}>サイド</p>
          <img src="/img/chara/モーティス.png" alt="" width="12%"/>
          <p>※最適コンビは以下の通り</p>
          <img src="/img/chara/ジーン.png" alt="" width="12%"/>
          <img src="/img/chara/サンディ.png" alt="" width="12%"/>
          <img src="/img/chara/タラ.png" alt="" width="12%"/>
        </Grid>
      )
    }



    const charaFuncSm = [
      <ASm/>,
      <BSm/>,
      <CSm/>,
      <DSm/>,
      <ESm/>,
      <FSm/>,
      <GSm/>,
      <HSm/>,
      <ISm/>,
      <JSm/>,
      <KSm/>,
      <LSm/>,
      <MSm/>,
      <NSm/>,
    ];

    const charaFuncPc = [
      <APc/>,
      <BPc/>,
      <CPc/>,
      <DPc/>,
      <EPc/>,
      <FPc/>,
      <GPc/>,
      <HPc/>,
      <IPc/>,
      <JPc/>,
      <KPc/>,
      <LPc/>,
      <MPc/>,
      <NPc/>,
    ];

    const Stage = ({tag,stageTitle,stageImg,stageExplanation1,charaSm,charaPc}) => {
      return(
      <section>
        <br></br>
        <div>
          <p id={tag} className={classes.stagetitle2}>
            <img src="/img/pages/check.png" alt="" width="20"/>
            {stageTitle}
          </p>
          <p>{stageExplanation1}</p>
        </div>
        <MediaQuery query="(max-width: 550px)">
          <Grid>
            <Grid >
              <Grid className={classes.center}>
                <img src={stageImg} alt="" width="80%"/>
              </Grid>
              {charaSm}
            </Grid>
          </Grid>
        </MediaQuery>
        <MediaQuery query="(min-width: 551px)">
          <Grid>
            <Grid className={classes.pccharastage}>
              <Grid className={classes.left}>
                <img src={stageImg} alt="" width="100%"/>
              </Grid>
              {charaPc}
            </Grid>
          </Grid>
        </MediaQuery>
        <br></br>
      </section>
      );
    };
    
    const stages = [
      "どんぱち谷",
      "安全地帯",
      "ホットポテト",
      "橋の彼方",
      "ピットストップ",
      "ジグザグロード",
      "ガラガラヘビの谷",
    ];

    const jamptag1 = [
      "#stage1",
      "#stage2",
      "#stage3",
      "#stage4",
      "#stage5",
      "#stage6",
      "#stage7",
      "#stage8",
      "#stage9",
      "#stage10",
      "#stage11",
      "#stage12",
      "#stage13",
      "#stage14",
    ];

    const jamptag2 = [
      "stage1",
      "stage2",
      "stage3",
      "stage4",
      "stage5",
      "stage6",
      "stage7",
      "stage8",
      "stage9",
      "stage10",
      "stage11",
      "stage12",
      "stage13",
      "stage14",
    ];

    const stageExp1 = [
      "stage1",
      "stage2",
      "stage3",
      "stage4",
      "stage5",
      "stage6",
      "stage7",
      "stage8",
      "stage9",
      "stage10",
      "stage11",
      "stage12",
      "stage13",
      "stage14",
    ];

    const stageImage = [
      "/img/pages/Robbery/stage/donpachi.png",
      "/img/pages/Robbery/stage/anzen.png",
      "/img/pages/Robbery/stage/hotpoteto.png",
      "/img/pages/Robbery/stage/hashi.png",
      "/img/pages/Robbery/stage/pitstop.png",
      "/img/pages/Robbery/stage/ziguzagu.png",
      "/img/pages/Robbery/stage/garagara.png",
    ];


    return (
     
      <div className={classes.root}>
        <header></header>
        <main>

          <div>
            <Grid className={classes.center}>
              <Grid item>
                <img src="/img/pages/Menu/robbery.png" alt="" width="33"/>
              </Grid>
              <Grid item>
                <ResponsiveFontProvider>
                  <Typography variant="h5" className={classes.title}>強奪</Typography>
                </ResponsiveFontProvider>
              </Grid>
              <Grid item>
                <img src="/img/pages/Menu/robbery.png" alt="" width="33"/>
              </Grid>
            </Grid> 
          </div>

          <section>
          <br></br>
              <p className={classes.stagetitle}>
                <img src="/img/pages/stages.png" alt="" width="25"/>
                ステージ一覧
              </p>
            <div className={classes.stage}>
            {stages.map((_, i) => (
              <Stages
                stageTitle={stages[i]}
                tag={jamptag1[i]}
                key={i}
              />
            ))}
            </div>
          </section>

          <br></br>

          {stages.map((_, i) => (
            <Stage
              tag={jamptag2[i]}
              stageTitle={stages[i]}
              stageImg={stageImage[i]}
              stageExplanation1={stageExp1[i]}
              charaSm={charaFuncSm[i]}
              charaPc={charaFuncPc[i]}
            />
          ))}


          



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

export default function P5Robbery() {
  return (
    <Page/>
  )
};
