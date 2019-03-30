import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import "../themes/sponsorCard.css";

class SponsorCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: this.props.tag
        }
        console.log(this.state.tag)
    }

    render () {
        return (
                <Col className="sosconf__volunteer-card-wrap" span={this.props.span} style={{
                    width: this.props.width,
                    height: this.props.height,
                    color: this.props.color,
                    backgroundColor: this.props.bgColor
                }}  onClick={() => {
                    this.props.callback(this.state.tag);
                }}>
                    <div className="sosconf__volunteer-card-text" style={{
                        marginLeft: '32px',
                        marginTop: '32px',
                        color: this.props.textColor,
                    }}>
                        {this.props.children}
                    </div>
                    <button style={{
                        display: this.props.noDisplay?'none':'block',
                        color: this.props.bgColor,
                        border: "none",
                        width: "32px",
                        height: "32px",
                        background: "white",
                        borderRadius: "50%",
                        position: "absolute",
                        bottom: "20px",
                        right: "10px",
                        fontSize: "20px",
                        lineHeight: "32px",
                        textAlign: "center",
                        fontWeight: "800",
                        cursor: "pointer"
                    }}>></button>
                </Col>
        )
    }
}

export default SponsorCard;