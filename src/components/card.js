import React, { Component } from 'react';
import MarkdownParser from './markdownParser';
import '../themes/card.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let body = "";
        if (this.props.body) {
            body = <div className="sosconf__card-body">
                        {this.props.body}
                    </div>
        } else {
            body = <div className="sosconf__card-body" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
        }

        let cardStyle = {
            width: this.props.width,
            height: this.props.height
        }

        cardStyle = {...cardStyle, ...this.props.customerStyle}

        return (
            <div className="sosconf__card" style={cardStyle}>
                <div className="sosconf__card-wrap">
                    <div className="sosconf__card-header" style={this.props.customerHeaderStyle}>
                        {this.props.header}
                    </div>
                    { body }
                </div>
            </div>
        )
    }
}

export default MarkdownParser(Card);
