import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/header';
import Footer from './components/footer';

// Pages
import Home from './pages/home';
import Introduce from './pages/introduce';
import Sponsor from './pages/sponsor';
import Coming from './pages/comingSoon';
import Volunteer from './pages/volunteer';


// React-transition-group
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Themes
import './themes/common.css';


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <HashRouter>
        <div className="sosconf-app">
          <header className="sosconf-header">
            <Header>
            </Header>
          </header>
          <div className="sosconf-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/introduce" component={Introduce} />
              <Route exact path="/sponsor" component={Sponsor} />
              <Route exact path="/coming" component={Coming} />
              <Route exact path="/volunteer" component={Volunteer} />
            </Switch>
          </div>
          <footer className="sosconf-footer">
            <Footer>
              {/* Footer */}
            </Footer>
          </footer>


        </div>
      </HashRouter>
    );
  }
}

export default App;
