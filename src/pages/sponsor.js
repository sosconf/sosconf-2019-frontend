import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import SponsorCard from '../components/sponsorCard';
import ProgressHOC from '../components/progressHOC';
import { Row, Modal } from 'antd';
import '../themes/sponsor.css';

// DOC
import sponsorDocument from '../docs/sponsor.js'; 
import { generatorHTML } from '../util/makedownGenerotor';
import { connect } from 'react-redux';

class Sponsor extends Component {

    constructor(props) {
        super(props);
        if (this.props.language == 'en') {
            let sponsorDoc = generatorHTML(sponsorDocument.en) + `
                <a class="sosconf__sponsor-download" href="https://sosconf.org/wp-content/uploads/2019/06/sosconf-2019-sponsorship-proposal-en.pdf">Download <span>Call For Sponsors.pdf</span></a>
            `
            this.state= {
                sponsorDoc,
                open: false
            }
        } else {
            let sponsorDoc = generatorHTML(sponsorDocument.zh) + `
                <p style="text-align:right">注：最终解释权归学生开源年会组委会所有</p>
                <p style="text-align:right">编辑：关炳心</p>
                <p style="text-align:right">指导：李昊轩</p>
                <a class="sosconf__sponsor-download" href="https://sosconf.org/wp-content/uploads/2019/05/sosconf-2019-sponsorship-proposal-zh-hans.pdf">Download <span>Call For Sponsors.pdf</span></a>
            `
            this.state= {
                sponsorDoc
            }
        }
    }

    componentWillReceiveProps(nextState) {
        if (nextState.language == 'en') {
            let sponsorDoc = generatorHTML(sponsorDocument.en) + `
                <a class="sosconf__sponsor-download" href="https://sosconf.org/wp-content/uploads/2019/06/sosconf-2019-sponsorship-proposal-en.pdf">Download <span>Call For Sponsors.pdf</span></a>
            `
            this.setState({
                sponsorDoc
            })
        } else {
            let sponsorDoc = generatorHTML(sponsorDocument.zh) + `
                <p style="text-align:right">注：最终解释权归学生开源年会组委会所有</p>
                <p style="text-align:right">编辑：关炳心</p>
                <p style="text-align:right">指导：李昊轩</p>
                <a class="sosconf__sponsor-download" href="https://sosconf.org/wp-content/uploads/2019/05/sosconf-2019-sponsorship-proposal-zh-hans.pdf">Download <span>Call For Sponsors.pdf</span></a>
            `
            this.setState({
                sponsorDoc
            })
        }
    }

    readAll= () => {
        this.setState({
            open: true
        })
    }

    render() {
        return (
            <div className={`sosconf-sponsor__wrapper ${this.state.open?'sosconf-sponsor__wrapper--open':''}`}>
                <h1 className="sosconf-sponsor__title"><FormattedMessage id="sponsorshipContact"/></h1>
                <div className="sosconf-sponsor__span"></div>
                <h3 className="sosconf-sponsor__sub"><FormattedMessage id="welcomeContact"/> sponsors@sosconf.org</h3>
                <div className="sosconf-sponsor__content">
                    <div  dangerouslySetInnerHTML={{__html: this.state.sponsorDoc}}>
                    </div>
                    <div className={`sosconf-sponsor__readAll ${this.state.open?'sosconf-sponsor__readAll--open':''}`}>
                        <div className="sosconf-sponsor__readAll--button" onClick={this.readAll}>READ ALL</div>
                    </div>
                </div>
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
)(Sponsor));
