import "./App.scss";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import CarPage from "./pages/CarPage.jsx";
import Nav from "./components/Nav.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TESLA_QUERY } from "./components/query";

function App() {
  const [cars, setCars] = useState([]);
  const [chosen, setChosen] = useState([]);

  const fetchCars = () => {
    fetch(
      "https://api-eu-central-1.graphcms.com/v2/cknoq6cg8n99i01z38l7l22oe/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: TESLA_QUERY }),
      }
    )
      .then((response) => response.json())
      .then((data) => setCars(data.data.vehicles));
  };

  useEffect(() => {
    fetchCars();
  }, [cars]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home cars={cars} setChosen={setChosen} />
          </Route>
          <Route path="/car/:id">
            <CarPage chosen={chosen} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
