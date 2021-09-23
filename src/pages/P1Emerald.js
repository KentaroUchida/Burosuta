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
    textAlign : "center",
    display : "flex",
  },
  stage: {
    backgroundColor : "#031d44",
    width : "100%",
    border : "solid",
    borderColor : "#dab785",
    marginRight : "50",
    paddingLeft : "7%"
  },
  stagecenter : {
    alignItems : "center",
    display : "flex",
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

    const Stages = ({stageTitle,tag}) => {
      return(
        <div>
        <MediaQuery query="(max-width: 600px)">
        <Grid className={classes.stagecenter}>
          <img src="/img/pages/skall.png" alt="" width="15"/>
          <Grid className={classes.stagePaddingLeft}>
            <AnchorLink href={tag} offset="75" style={{color:"#dab785"}}>
              {stageTitle}
            </AnchorLink>
          </Grid>
        </Grid>
        </MediaQuery>
        <MediaQuery query="(min-width: 601px)">
        <Grid className={classes.stagecenter}>
          <img src="/img/pages/skall.png" alt="" width="15"/>
          <Grid className={classes.stagePaddingLeft}>
            <AnchorLink href={tag} offset="85" style={{color:"#dab785"}}>
              {stageTitle}
            </AnchorLink>
          </Grid>
        </Grid>
        </MediaQuery>
        </div>
      );
    };

    const GotsuCharaSm = ({a = {}}) => {
      return (
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
      )
    }

    const GotsuCharaPc = ({a = {}}) => {
      return (
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
      )
    }

    const KuriCharaSm = ({a = {}}) => {
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

    const KuriCharaPc = ({a = {}}) => {
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

    const SaboCharaSm = ({a = {}}) => {
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

    const SaboCharaPc = ({a = {}}) => {
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

    const EmeCharaSm = ({a = {}}) => {
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

    const EmeCharaPc = ({a = {}}) => {
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

    const AnCharaSm = ({a = {}}) => {
      return (
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
      )
    }

    const AnCharaPc = ({a = {}}) => {
      return (
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
      )
    }

    const DCharaSm = ({a = {}}) => {
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

    const DCharaPc = ({a = {}}) => {
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

    const ShizuCharaSm = ({a = {}}) => {
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

    const ShizuCharaPc = ({a = {}}) => {
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

    const DaiCharaSm = ({a = {}}) => {
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

    const DaiCharaPc = ({a = {}}) => {
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

    const ShijoCharaSm = ({a = {}}) => {
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

    const ShijoCharaPc = ({a = {}}) => {
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

    const DabuCharaSm = ({a = {}}) => {
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

    const DabuCharaPc = ({a = {}}) => {
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

    const ToroCharaSm = ({a = {}}) => {
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

    const ToroCharaPc = ({a = {}}) => {
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

    const SuruCharaSm = ({a = {}}) => {
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

    const SuruCharaPc = ({a = {}}) => {
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

    const SabiCharaSm = ({a = {}}) => {
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

    const SabiCharaPc = ({a = {}}) => {
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

    const WataCharaSm = ({a = {}}) => {
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

    const WataCharaPc = ({a = {}}) => {
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
      <GotsuCharaSm/>,
      <KuriCharaSm/>,
      <SaboCharaSm/>,
      <EmeCharaSm/>,
      <AnCharaSm/>,
      <DCharaSm/>,
      <ShizuCharaSm/>,
      <DaiCharaSm/>,
      <ShijoCharaSm/>,
      <DabuCharaSm/>,
      <ToroCharaSm/>,
      <SuruCharaSm/>,
      <SabiCharaSm/>,
      <WataCharaSm/>,
    ];

    const charaFuncPc = [
      <GotsuCharaPc/>,
      <KuriCharaPc/>,
      <SaboCharaPc/>,
      <EmeCharaPc/>,
      <AnCharaPc/>,
      <DCharaPc/>,
      <ShizuCharaPc/>,
      <DaiCharaPc/>,
      <ShijoCharaPc/>,
      <DabuCharaPc/>,
      <ToroCharaPc/>,
      <SuruCharaPc/>,
      <SabiCharaPc/>,
      <WataCharaPc/>,
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
        <MediaQuery query="(max-width: 600px)">
          <Grid>
            <Grid >
              <Grid className={classes.center}>
                <img src={stageImg} alt="" width="80%"/>
              </Grid>
              {charaSm}
            </Grid>
          </Grid>
        </MediaQuery>
        <MediaQuery query="(min-width: 601px)">
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
      "ごつごつ坑道",
      "クリスタルアーケード",
      "サボテンの罠",
      "エメラルドの要塞",
      "アンダーマイン",
      "ディープダイナー",
      "沈んだ鉱山",
      "ダイヤモンドダスト",
      "四畳半",
      "ダブルレール",
      "トロッコの狂気",
      "鋭いアングル",
      "寂れたアーケード",
      "綿菓子パラダイス",
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
      "中央は開けているがサイドには壁があり、ブッシュも豊富なので割とあらゆるキャラが使用可能。",
      "stage2",
      "stage3",
      "stage4",
      "押し込まれると負ける。チームで協力して殲滅しよう。",
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
      "/img/pages/Emerald/stage/ごつごつ坑道.png",
      "/img/pages/Emerald/stage/クリスタルアーケード.png",
      "/img/pages/Emerald/stage/サボテンの罠.png",
      "/img/pages/Emerald/stage/エメラルドの要塞.png",
      "/img/pages/Emerald/stage/アンダーマイン.png",
      "/img/pages/Emerald/stage/ディープダイナー.png",
      "/img/pages/Emerald/stage/沈んだ鉱山.png",
      "/img/pages/Emerald/stage/ダイヤモンドダスト.png",
      "/img/pages/Emerald/stage/四畳半.png",
      "/img/pages/Emerald/stage/ダブルレール.png",
      "/img/pages/Emerald/stage/トロッコの狂気.png",
      "/img/pages/Emerald/stage/鋭いアングル.png",
      "/img/pages/Emerald/stage/寂れたアーケード.png",
      "/img/pages/Emerald/stage/綿菓子パラダイス.png",
    ];


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

export default function P1Emerald() {
  return (
    <Page/>
  )
};
