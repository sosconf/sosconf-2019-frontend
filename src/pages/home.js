import React, { Component } from 'react';
import Card from '../components/card';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import '../themes/home.css';

class Home extends Component { 
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      follow: '',
      followTimer: '',
      splitTimer: '',
      splitFlag: false
    }
  }

  componentDidMount() {
    let followArray = "Follow us".split('');
    let that = this;
    console.log(followArray)
    this.state.followTimer = setInterval(() => {
      if (followArray.length)
        that.setState({
          follow:that.state.follow += followArray.shift()
        })
      else {
        followArray = "Follow us".split('');
        that.setState({
          follow:""
        })
      }
    }, 500);

    this.state.splitTimer = setInterval(() => {
      that.setState({
        splitFlag:!that.state.splitFlag
      })
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.state.splitTimer);
    clearInterval(this.state.followTimer);
  }

  render() {
    return (
      <div className="sosconf-home__wrap">
        <Card customerStyle={{
          width: "50%",
          margin: '0 auto',
          marginTop: '140px',
          textAlign: 'center',
          paddingTop: '30px',
          paddingBottom: '30px'
        }} customerHeaderStyle = {{
          height:0,
          display:'none'
        }} body={(<div className="sosconf-home__announcement">
          <div className="sosconf-home__title">
            <h1 className="sosconf-home__title--up">sosconf 2019</h1>
            <div className="sosconf-home__title--span"></div>
            <h2 className="sosconf-home__title--down">Students Open Source Conference</h2>
            <div className="sosconf-home__position">
              <div className="sosconf-home__date-flag">
                DATE
              </div>
              <h2 className="sosconf-home__position--time">August 24 & 25, 2019</h2>
              <div className="sosconf-home__position-flag">
               SITE
              </div>
              <h2 className="sosconf-home__position--position">
                <FormattedMessage
                  id="meetingPosition"
                />
              </h2>
              <a className="sosconf-home__button--black sosconf-home__button--know-more" href="https://fb.com/sosconf">
                <FormattedMessage
                  id="Know more about sosconf"
                />
              </a>
              <div className="sosconf-home__follow-us">
                {this.state.follow} <span style={{
                  position: 'relative',
                  left: '-2px',
                  opacity: this.state.splitFlag?'0':'1',
                  transition: 'all .1s'
                }}>>_</span>
              </div>
            </div>
            <div className="sosconf-home__buttons">
              <a className="sosconf-home__button--black" href="https://fb.com/sosconf">
              <FormattedMessage
                id="Facebook"
              />
              </a>
              <a className="sosconf-home__button--black" href="https://twitter.com/sosconf">
              <FormattedMessage
                id="Twitter"
              />
              </a>
              <a className="sosconf-home__button--black" href="https://github.com/sosconf">
              <FormattedMessage
                id="GitHub"
              />
              </a>
            </div>
          </div>
        </div>)}></Card>
      </div>
    );
  }
}

export default Home;
