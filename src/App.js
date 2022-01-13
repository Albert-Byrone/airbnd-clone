import "./App.css";
import Header from "./Header";
import Home from "./Home";
// import Footer from "./Footer";
import Foot from "./Foot";
// import { render } from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import SearchPage from "./SearchPage";
// import your route components too

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Foot />
      </Router>
    </div>
  );
}

export default App;
{
  /* <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
          <Foot />
      </> */
}
