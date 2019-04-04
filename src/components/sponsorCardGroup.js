import { Row } from 'antd';
import React, { Component } from 'react';
import SponsorCard from '../components/sponsorCard';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import iconArrow from '../images/icon_down.png';

// DOC
import volunteerDocument from '../docs/volunteer.js'; 
import { generatorHTML } from '../util/makedownGenerotor';

import { TransitionGroup, CSSTransition } from "react-transition-group";

class SponsorGroup extends Component {
    constructor(props) {
        super(props)
        let document = {};
        Object.keys(volunteerDocument[this.props.language]).forEach(key => {
            document[key] = generatorHTML(volunteerDocument[this.props.language][key]);
        })
        this.state = {
            menu: false,
            ...document
        }
        this.showMenu.bind(this);
        this.renderCardGroup.bind(this);
        this.renderMenuGroup.bind(this);
        this.goBack.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let document = {};
        Object.keys(volunteerDocument[nextProps.language]).forEach(key => {
            document[key] = generatorHTML(volunteerDocument[nextProps.language][key]);
        })
        this.setState({
            ...document
        })
    }

    /**
     * 
     * @param {*} tag 要查看的选项卡
     */
    showMenu(tag) {
        this.setState({
            menu: true,
            tag: tag
        })
    }

    goBack() {
        this.setState({
            menu: false,
            tag: ''
        })
    }

    renderChineseCardGroup() {
        return (
            <div className="sosconf__sponsor-group" style={{
                boxShadow: "3px 3px 3px #656565",
                width: this.props.width,
                height: this.props.height,
                ...this.props.style
            }}>
                <Row>
                    <SponsorCard span={12} bgColor="#FFE666" height={240} noDisplay={true}>
                        <h2 style={{
                            color:'black'
                        }}>欢迎加入学生开源年会<br/>成为我们的伙伴 ></h2>
                    </SponsorCard>
                    <SponsorCard span={6} bgColor="#66CCFF" height={240}  callback={this.showMenu.bind(this)} tag="各类答疑">
                        <h2>各类答疑</h2>
                    </SponsorCard>
                    <SponsorCard span={6} bgColor="#FF6680" height={240}  callback={() => {window.location.href="http://sosconf2019.mikecrm.com/pS483cs"}}>
                        <h2>前往填写<br/>申请表单</h2>
                    </SponsorCard>
                </Row>

                <Row>
                    <SponsorCard span={6} bgColor="#4285F4" height={240}  callback={this.showMenu.bind(this)} tag="技术组">
                        <h2>技术组</h2>
                    </SponsorCard>
                    <SponsorCard span={6} bgColor="#37C28B" height={240}  callback={this.showMenu.bind(this)} tag="设计组">
                        <h2>设计组</h2>
                    </SponsorCard>
                    <SponsorCard span={6} bgColor="#7E57C2" height={240}  callback={this.showMenu.bind(this)} tag="市场组">
                        <h2>市场组</h2>
                    </SponsorCard>
                    <SponsorCard span={6} bgColor="#F980AB" height={240}  callback={this.showMenu.bind(this)} tag="赞助组">
                        <h2>赞助组</h2>
                    </SponsorCard>
                </Row>

                <Row>
                    <SponsorCard span={6} bgColor="#FAA726" height={240}  callback={this.showMenu.bind(this)} tag="议程组">
                        <h2>议程组</h2>
                    </SponsorCard>
                    <SponsorCard span={6} bgColor="#F85043" height={240}  callback={this.showMenu.bind(this)} tag="机动组">
                        <h2>机动组</h2>
                    </SponsorCard>
                    <SponsorCard span={6} bgColor="#F86880" height={240}  callback={this.showMenu.bind(this)} tag="志愿者需知">
                        <h2>志愿者需知</h2>
                    </SponsorCard>
                    <SponsorCard span={6} bgColor="#33B569" height={240}  callback={this.showMenu.bind(this)} tag="Conference Affairs Team">
                        <h2 style={{
                            wordBreak: 'breakAll'
                        }}>Conference Affairs Team</h2>
                    </SponsorCard>
                </Row>

                <Row>
                    <SponsorCard span={24} bgColor="rgb(162, 128, 74)" height={240}  noDisplay={true}>
                        <h2>volunteers@sosconf.org</h2>
                    </SponsorCard>
                </Row>
            </div>
        )
    }

    renderEnglishCardGroup() {
        return (
            <div className="sosconf__sponsor-group" style={{
                boxShadow: "3px 3px 3px #656565",
                width: this.props.width,
                height: this.props.height,
                ...this.props.style
            }}>
                <Row>
                    <SponsorCard span={12} bgColor="#FFE666" height={240} noDisplay={true}>
                        <h2 style={{
                            color:'black'
                        }}>Welcome to Join Volunteers Team ></h2>
                    </SponsorCard>
                    <SponsorCard span={12} bgColor="#FF6680" height={240}  callback={() => {window.location.href="http://sosconf2019.mikecrm.com/pS483cs"}}>
                        <h2>Go to fill out the application form</h2>
                    </SponsorCard>
                </Row>

                <Row>
                    <SponsorCard span={6} bgColor="#4285F4" height={240}  callback={this.showMenu.bind(this)} tag="Agenda Team">
                        <h2>Agenda Team</h2>
                    </SponsorCard>
                    <SponsorCard span={6} bgColor="#37C28B" height={240}  callback={this.showMenu.bind(this)} tag="Media Team">
                        <h2>Media Team</h2>
                    </SponsorCard>
                    <SponsorCard span={6} bgColor="#7E57C2" height={240}  callback={this.showMenu.bind(this)} tag="Sponsorship Team">
                        <h2>Sponsorship Team</h2>
                    </SponsorCard>
                    <SponsorCard span={6} bgColor="#33B569" height={240}  callback={this.showMenu.bind(this)} tag="Conference Affairs Team">
                        <h2 style={{
                            wordBreak: 'breakAll'
                        }}>Conference Affairs Team</h2>
                    </SponsorCard>
                </Row>

                <Row>
                    <SponsorCard span={24} bgColor="rgb(162, 128, 74)" height={240}  noDisplay={true}>
                        <h2>volunteers@sosconf.org</h2>
                    </SponsorCard>
                </Row>
            </div>
        )
    }

    renderCardGroup() {
        return this.props.language=='en'?
        this.renderEnglishCardGroup():
        this.renderChineseCardGroup();
    }

    renderMenuGroup() {
        return (
            <div className="sosconf__volunteer-menu-group">
                <button onClick={() => {this.goBack()}}>
                    <img src={iconArrow} style={{
                        background: "#00C79B",
                        borderRadius: '50%',
                        padding: '5px',
                        height: "30px",
                        width: '30px',
                        transform: 'rotateZ(270deg)',
                        marginRight: '5px'
                    }}/>
                    <FormattedMessage id="back"/>
                </button>
                <h1 className="sosconf__volunteer-menu-group-title">{this.state.tag}</h1>
                <div className="sosconf__volunteer-menu-group-split"></div>
                <div className="sosconf__volunteer-menu-group-text" dangerouslySetInnerHTML={{__html: this.state[this.state.tag]}}>

                </div>
            </div>
        )
    }

    render() {
        let template = this.state.menu?this.renderMenuGroup():this.renderCardGroup();
        return (
            <div>
                <TransitionGroup>
                    <CSSTransition
                        key={this.state.tag}
                        classNames="fade"
                        timeout={1000}
                    >
                        {template}
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default connect(
    state => {
        return {
            language: state.language
        }
    }
)(SponsorGroup);