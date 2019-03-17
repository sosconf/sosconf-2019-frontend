import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import '../themes/home.css';

class Home extends Component { 
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  readAll(){
      document.getElementsByClassName('sosconf-home__news--container')[0].style.height = 'auto';
      document.getElementsByClassName('sosconf-home__readAll')[0].style.display = 'none';
  }

  render() {
    return (
      <div className="sosconf-home__wrap">
        <div className="sosconf-home__announcement">
          <div className="sosconf-home__title">
            <h1 className="sosconf-home__title--up">sosconf 2019</h1>
            <div className="sosconf-home__title--span"></div>
            <h2 className="sosconf-home__title--down">Students Open Source Conference</h2>
            <div className="sosconf-home__position">
              <h2 className="sosconf-home__position--time">August 24th & 25th, 2019</h2>
              <h2 className="sosconf-home__position--position">
              <FormattedMessage
                id="meetingPosition"
              />
              </h2>
            </div>
            <div className="sosconf-home__buttons">
              <a className="sosconf-home__button--green" href="https://fb.com/sosconf">
              <FormattedMessage
                id="Facebook"
              />
              </a>
              <a className="sosconf-home__button--green" href="https://twitter.com/sosconf">
              <FormattedMessage
                id="Twitter"
              />
              </a>
              <a className="sosconf-home__button--green" href="https://github.com/sosconf">
              <FormattedMessage
                id="Github"
              />
              </a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
