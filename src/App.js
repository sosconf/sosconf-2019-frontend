import React, { Component } from 'react';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';

// Components
import Header from './components/header';
import Footer from './components/footer';

// Pages
import Home from './pages/home';
import Introduce from './pages/introduce';
import Sponsor from './pages/sponsor';
import Coming from './pages/comingSoon';
import Volunteer from './pages/volunteer';
import News from './pages/news';
import Venue from './pages/venue';
import Speaker from './pages/speaker';
import BackToTop from './components/backToTop';


// React-transition-group
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Themes
import './themes/common.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      popState:true,
      scrollPosition:0
    }
    const that = this;
    document.addEventListener('scroll', function (target) {
      let nowScroll = window.scrollY;
      if (nowScroll <= that.state.scrollPosition) {
        if (!that.state.popState)
          that.setState({
            popState:true
          })
      } else {
        if (that.state.popState)
          that.setState({
            popState:false
          })
      }
      that.setState({
        scrollPosition:nowScroll
      })
    }, false);
  }

  render() {
    return (
      <HashRouter>
        <Route render={({ location }) => (
          <div className="sosconf-app">
          <header className="sosconf-header sosconf-header--pop"  style={
            {
              position:'fixed',
              width:'100%',
              height:this.state.popState?'50px':'',
              opacity:this.state.popState?1:0,
              zIndex:this.state.popState?1:-1,
              transition:'all .3s'
            }
          }>
            <Header>
            </Header>
          </header>
          <div className="sosconf-body">
            <TransitionGroup>
              <CSSTransition
                    key={location.pathname}
                    classNames="fade"
                    timeout={1000}
                  >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/introduce" component={Introduce} />
                  <Route exact path="/sponsor" component={Sponsor} />
                  <Route exact path="/coming" component={Coming} />
                  <Route exact path="/volunteer" component={Volunteer} />
                  <Route exact path="/news" component={News} />
                  <Route exact path="/venue" component={Venue} />
                  <Route exact path="/speaker" component={Speaker} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <footer className="sosconf-footer">
            <Footer>
            </Footer>
          </footer>
          <BackToTop>
          </BackToTop>
        </div>
        )}/>
        
      </HashRouter>
    );
  }
}

export default App;
