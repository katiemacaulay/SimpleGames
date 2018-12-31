import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TicButton from "./Tic-Tac-Toe/TicButton"
import TicGame from "./Tic-Tac-Toe/TicGame"
import HomeButton from "./Home/HomeButton"
import Home from "./Home/Home"

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <div>
    <Router>
      <div>
        <nav className="flex items-center" >
          <div class="w-20 pa3 mr2 tc">
            <Link to="./Home">
            <HomeButton/>
            </Link>
          </div>
          <div class="w-20 pa3 mr2 tc">
            <Link to="./TicGame">
            <TicButton/>
            </Link>
          </div>
          <div class="w-20 pa3 mr2 tc">
            <Link to="/about/">About</Link>
          </div>
          <div class="w-20 pa3 mr2 tc">
            <Link to="/users/">Users</Link>
          </div>
          <div class="w-20 pa3 mr2 tc">
            <Link to="/users/">Users</Link>
          </div>
        </nav>
        <Route path="/Home/" exact component={Home} />
        <Route path="/TicGame/" component={TicGame} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
    <div>
    </div>
  </div>
);

export default AppRouter;
