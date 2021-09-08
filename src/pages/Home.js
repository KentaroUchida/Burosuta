import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ResponsiveFontProvider } from '../components/ResponsiveFontProvider';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const styleCss = makeStyles((theme) =>({
  root: {
    width : "100%",
    height : "100%",
    background: "linear-gradient(#ffffff,#febe20)",
    padding : theme.spacing(4),
  },
  title: {
    textShadow: "0px 2px 3px #808080",
  },
  appIntro: {
    padding : theme.spacing(2),
    width : "250px",
  },
  appIntrotitle: {
    textShadow: "0px 2px 3px #808080",
  }
}))

function Page() {
    const classes = styleCss();
    return (
      <body className={classes.root}>
        <header>
          <ResponsiveFontProvider>
            <Typography variant="h4" align="center" className={classes.title}>ブロスタ完全攻略</Typography>
          </ResponsiveFontProvider>
        </header>
        <br></br>
        <main>
          <div>
            <Paper elevation={2} style={{backgroundColor: "#eeeeff"}} className={classes.appIntro}>
            <Typography variant="subtitle1" className={classes.appIntrotitle}>ブロスタのインストール</Typography>
              <br></br>
              <Grid container spacing={0} alignContent="center" style={{width: "85%"}}>
                <Grid container item style={{width: "50%"}}>
                  <img src="/buroicon256.jpg" alt="ブロスタ アプリアイコン" style={{width: "90px", height:"90px"}}/>
                </Grid>
                <Grid container item alignContent="center" style={{width: "50%"}}>
                  <Container fixed>
                    <Grid item>
                      <Link href="https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=ja&gl=US">
                        <img src="/img/pages/Home/hyogo_bousai_google_play_badge.png" alt="Google Playリンク" style={{width: "130px", margin: "-8px"}}/>
                      </Link>
                    </Grid>
                    <Grid container item>
                      <Link href="https://apps.apple.com/jp/app/%E3%83%96%E3%83%AD%E3%82%B9%E3%82%BF/id1229016807">
                        <img src="/img/pages/Home/hyogo_bousai_app_store_black.svg" alt="App Storeリンク" style={{width: "115px"}}/>
                      </Link>
                    </Grid>
                  </Container>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </main>
        <footer></footer>
      </body>
    );
}

export default function Home() {
  return (
    <Page/>
  )
};