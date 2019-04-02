import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import '../themes/sponsor.css';

// DOC
import sponsorDocument from '../docs/sponsor.js'; 
import { generatorHTML } from '../util/makedownGenerotor';
import { connect } from 'react-redux';

class Sponsor extends Component {

    constructor(props) {
        super(props);
        if (this.props.language == 'en') {
            this.state = {
                sponsorDoc: generatorHTML(sponsorDocument.en)
            }
        } else {
            this.state = {
                sponsorDoc: generatorHTML(sponsorDocument.zh)
            }
        }
    }

    componentWillReceiveProps(nextState) {
        if (nextState.language == 'en') {
            this.setState({
                sponsorDoc:generatorHTML(sponsorDocument.en)
            })
        } else {
            this.setState({
                sponsorDoc:generatorHTML(sponsorDocument.zh)
            })
        }
    }

    readAll(){
        document.getElementsByClassName('sosconf-sponsor__wrapper')[0].style.height = 'auto';
        document.getElementsByClassName('sosconf-sponsor__readAll')[0].style.display = 'none';
    }

    render() {
        return (
            <div className="sosconf-sponsor__wrapper">
                {/* <a className="sosconf-sponsor__back" onClick={() => {this.props.history.push("/");}}><FormattedMessage id="back"/></a> */}
                {/* <a className="sosconf-sponsor__more"><FormattedMessage id="more"/></a> */}
                <h1 className="sosconf-sponsor__title"><FormattedMessage id="sponsorshipContact"/></h1>
                <div className="sosconf-sponsor__span"></div>
                <h3 className="sosconf-sponsor__sub"><FormattedMessage id="welcomeContact"/> sponsors@sosconf.org</h3>
                <div className="sosconf-sponsor__content">
                    <div  dangerouslySetInnerHTML={{__html: this.state.sponsorDoc}}>
                    </div>
                    <div className="sosconf-sponsor__readAll">
                        <div className="sosconf-sponsor__readAll--button" onClick={this.readAll}>READ ALL</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            language: state.language
        }
    }
)(Sponsor);
