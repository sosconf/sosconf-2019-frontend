import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../themes/speaker.css';
class ApplyButton extends Component {
  render() {
    if (this.props.language == 'zh')
      return (
        <div>
          <a className="sosconf-speaker__button" href="https://sosconf2019.mikecrm.com/5fDtWqv">
            <FormattedMessage id="commitApply"/>
          </a>
        </div>
      )
    else 
      return (
        <div>
          <a className="sosconf-speaker__button" href="https://forms.gle/sNgsuHnaw2AoszFQ9">
            <FormattedMessage id="commitApply"/>
          </a>
        </div>
      )
  }
}

class Speaker extends Component { 
  render() {
    return (
      <div className="sosconf-comming__wrap">
        <p className="sosconf-coming__text">
        <ApplyButton language={this.props.language}></ApplyButton>
        <FormattedMessage id="pleaseContact"/> speakers@sosconf.org</p>
      </div>
    );
  }
}

export default connect(state => {
  return {
    language: state.language
  }
})(Speaker);