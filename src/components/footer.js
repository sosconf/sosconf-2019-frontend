import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../themes/footer.css';

class Footer extends Component { 

  render() {
    return (
      <div className="sosconf-footer__wrap">
        <div className="sosconf-footer__middle-buttons">
          <div className="sosconf-footer__middle-button-wrapper">
            <a target="_black" href="https://openingsource.org/" className="sosconf-footer__middle-button sosconf-footer__middle-button--openingsource"></a>
          </div>
          <div className="sosconf-footer__middle-button-wrapper">
            <a target="_black" href="https://weibo.com/sosconf" className="sosconf-footer__middle-button sosconf-footer__middle-hexang"></a>
          </div>
          <div className="sosconf-footer__middle-button-wrapper">
            <a target="_black" href="mailto:pr@sosconf.org" className="sosconf-footer__middle-button sosconf-footer__middle-mail"></a>
          </div>
          <div className="sosconf-footer__middle-button-wrapper">
            <a target="_black" href="https://fb.com/sosconf" className="sosconf-footer__middle-button sosconf-footer__middle-facebook"></a>
          </div>
          <div className="sosconf-footer__middle-button-wrapper">
            <a target="_black" href="https://twitter.com/sosconf" className="sosconf-footer__middle-button sosconf-footer__middle-twitter"> </a>
          </div>
          <div className="sosconf-footer__middle-button-wrapper">
            <a target="_black" href="" className="sosconf-footer__middle-button sosconf-footer__middle-flickr"></a>
          </div>
          <div className="sosconf-footer__middle-button-wrapper">
            <a target="_black" href="" className="sosconf-footer__middle-button sosconf-footer__middle-telegram"></a>
          </div>
          <div className="sosconf-footer__middle-button-wrapper">
            <a target="_black" href="https://www.youtube.com/channel/UCpqv0HaFB0rAK-9G_V9yOOA" className="sosconf-footer__middle-button sosconf-footer__middle-youtube"></a>
          </div>
          <div className="sosconf-footer__middle-button-wrapper">
            <a target="_black" href="https://weibo.com/sosconf" className="sosconf-footer__middle-button sosconf-footer__middle-weibo"></a>
          </div>
          <div className="sosconf-footer__middle-button-wrapper">
            <a target="_black" href="https://weibo.com/sosconf" className="sosconf-footer__middle-button sosconf-footer__middle-wechat"></a>
          </div>
        </div>
        <div className="sosconf-footer__links">
          <a><FormattedMessage id="contactUs"/></a> / 
          <a><FormattedMessage id="aboutUs"/></a> / 
          <a><FormattedMessage id="joinUs"/></a> 
        </div>
        <div className="sosconf-footer__copyleft">
          <p>Copyleft @ openingsource.org</p>
        </div>
      </div>
    );
  }
}

export default Footer;
