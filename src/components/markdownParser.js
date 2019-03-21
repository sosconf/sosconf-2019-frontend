import React, { Component } from 'react';
import { generatorHTML } from '../util/makedownGenerotor';

export default function MarkdownParser (WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                markdown:this.props.markdown
            }
        }

        componentWillMount() {
            if (this.props.markdown) {
                this.setState({
                    text:generatorHTML(this.state.markdown)
                })
            }
        }
    
        render() {
            return (
                <WrappedComponent text={this.state.text} {...this.props}/>
            )
        }
    }
}
