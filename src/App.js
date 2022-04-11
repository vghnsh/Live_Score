import React, { useEffect, useState } from "react";
import { getMatch } from "./api";
import "./App.css";
import Banner from "./Banner/Banner.component";

import Live from "./Live/Live.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Full from "./Full/Full.component";

function App() {
  const [match, setMatch] = useState([]);

  useEffect(() => {
    async function fdata() {
      await getMatch()
        .then((data) => setMatch(data.data))
        .catch((e) => console.log(e));
    }
    fdata();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Banner />
            <div className="Live_compo">
              {match
                .filter((match) => match.matchType === "t20")
                .map((match) => (
                  <Live key={match.id} {...match}></Live>
                ))}
            </div>
          </Route>

          <Route path="/full">
            <Full />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
