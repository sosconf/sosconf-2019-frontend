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
                    <img src="./"></img>
                    <div>
                    </div>
                </div>
                <div className="sosconf-personal__div-line">
                </div>
            </div>
        )
    }
}

class PersonalFormBody extends Component {
    render () {
        return (
            <div>

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
                <button className="sosconf-home__button--black">UPDATE</button>
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
                    width: "600px",
                    height: '700px',
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
                            <PersonalHeader />
                        </div>
                        <div className="sosconf-personal__form-body">
                            <PersonalFormBody />
                        </div>
                        <div className="sosconf-personal__form-bottom">
                            <PersonalFormBottom />
                        </div>
                    </div>
                )}>
                </Card>
            </div>
        )
    }
}

export default Personal;