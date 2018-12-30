import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TicButton from "./Tic-Tac-Toe/TicButton"
import TicGame from "./Tic-Tac-Toe/TicGame"

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <TicButton to="/"></TicButton>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
    <div>
      <TicGame/>
    </div>
  </div>
);

export default AppRouter;
