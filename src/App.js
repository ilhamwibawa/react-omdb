import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Index from "./pages/Index";
import Movie from "./pages/Movie";
require("dotenv").config();

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Movie</h1>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/:id" component={Movie} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
