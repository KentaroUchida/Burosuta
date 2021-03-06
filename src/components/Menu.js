import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { Grid } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: "#6d6d7d", //色変更
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 5,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    background: "white",
    padding: theme.spacing(0),
  },
  leftpad:{
    paddingLeft: theme.spacing(3),
  },
}));

export default function MiniDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [selectedIndex,setSelectedIndex] = React.useState(props.now_index);
  const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const imgs = [
    "/buroicon256.jpg",
    "/img/pages/Menu/emerald.png",
    "/img/pages/Menu/soccer.png",
    "/img/pages/Menu/reward.png",
    "/img/pages/Menu/hotzone.png",
    "/img/pages/Menu/robbery.png",
    "/img/pages/Menu/suppression.png",
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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>
          {["Home",
          "エメラルドハント",
          "ブロストライカー",
          "賞金稼ぎ",
          "ホットゾーン",
          "強奪",
          "制圧",
        ].map((text, index) => (
          <Link to={links[index]} key={index} style={{ 
            color:'black', //文字色変更
            textDecoration: 'none',
            whiteSpace: 'noWrap',
            }} >
          <ListItem button selected={selectedIndex === index}  onClick={(event) => handleListItemClick(event,index)} handleDrawerClose>
            {/* <ListItemIcon>{icons[index]}</ListItemIcon> */}
            <Grid container wrap="nowrap" alignContent="center">
              <Grid item >
                <img src={imgs[index]} alt="" width="30" height="30" />
              </Grid>
              <Grid item>
                {/* <Typography>{text}</Typography> */}
                <ListItemText primary={text} className={classes.leftpad}/>
              </Grid>
            </Grid>
          </ListItem>
          <Divider />
          </Link>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        {props.children}
      </main>
    </div>
  );
}
