import React, { Component } from 'react';
import '../themes/backToTop.css'
import topIcon from '../images/icon_down.png';

class BackToTop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backToTopFlag: false
        }
        let that = this;
        document.addEventListener('scroll', function() {
            let nowScroll = window.pageYOffset;
            let clientHeight = window.innerHeight;
            if (nowScroll > clientHeight) {
                that.setState({
                    backToTopFlag: true
                })
            } else {
                that.setState({
                    backToTopFlag: false
                })
            }
        })
        this.backToTop.bind(this);
    }

    backToTop() {
        const back = () => {
            let nowScroll = window.pageYOffset;
            window.requestAnimationFrame(function () {
                nowScroll = nowScroll - 100;
                window.scrollTo(0, nowScroll);
                if (nowScroll > 0) {
                    back();
                }
            });
        }
        back();
    }

    render() {
        return (
            <div style={{
                opacity: this.state.backToTopFlag?'1':'0',
                height: this.state.backToTopFlag?'50px':'0',
                width: this.state.backToTopFlag?'50px':'0',
                transition: 'all .3s',
            }} className="sosconf__back-to-top-wrap" onClick={this.backToTop}>
                <img  style={{
                opacity: this.state.backToTopFlag?'1':'0',
                height: this.state.backToTopFlag?'40px':'0',
                width: this.state.backToTopFlag?'40px':'0',
                transition: 'all .3s',
                }} src={topIcon}/>
            </div>
        )
    }
}

export default BackToTop;
