import { useEffect } from "react";
import { BrowserRouter, Route, useHistory, useLocation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import Home from "./pages/Home";
import Menu from "./components/Menu";
import P1Emerald from "./pages/P1Emerald";
import P2Soccer from "./pages/P2Soccer";
import P3Reward  from "./pages/P3Reward";
import P4HotZone from "./pages/P4HotZone";
import P5Robbery from './pages/P5Robbery';
import P6Suppression from "./pages/P6Suppression";


const paths = [
  "/", 
  "/emerald",
  "/soccer", 
  "/reward",
  "/hotzone",
  "/robbery",
  "/suppression",
];

const pages = [
  <Home />,
  <P1Emerald />,
  <P2Soccer />,
  <P3Reward />,
  <P4HotZone />,
  <P5Robbery />,
  <P6Suppression />,
];

const titles = [
  "Home",
  "エメラルドハント",
  "ブロストライカー",
  "賞金稼ぎ",
  "ホットゾーン",
  "強奪",
  "制圧",
];

function App() {
  const ContentPage = ({ index }) => {
    const history = useHistory();
    const incrementPage = (pageIndex) => (pageIndex + 1) % pages.length;
    const decrementPage = (pageIndex) =>
      (pageIndex + pages.length - 1) % pages.length;
    const searchIndex = (path) => paths.findIndex((el) => el === path);
    const handleSwipe = useSwipeable(
      {
        onSwipedRight: (_) => {
          history.push(
            paths[decrementPage(searchIndex(history.location.pathname))]
          );
        },
        onSwipedLeft: (_) => {
          history.push(
            paths[incrementPage(searchIndex(history.location.pathname))]
          );
        },
      },
      [history]
    );
    return (
      <Route exact path={paths[index]} key={index}>
        <Menu title = {titles[index]}>
          <div {...handleSwipe}>{pages[index]}</div>
        </Menu>
      </Route>
    );
  };

  const ScrollToTop = () =>{
    const { pathname } = useLocation()

    useEffect(()=>{
      window.scrollTo(0,0)
    }, [pathname])

    return null
  }

  return (
      // <BrowserRouter>
      //   <Menu title="Home">
      //     <Route exact path='/'>
      //       <Home/>
      //     </Route>
      //     <Route exact path='/jishin'>
      //       <Jishin/>
      //     </Route>
      //     <Route exact path='/taiken'>
      //       <Taiken/>
      //     </Route>
      //     <Route exact path='/taikenPapa'>
      //       <P10TaikenPapa/>
      //     </Route>
      //     <Route exact path='/form'>
      //       <Form/>
      //     </Route>
      //     <Route exact path='/souzou'>
      //       <P11KikenSouzou/>
      //     </Route>
      //     <Route exact path="/jissai">
      //       <P12KikenJissai/>
      //     </Route>
      //     <Route exact path='/daijobu'>
      //       <P14Daijobu/>
      //     </Route>
      //   </Menu>
      // </BrowserRouter>
    <BrowserRouter>
      <ScrollToTop/>
      {pages.map((_, i) => (
        <ContentPage index={i} />
      ))}
    </BrowserRouter>
  );
}

export default App;