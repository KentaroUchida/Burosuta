import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListIcon from "@material-ui/icons/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PrintIcon from "@material-ui/icons/Print";
import HomeIcon from "@material-ui/icons/HomeSharp";
import { GiCutDiamond, GiSoccerBall, GiRoundStar, GiScrew } from 'react-icons/gi';
import { IoFlag } from 'react-icons/io5';
import { FcSafe } from 'react-icons/fc';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: "#6d6d7d", //色変更
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  hide: {
    display: "none",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    background: "#e8e8ed",
    padding: theme.spacing(3),
  },
  buroicon:{
    width: "40",
    height: "25",
    marginLeft: "10",
  }
}));

export default function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const icons = [
    <HomeIcon />,
    <GiCutDiamond size={25}/>,
    <GiSoccerBall size={25}/>,
    <GiRoundStar size={25}/>,
    <IoFlag size={25}/>,
    <FcSafe size={25}/>,
    <GiScrew size={25}/>,
  ];

  const links = [
    "/", 
    "/emerald",
    "/soccer", 
    "/reward",
    "/hotzone",
    "/robbery",
    "/suppression",
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {[
          "Home",
          "エメラルドハント",
          "ブロストライカー",
          "賞金稼ぎ",
          "ホットゾーン",
          "強奪",
          "制圧",
        ].map((text, index) => (
          <Link to={links[index]} key={index} style={{ textDecoration: 'none' }} >
            <Divider />
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
        <Divider />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: mobileOpen,
        })}
      >
        <Toolbar>
          <Grid justify="space-between" alignItems="center" container>
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, mobileOpen && classes.hide)}
              >
                <ListIcon />
              </IconButton>
              <Typography variant="h6" noWrap style={{}}>
                {props.title}
              </Typography>
            </div>
            <IconButton
              color="inherit"
              edge="end"
              // onClick={handleDrawerOpen}
            >
              <PrintIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            position="fixed"
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className={classes.drawerHeader}>
              <Grid alignItems="center" justifyContent="center" container>
                <Grid item xs="2" className={classes.buroicon}>
                  <img src="/buroicon256.jpg" width="24" height="24"/>
                </Grid>
                <Grid item>
                  <Typography>ブロスタ完全攻略</Typography>
                </Grid>
                
              </Grid>
              <Grid item>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                      <ChevronLeftIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </IconButton>
                </Grid>
            </div>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            //open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Typography paragraph>{props.children}</Typography>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

//export default ResponsiveDrawer;
