import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuestionList from "./pages/QuestionList";
import ResultPage from "./pages/ResultPage";
import StartPage from "./pages/SelectNum";

function App() {
  return (
    <div className="app">
      <h1>Trivia</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <StartPage />
          </Route>
          <Route path="/questionlist">
            <QuestionList />
          </Route>
          <Route path="/resultpage">
            <ResultPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
