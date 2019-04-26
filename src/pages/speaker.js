import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../themes/speaker.css';

class Speaker extends Component { 
  render() {
    return (
      <div className="sosconf-comming__wrap">
        <p className="sosconf-coming__text">
        <div>
          <a className="sosconf-speaker__button" href="https://sosconf2019.mikecrm.com/5fDtWqv">
          <FormattedMessage id="commitApply"/>
          </a>
        </div>
        <FormattedMessage id="pleaseContact"/> speakers@sosconf.org</p>
      </div>
    );
  }
}

export default Speaker;