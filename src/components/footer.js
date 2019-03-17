import React, { Component } from 'react';
import '../themes/footer.css';

class Footer extends Component { 

  render() {
    return (
      <div className="sosconf-footer__wrap">
        <div className="sosconf-footer__logo-wrap">
            <div className="sosconf-footer__left-logo">
            </div>
        </div>
        <div className="sosconf-footer__middle-buttons">
            <a target="_black" href="https://openingsource.org/" className="sosconf-footer__middle-button sosconf-footer__middle-button--openingsource"></a>
            <a target="_black" href="mailto:pr@sosconf.org" className="sosconf-footer__middle-button sosconf-footer__middle-mail"></a>
            <a target="_black" href="https://fb.com/sosconf" className="sosconf-footer__middle-button sosconf-footer__middle-facebook"></a>
            <a target="_black" href="https://twitter.com/sosconf" className="sosconf-footer__middle-button sosconf-footer__middle-twitter"> </a>
            <a target="_black" href="" className="sosconf-footer__middle-button sosconf-footer__middle-flickr"></a>
            <a target="_black" href="http://www.youtube.com/channel/UCpqv0HaFB0rAK-9G_V9yO" className="sosconf-footer__middle-button sosconf-footer__middle-youtube"></a>
            <a target="_black" href="https://weibo.com/sosconf" className="sosconf-footer__middle-button sosconf-footer__middle-weibo"></a>
        </div>
        <div className="sosconf-footer__copyleft">
          <p>Copyleft @ openingsource.org</p>
        </div>
      </div>
    );
  }
}

export default Footer;
