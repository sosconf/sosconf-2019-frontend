import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { changeToEnglish, changeToChinese, changeUser } from '../actions/action';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import '../themes/header.css';


class Header extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }


  constructor() {
    super();
    this.state = {
      displayMobileBar: false,
      displayAboutBar: false,
      displayContactBar: false,
      displayLanguageBar: false
    };
    this.handleChangeToChinese = this.handleChangeToChinese.bind(this);
    this.handleChangeToEnglish = this.handleChangeToEnglish.bind(this);
    this.closeAllBar = this.closeAllBar.bind(this);
    this.showModal = this.showModal.bind(this);
    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
    this.showProfile = this.showProfile.bind(this);
    this.logout = this.logout.bind(this);
    this.renderMobileLogin = this.renderMobileLogin.bind(this);
  }

  showModal() {
    if (this.props.language == 'zh')
      Modal.info({
        title: '非常抱歉',
        content: '我们的账户系统正在维护中，稍后将开放'
      })
    else if (this.props.language == 'en') {
      Modal.info({
        title: 'We are very sorry',
        content: 'Our account system is under maintenance and will be open later.'
      })
    }
  }

  signin() {
    // this.showModal();
    window.location.href = "https://api.sosconf.org/login"
  }

  signup() {
    // this.showModal();
    window.location.href = "https://api.sosconf.org/register"
  }

  // 切换英文
  handleChangeToEnglish() {
    this.props.changeToEnglish();
  }

  // 切换中文
  handleChangeToChinese() {
    this.props.changeToChinese();
  }

  // 查看个人信息
  showProfile() {
    this.props.history.push("/personal");
  }

  // 登出
  logout() {
    this.props.changeUser({});
  }

  // 关闭所有bar
  closeAllBar() {
    this.setState({
      displayMobileBar: false,
      displayAboutBar: false,
      displayContactBar: false,
      displayLanguageBar: false,
      popState: true,
      displayUserBar: false
    })
  }

  renderPCHeaderRight() {
    if (!this.props.userProfile.status)
      return (
        <span>
          <div className="sosconf-header__button-group sosconf-header__button-group--login">
            <button className="sosconf-header__group-button-title sosconf-header__button-group-title--login" onClick={this.signup}>
              <FormattedMessage id="signup" />
            </button>
          </div>

          <div className="sosconf-header__button-group sosconf-header__button-group--signin">
            <button className="sosconf-header__group-button-title sosconf-header__button-group-title--signin" onClick={this.signin}>
              <FormattedMessage id="signin" />
            </button>
          </div>

          <div className="sosconf-header__button-group sosconf-header__button-group--language">
            <button className="sosconf-header__group-button-title sosconf-header__group-button-title--language" id="sosconf-header__button--language" >
              <FormattedMessage
                id="language"
              />
              <span style={
                {
                  transform: this.state.displayLanguageBar ? 'rotateZ(0deg)' : 'rotateZ(180deg)',
                }
              }></span>
            </button>
            <div className="sosconf-header__gourp-drop-down">
              <button className="sosconf-header__group-button" onClick={() => { this.handleChangeToEnglish() }}>
                <FormattedMessage
                  id="english"
                />
              </button>
              <button className="sosconf-header__group-button" onClick={() => { this.handleChangeToChinese() }}>
                <FormattedMessage
                  id="chinese"
                />
              </button>
            </div>
          </div>
        </span>)
    else
      return (
        <span>
          <div className="sosconf-header__button-group sosconf-header__button-group--user">
            <button className="sosconf-header__group-button-title sosconf-header__group-button-title--user" id="sosconf-header__button--user" >
              <img src={this.props.userProfile.userPhoto}></img>
              <span>{this.props.userProfile.nickname}</span>
              <span style={
                {
                  transform: this.state.displayUserBar ? 'rotateZ(0deg)' : 'rotateZ(180deg)',
                }
              }></span>
            </button>
            <div className="sosconf-header__gourp-drop-down">
              <button className="sosconf-header__group-button" onClick={() => { this.showProfile() }}>
                <FormattedMessage
                  id="profile"
                />
              </button>
              <button className="sosconf-header__group-button" onClick={() => { this.logout() }}>
                <FormattedMessage
                  id="logout"
                />
              </button>
            </div>
          </div>
          <div className="sosconf-header__button-group sosconf-header__button-group--language">
            <button className="sosconf-header__group-button-title sosconf-header__group-button-title--language" id="sosconf-header__button--language" >
              <FormattedMessage
                id="language"
              />
              <span style={
                {
                  transform: this.state.displayLanguageBar ? 'rotateZ(0deg)' : 'rotateZ(180deg)',
                }
              }></span>
            </button>
            <div className="sosconf-header__gourp-drop-down">
              <button className="sosconf-header__group-button" onClick={() => { this.handleChangeToEnglish() }}>
                <FormattedMessage
                  id="english"
                />
              </button>
              <button className="sosconf-header__group-button" onClick={() => { this.handleChangeToChinese() }}>
                <FormattedMessage
                  id="chinese"
                />
              </button>
            </div>
          </div>
        </span>
      )
  }

  renderMobileLogin() {
    if (!this.props.userProfile.status)
      return (
        <div>
          <button className="sosconf-header-mobile__button" onClick={this.signin}>
            <FormattedMessage
              id="signin"
            />
          </button>
          <button className="sosconf-header-mobile__button" onClick={this.signup}>
            <FormattedMessage
              id="signup"
            />
          </button>
        </div>
      )
    else 
      return (
        <div>
          <button className="sosconf-header-mobile__button" onClick={this.showProfile}>
            <FormattedMessage
              id="profile"
            />
          </button>
          <button className="sosconf-header-mobile__button" onClick={this.logout}>
            <FormattedMessage
              id="logout"
            />
          </button>
        </div>
      )
  }

  render() {
    return (
      <div className="sosconf-header__wrap">
        <div className="sosconf-header-pc">
          <div className="sosconf-header__logo">
            <div className="sosconf-header__logo--svg"></div>
            <div className="sosconf-header__logo--name">sosconf</div>
            <div className="sosconf-header__logo--name-number">2019</div>
          </div>
          <div className="sosconf-header__buttons">

            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/"); }}>
              <FormattedMessage
                id="home"
              />
            </button>
            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/news"); }}>
              <FormattedMessage
                id="news"
              />
            </button>
            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/sponsor"); }}>
              <FormattedMessage
                id="sponsor"
              />
            </button>
            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/speaker"); }}>
              <FormattedMessage
                id="talkerContact"
              />
            </button>
            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/volunteer"); }}>
              <FormattedMessage
                id="volunteerContact"
              />
            </button>
            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/venue"); }}>
              <FormattedMessage
                id="navigation"
              />
            </button>
            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/coming"); }}>
              <FormattedMessage
                id="contact"
              />
            </button>
            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/coming"); }}>
              <FormattedMessage
                id="about"
              />
            </button>
            {this.renderPCHeaderRight()}
          </div>
          <div className="sosconf-header__choose">

          </div>
        </div>

        <div className="sosconf-header-mobile">
          <span className={!this.state.displayMobileBar ? "sosconf-header__menu-icon" : "sosconf-header__menu-icon--vertical"} onClick={() => {
            if (this.state.displayMobileBar) {
              this.setState({
                displayMobileBar: false
              });
              this.closeAllBar();
            } else {
              this.setState({
                displayMobileBar: true
              });
            }
          }}></span>
          <div className="sosconf-header-mobile__logo">
          </div>
          <div className="sosconf-header__logo--name">sosconf</div>
          <div className="sosconf-header__logo--name-number">2019</div>
        </div>

        <div className="sosconf-header-mobile__active" style={
          {
            maxHeight: this.state.displayMobileBar ? '1000px' : '0px',
          }
        }>
          <div className="sosconf-header-mobile__wrap">
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/"); }}>
              <FormattedMessage
                id="home"
              />
            </button>
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/news"); }}>
              <FormattedMessage
                id="news"
              />
            </button>
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/venue"); }}>
              <FormattedMessage
                id="navigation"
              />
            </button>
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/speaker"); }}>
              <FormattedMessage
                id="talkerContact"
              />
            </button>
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/sponsor"); }}>
              <FormattedMessage
                id="sponsor"
              />
            </button>
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/volunteer"); }}>
              <FormattedMessage
                id="volunteerContact"
              />
            </button>
            {this.renderMobileLogin()}
            {/* <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/coming"); }}>
              <FormattedMessage
                id="about"
              />
            </button>
            <button className="sosconf-header-mobile__button" onClick={this.signin}>
              <FormattedMessage
                id="signin"
              />
            </button>
            <button className="sosconf-header-mobile__button" onClick={this.signup}>
              <FormattedMessage
                id="signup"
              />
            </button> */}
            <div className="sosconf-header-mobile__button-group">
              <button className="sosconf-header-mobile__button" onClick={() => {
                this.setState({
                  displayLanguageBar: !this.state.displayLanguageBar
                })
              }}>
                <FormattedMessage
                  id="language"
                />
                <span style={
                  {
                    transform: this.state.displayLanguageBar ? 'rotateZ(0deg)' : 'rotateZ(180deg)',
                  }
                }></span>
              </button>
              <div className="sosconf-header-mobile__button-group-buttons" style={{
                maxHeight: this.state.displayLanguageBar ? '1000px' : '0px',
              }}>
                <button onClick={() => { this.handleChangeToEnglish() }}>
                  <FormattedMessage
                    id="english"
                  />
                </button>
                <button onClick={() => { this.handleChangeToChinese() }}>
                  <FormattedMessage
                    id="chinese"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      language: state.language,
      userProfile: state.userProfile
    }
  },
  {
    changeToChinese,
    changeToEnglish,
    changeUser
  })(withRouter(Header));
