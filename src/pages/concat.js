import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card.js';
import ProgressHOC from '../components/progressHOC';
import '../themes/contact.css';

class Concat extends Component {
    render () {
        if (this.props.language == 'zh')
            return (
                <div>
                    <Card
                    customerStyle={{
                        width: '800px',
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
                            <h1>联系我们</h1>
                            <div className="sosconf__about-header-break"></div>
                        </div>
                    )}
                    body={(
                        <div className="sosconf__about-card-content  sosconf__contact-card-content">
                            <p>
                            <a href="https://2019.sosconf.org">Official Website</a><br/>
                            <a href="https://fb.com/sosconf">Facebook</a><br/>
                            <a href="https://twitter.com/sosconf">Twitter</a><br/>
                            <a href="https://t.me/sosconf">Telegram Group</a><br/>
                            <a href="https://join.slack.com/t/sosconf2019/shared_invite/enQtNjM3NjcxNDc5NDMxLTBkMzA3NTBlZDllNzYyY2RiNjVjYzY2NzQ0MjE3ODEzNWU0NmE0YzNhYTBjYzc0NzVkMDdkYjE4OTE1MTgxNDU">Slack Group</a>
                            </p>
                        </div>
                    )}/>
                </div>
            ) 
        else {
            return (
                <div>
                    <Card
                    customerStyle={{
                        width: '800px',
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
                            <h1>Concat us</h1>
                            <div className="sosconf__about-header-break"></div>
                        </div>
                    )}
                    body={(
                        <div className="sosconf__about-card-content sosconf__contact-card-content">
                            <p>
                                <a href="https://2019.sosconf.org">Official Website</a><br/>
                                <a href="https://fb.com/sosconf">Facebook</a><br/>
                                <a href="https://twitter.com/sosconf">Twitter</a><br/>
                                <a href="https://t.me/sosconf">Telegram Group</a><br/>
                                <a href="https://join.slack.com/t/sosconf2019/shared_invite/enQtNjM3NjcxNDc5NDMxLTBkMzA3NTBlZDllNzYyY2RiNjVjYzY2NzQ0MjE3ODEzNWU0NmE0YzNhYTBjYzc0NzVkMDdkYjE4OTE1MTgxNDU">Slack Group</a>
                            </p>
                        </div>
                    )}/>
                </div>
            )
        }
    }
}

export default ProgressHOC(connect(state => {
    return {
        language: state.language
    }
})(Concat));