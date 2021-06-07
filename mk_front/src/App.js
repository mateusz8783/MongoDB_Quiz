import React from 'react';
import './App.css';
import Quiz from './components/QuizMain';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Questions() {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Family Quiz App created by Mateusz Kasprzycki</h2>
      <h2>Login to access page</h2>
    </div>
  );
}

function Add() {
  return (
    <form>
      <p>Enter question description:</p>
      <input
        type="text"
      />
      <p>Enter answer 1:</p>
      <input
        type="text"
      />
      <p>Enter answer 2:</p>
      <input
        type="text"
      />
      <p>Enter answer 3:</p>
      <input
        type="text"
      />
      <p>Enter correct answer id:</p>
      <input
        type="text"
      />
      <button>
      Send
      </button>
    </form>
  );
}

function Logging() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/quiz">Start Quiz</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quiz">
            <Questions />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
