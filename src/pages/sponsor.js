import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../themes/sponsor.css';

// DOC
import sponsorDocument from '../docs/sponsor.js'; 
import { generatorHTML } from '../util/makedownGenerotor';

class Sponsor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sponsorDoc: generatorHTML(sponsorDocument.zh)
        }
    }

    readAll(){
        document.getElementsByClassName('sosconf-sponsor__wrapper')[0].style.height = 'auto';
        document.getElementsByClassName('sosconf-sponsor__readAll')[0].style.display = 'none';
    }

    render() {
        return (
            <div className="sosconf-sponsor__wrapper">
                <a className="sosconf-sponsor__back" onClick={() => {this.props.history.push("/");}}>Back</a>
                <a className="sosconf-sponsor__more">More</a>
                <h1 className="sosconf-sponsor__title">Sponsorship contact</h1>
                <div className="sosconf-sponsor__span"></div>
                <h3 className="sosconf-sponsor__sub">Welcome to contact sponsors@sosconf.org</h3>
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

export default Sponsor;
