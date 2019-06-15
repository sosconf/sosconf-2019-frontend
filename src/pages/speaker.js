import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Card from '../components/card.js';
import ProgressHOC from '../components/progressHOC';
import track from '../images/Tracks.jpg';
import '../themes/speaker.css';

class ApplyButton extends Component {
  render() {
    if (this.props.language == 'zh')
      return (
        <div>
          <a className="sosconf-speaker__button" href="https://sosconf2019.mikecrm.com/5fDtWqv">
            <FormattedMessage id="commitApply" />
          </a>
        </div>
      )
    else
      return (
        <div>
          <a className="sosconf-speaker__button" href="https://forms.gle/sNgsuHnaw2AoszFQ9">
            <FormattedMessage id="commitApply" />
          </a>
        </div>
      )
  }
}

class Speaker extends Component {
  render() {
    if (this.props.language == 'zh') {
      return (
        <div className="sosconf-comming__wrap">
          <Card customerStyle={{
            width: '960px',
            minHeight: '780px',
            margin: '0 auto',
            marginTop: '140px',
            marginBottom: '140px',
            textAlign: 'center',
            paddingTop: '100px',
            paddingBottom: '50px',
            paddingLeft: '70px',
            paddingRight: '70px'
          }}
            header={(
              <div className="sosconf__about-header">
                <h1>Call for Papers</h1>
                <div className="sosconf__about-header-break"></div>
              </div>
            )}
            body={(
              <div className="sosconf__about-card-content sosconf__speaker-card-content">
                  <ApplyButton language={this.props.language}></ApplyButton>
                  <p>如果你是一名学生，并热爱开源和开源技术，我们欢迎你来到盛夏的洛杉矶，与我们一同创造历史。你将认识来自其他国家的优秀学生开发者以及拥有国际视野的公司和企业——更重要的是，分享你的想法并享受其中！</p>
                  <p>所有的讲者都会收到旅行补贴与支援，以及其他专属纪念品。</p>
                  <p>讲者申请现已开放。如果你感兴趣，欢迎到年会官网的讲者页面找到报名链接。以下是所有演讲主题的列表：</p>
                  <img src={track}/>
                  <ApplyButton language={this.props.language}></ApplyButton>
              </div>
          )} />
        </div>
      );
    } else 
    return (
      <div className="sosconf-comming__wrap">
        <Card customerStyle={{
          width: '960px',
          minHeight: '780px',
          margin: '0 auto',
          marginTop: '140px',
          marginBottom: '140px',
          textAlign: 'center',
          paddingTop: '100px',
          paddingBottom: '50px',
          paddingLeft: '70px',
          paddingRight: '70px'
        }}
          header={(
            <div className="sosconf__about-header">
              <h1>Call for Papers</h1>
              <div className="sosconf__about-header-break"></div>
            </div>
          )}
          body={(
            <div className="sosconf__about-card-content sosconf__speaker-card-content">
                <ApplyButton language={this.props.language}></ApplyButton>
                <p>
                Would you like to share your experience with a tool that saved your day, or a project meaningful to your growth? If you are a student excited about open source and technologies, we sincerely welcome you to join us this summer in Los Angeles to create the history together. Get to know students from institutions at other parts of the world, and connect with companies and corporations with an international vision. But most importantly, let you voice be heard and show your talents!
                No matter which part of the world you are from, we will provide you travel reimbursement and local support. You will also get exclusive swags and souvenirs for speakers. Speaker application is now open. If you have any questions, please don’t hesitate to email speakers@sosconf.org. Below are the tracks of sosconf 2019:
                </p>
                <img src={track}/>
                <p>
                Applications will be carefully reviewed by sosconf 2019 Agenda Team, Committee and Scholar Committee. Notifications of decisions will be sent out no later than July, and later applications will be reviewed on a rolling basis.
                </p>
                <ApplyButton language={this.props.language}></ApplyButton>
            </div>
        )} />
      </div>
    );
  }
}

export default ProgressHOC(connect(state => {
  return {
    language: state.language
  }
})(Speaker));
