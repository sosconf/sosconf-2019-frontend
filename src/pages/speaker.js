import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../themes/speaker.css';

class Speaker extends Component { 
  render() {
    return (
      <div className="sosconf-comming__wrap">
        <p className="sosconf-coming__text">
        <div>
          <button className="sosconf-speaker__button">填写申请</button>
        </div>
        <FormattedMessage id="pleaseContact"/> speakers@sosconf.org</p>
      </div>
    );
  }
}

export default Speaker;