import React, { Component } from 'react';
import { whthRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Card from '../components/card';
import '../themes/personal.css';

class PersonalHeader extends Component {
    render () {
        return (
            <div>
                <h2>Welcome</h2>
                <div className="sosconf-personal__info">
                    <div className="sosconf-personal__img">
                        <img src={this.props.info.imgSrc || ''}></img>
                    </div>
                    <div>
                        <div className="sosconf-personal__info-name">Name</div>
                        <div className="sosconf-personal__info-identity">
                            <span className="sosconf-personal__identity sosconf-personal__identity--volunteer">Volunteer</span>
                            <span className="sosconf-personal__identity sosconf-personal__identity--speaker">Speaker</span>
                            <span className="sosconf-personal__identity sosconf-personal__identity--follower">Follower</span>
                            <span className="sosconf-personal__identity sosconf-personal__identity--attendee">Attendee</span>
                        </div>
                    </div>
                </div>
                <div className="sosconf-personal__div-line">
                </div>
            </div>
        )
    }
}

class PersonalFormBody extends Component {
    constructor (props) {
        super(props);
        
    }

    render () {
        return (
            <div>
                <div className="sosconf-personal__form-body-wrap">
                    <div className="sosconf-personal__form-item">
                        <div className="sosconf-personal__form-label">
                            <span>
                                Email
                            </span>
                        </div>
                        <div className="sosconf-personal__form-input">
                            123
                        </div>
                    </div>

                    <div className="sosconf-personal__form-item">
                        <div className="sosconf-personal__form-label">
                            <span>
                                Team
                            </span>
                        </div>
                        <div className="sosconf-personal__form-input">
                            2132
                        </div>
                    </div>

                    <div className="sosconf-personal__form-item">
                        <div className="sosconf-personal__form-label">
                            <span>
                                P.S.
                            </span>
                        </div>
                        <div className="sosconf-personal__form-input">
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="sosconf-personal__div-line">
                </div>
            </div>
        )
    }
}

class PersonalFormBottom extends Component {
    render () {
        return (
            <div>
                <button className="sosconf-home__button--black sosconf-personal__button sosconf-personal__button--update">UPDATE</button>
                <div className="sosconf-personal__button-group-right">
                    <button className="sosconf-home__button--black sosconf-personal__button sosconf-personal__button--attendee"><span>To be a</span><br/><span>Attendee</span></button>
                    <button className="sosconf-home__button--black sosconf-personal__button sosconf-personal__button--volunteer"><span>To be a</span><br/><span>Volunteer</span></button>
                    <button className="sosconf-home__button--black sosconf-personal__button sosconf-personal__button--speaker"><span>To be a</span><br/><span>Speaker</span></button>
                </div>
            </div>
        )
    }
}

class Personal extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className="sosconf-personal">
                <Card  customerStyle={{
                    width: "700px",
                    minHeight: '600px',
                    margin: '0 auto',
                    marginTop: '140px',
                    marginBottom: '140px',
                    textAlign: 'left',
                    paddingTop: '80px',
                    paddingBottom: '80px',
                    paddingLeft: '80px',
                    paddingRight: '80px'
                }}
                customerHeaderStyle = {{
                    height:0,
                    display:'none'
                    }}
                body={(
                    <div>
                        <div className="sosconf-personal__header">
                            <PersonalHeader info={{}}/>
                        </div>
                        <div className="sosconf-personal__form-body">
                            <PersonalFormBody info={{}}/>
                        </div>
                        <div className="sosconf-personal__form-bottom">
                            <PersonalFormBottom info={{}}/>
                        </div>
                    </div>
                )}>
                </Card>
            </div>
        )
    }
}

export default Personal;