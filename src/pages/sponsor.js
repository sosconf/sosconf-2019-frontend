import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../themes/sponsor.css';

class Introduce extends Component {

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
                    <p>
                    In order to make the sosconf2019 a genuine international conference, we will invite open source technology enthusiasts majoring in different specialties from high tier universities worldwide. The majority of the presenters, conference staff and audience will be students who will enjoy and contribute to open source. It is us students who have more passion and visions for the future
                    </p>
                    <p>
                    For student presenters from economically depressed countries and regions, we seek to provide convenience, including financial assistance for transportation fees. In addition, we hope to enrich the content of relevant activities and banquets to leave the participants with profound impressions. The conference aimsendeavors to encourage students to understand, participate in and contribute to open source while; meanwhile createings opportunities for students holding belief and actively involved in open source to exchange ideas and experience. Therefore, we welcome sponsorship from relevant enterprises and organizations to ensure the success of this far-reaching global conference.
                    </p>
                    <p>
                    Sponsors will be offered opportunities for the following benefits:
                    </p>
                    <ul>
                        <li>
                        Exchange ideas with eminent academic institutions and outstanding students all over the world<br/>
                        The experience and skills of open source movement possessed by your company and group can be directly displayed in front of core developers engaged in open source projects and elite students around the world, and this will surely spark meaningful conversations between all parties involved.
                        </li>
                        <li>
                        Help enterprises to discover students with great potential and recruit high-quality students in advance<br/>
                        The majority of the participants in the global students open source conference are students, many of whom are academic elites and technical talents from top universities worldwide. The sosconf is sure to help enterprises discover students with great potential and recruit high-quality talents in advance.
                        </li>
                        <li>
                        Help enterprises expand business opportunities<br/>
                        The sponsors can gain access to the most cutting edge and the latest trends and news in the computer industry, and look for opportunities to expand business scale and domain.
                        </li>
                        <li>
                        Help promote brand influence<br/>
                        Your company as a pure contributor to global student open source movement can raise your profiles overseas, and further enhance your value and charm in the overseas market and host place.
                        </li>
                    </ul>
                    <div className="sosconf-sponsor__readAll">
                        <div className="sosconf-sponsor__readAll--button" onClick={this.readAll}>READ ALL</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Introduce;
