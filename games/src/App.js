import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TicButton from "./Tic-Tac-Toe/TicButton";
import TicGame from "./Tic-Tac-Toe/TicGame";
import HomeButton from "./Home/HomeButton";
import Home from "./Home/Home";
import PigLatinButton from "./PigLatin/PigLatinButton";
import PigLatin from "./PigLatin/PigLatin";
import RockPaperButton from "./RockPaper/RockPaperButton";
import RockPaper from "./RockPaper/RockPaper";
import MasterMindButton from "./MasterMind/MasterMindButton";
import MasterMind from "./MasterMind/MasterMind"


const AppRouter = () => (
  <div>
    <Router>
      <div>
        <nav className="flex items-center" >
          <div className="w-20 pa3 mr2 tc">
            <Link to="/Home/">
            <HomeButton/>
            </Link>
          </div>
          <div className="w-20 pa3 mr2 tc">
            <Link to="/TicGame/">
            <TicButton/>
            </Link>
          </div>
          <div className="w-20 pa3 mr2 tc">
            <Link to="/PigLatin/">
            <PigLatinButton/>
            </Link>
          </div>
          <div className="w-20 pa3 mr2 tc">
            <Link to="/RockPaper/">
            <RockPaperButton/>
            </Link>
          </div>
          <div className="w-20 pa3 mr2 tc">
            <Link to="/MasterMind/">
            <MasterMindButton/>
            </Link>
          </div>
        </nav>
        <Route path="/Home/" exact component={Home} />
        <Route path="/TicGame/" component={TicGame} />
        <Route path="/PigLatin/" component={PigLatin} />
        <Route path="/RockPaper/" component={RockPaper} />
        <Route path="/MasterMind/" component={MasterMind} />
      </div>
    </Router>
    <div>
    </div>
  </div>
);

export default AppRouter;
