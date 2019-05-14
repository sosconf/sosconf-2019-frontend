import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Row } from 'antd';
import SponsorGroup from '../components/sponsorCardGroup';
import ProgressHOC from '../components/progressHOC';

import '../themes/volunteer.css';
import '../themes/animate.css';
// DOC
import volunteerDocument from '../docs/volunteer.js'; 
import { generatorHTML } from '../util/makedownGenerotor';

class Volunteer extends Component { 
  constructor (props) {
    super(props);
    this.state = {
        // "设计组":generatorHTML(volunteerDocument['en']['设计组']),
        // "技术组":generatorHTML(volunteerDocument['en']['技术组']),
        // "Conference Affairs Team":generatorHTML(volunteerDocument['en']['Conference Affairs Team']),
        // "赞助组":generatorHTML(volunteerDocument['en']['赞助组']),
        // "市场营销组":generatorHTML(volunteerDocument['en']['市场营销组']),
        // "媒体组":generatorHTML(volunteerDocument['en']['媒体组']),
        // "机动组":generatorHTML(volunteerDocument['en']['机动组']),
        // "议程组":generatorHTML(volunteerDocument['en']['议程组'])
    }
  }

  render() {
    return (
      <div className="sosconf-volunteer__wrap">
        <SponsorGroup style={{
            margin: "70px auto",
        }}></SponsorGroup>
        {/* <div className="sosconf-volunteer__text">
                <FormattedMessage
                 id="beVolunteer"/>
        </div>
        <div className="sosconf-volunteer__button-group">
            <a target="_black" href="http://sosconf2019.mikecrm.com/pS483cs" className="animated bounce">
                <FormattedMessage
                 id="apply"/>
            </a>
            <p className="sosconf-volunteer__button-group-span">（近期会有志愿者专用账号系统上线，敬请期待）</p>
        </div>
        <div className="sosconf-volunteer__card-group">
            <div className="sosconf-volunteer__card">
                <div className="sosconf-volunteer__card-header">
                    <span>技术组</span>
                </div>
                <div className="sosconf-volunteer__card-text" dangerouslySetInnerHTML={{__html: this.state.技术组}}>
                </div>
            </div>

            <div className="sosconf-volunteer__card">
                <div className="sosconf-volunteer__card-header">
                    <span>设计组</span>
                </div>
                <div className="sosconf-volunteer__card-text" dangerouslySetInnerHTML={{__html: this.state.设计组}}>
                </div>
            </div>
            <div className="sosconf-volunteer__card">
                    <div className="sosconf-volunteer__card-header">
                        <span>市场营销组</span>
                    </div>
                    <div className="sosconf-volunteer__card-text" dangerouslySetInnerHTML={{__html: this.state.市场营销组}}>
                    </div>
                </div>
        </div>
        <div className="sosconf-volunteer__card-group">

                <div className="sosconf-volunteer__card">
                    <div className="sosconf-volunteer__card-header">
                        <span>媒体组</span>
                    </div>
                    <div className="sosconf-volunteer__card-text" dangerouslySetInnerHTML={{__html: this.state.媒体组}}>
                    </div>
                </div>

                <div className="sosconf-volunteer__card">
                <div className="sosconf-volunteer__card-header">
                    <span>议程组</span>
                </div>
                <div className="sosconf-volunteer__card-text" dangerouslySetInnerHTML={{__html: this.state.议程组}}>
                </div>
            </div>
            <div className="sosconf-volunteer__card">
                    <div className="sosconf-volunteer__card-header">
                        <span>赞助组</span>
                    </div>
                    <div className="sosconf-volunteer__card-text" dangerouslySetInnerHTML={{__html: this.state.赞助组}}>
                    </div>
                </div>

        </div>

        <div className="sosconf-volunteer__card-group">
                <div className="sosconf-volunteer__card">
                    <div className="sosconf-volunteer__card-header">
                        <span>机动组</span>
                    </div>
                    <div className="sosconf-volunteer__card-text" dangerouslySetInnerHTML={{__html: this.state.机动组}}>
                    </div>
                </div>
                <div className="sosconf-volunteer__card">
                    <div className="sosconf-volunteer__card-header">
                        <span>Conference Affairs Team</span>
                    </div>
                    <div className="sosconf-volunteer__card-text" dangerouslySetInnerHTML={{__html: this.state['Conference Affairs Team']}}>
                    </div>
                </div>
                <div className="sosconf-volunteer__card--none sosconf-volunteer__card">
                </div>
        </div>

        <div className="sosconf-volunteer__card-group">
            <div className="sosconf-volunteer__card">
                    <div className="sosconf-volunteer__card-header">
                        <span>志愿者福利</span>
                    </div>
                    <div className="sosconf-volunteer__card-text sosconf-volunteer__card-text--big">
                        <ul>
                            <li>获得免费参与sosconf 2019的资格 </li>
                            <li>与会志愿者将由组委会负责午餐或餐补</li>
                            <li>官方志愿者证书</li>
                            <li>sosconf 2019志愿者纪念品礼包 </li>
                            <li>与国内外技术大神交流的宝贵经历、与国外社区活跃者成为知己好友的机会</li>
                            <li>通过此次参与国际开源会议的机会，更有可能获得国外知名企业的认可</li>
                            <li>优秀的志愿者将有机会由组委会承担部分费用前往美国洛杉矶南加州大学参会</li>
                        </ul>
                        <p>联系方式：</p>
                        <p>QQ群：928111041</p>
                        <p>电报群：https://t.me/joinchat/LK3swBM0tPqV-nR8BwrLUA</p>
                    </div>
            </div>
        </div>

        <div className="sosconf-volunteer__button-group">
            <a target="_black" href="http://sosconf2019.mikecrm.com/pS483cs" className="animated bounce">
                <FormattedMessage
                    id="apply"/>
            </a>
            <p  className="sosconf-volunteer__button-group-span">（近期会有志愿者专用账号系统上线，敬请期待）</p>
        </div> */}
      </div>
    );
  }
}

export default ProgressHOC(connect(
    state => {
        return {
            language: state.language
        }
    }
)(Volunteer));