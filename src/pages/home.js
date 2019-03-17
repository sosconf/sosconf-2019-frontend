import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import '../themes/home.css';

class Home extends Component { 
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  readAll(){
      document.getElementsByClassName('sosconf-home__news--container')[0].style.height = 'auto';
      document.getElementsByClassName('sosconf-home__readAll')[0].style.display = 'none';
  }

  render() {
    return (
      <div className="sosconf-home__wrap">
        <div className="sosconf-home__announcement">
          <div className="sosconf-home__title">
            <h1 className="sosconf-home__title--up">sosconf 2019</h1>
            <div className="sosconf-home__title--span"></div>
            <h2 className="sosconf-home__title--down">Students Open Source Conference</h2>
            <div className="sosconf-home__position">
              <h2 className="sosconf-home__position--time">2019.8.15~16</h2>
              <h2 className="sosconf-home__position--position">
              <FormattedMessage
                id="meetingPosition"
              />
              </h2>
            </div>
            <div className="sosconf-home__buttons">
              <button className="sosconf-home__button" onClick={() => {this.props.history.push("/sponsor");}}>
              <FormattedMessage
                id="sponsorship"
              />
              </button>
              <button className="sosconf-home__button--green" onClick={() => { this.props.history.push("/coming"); }}>
              <FormattedMessage
                id="aboutAnnualConvention"
              />
              </button>
            </div>
              <div className="sosconf-home__news">
                  <div className="sosconf-home__news--container">
                      <div className="sosconf-home__news--head">Recent news</div>
                      <div className="sosconf-home__news--more">More news-></div>
                      <div className="sosconf-home__news--block"></div>
                      <h1 className="sosconf-home__news--title">sosconf 2019</h1>
                      <div className="sosconf-home__news--span"></div>
                      <div className="sosconf-home__news--summary">Students’ Own Open-Source Conference</div>

                      <div className="sosconf-home__news--image"></div>
                      <div className="sosconf-home__news--hr"></div>
                      <div className="sosconf-home__news--content">
                        <h3> Students’ Own Open-Source Conference
                        </h3>
                        <p>We have seen numerous amazing student-held hackathons and programming competitions that challenge developers to hone their skills while providing them a platform to make friends. But we have barely seen student-held conferences, especially one that allows students to be more engaged in open-source culture by being at the center of spotlights themselves.</p>
                        <p>With the belief that conference has the best potential to help developers share insights, make connections and advance open-source ideas, Opening Source Org, an international student organization, and Society of Opening Source SC (SOSSC), a student organization at University of Southern California, are collaborating on organizing Student Open Source Conference (sosconf) 2019. The event will take place at University of Southern California this August, with a variety of events in a two-day span, with a free dinner party on the first day. “sosconf is going to be the first student-held, student-centered conference focused on open-source development that welcomes anyone interested from any part of the world,” said Ivan, Executive Director of sosconf 2019 Committee. </p>
                        <br/>
                        <h3>Promoting Student Open-Source Community</h3>
                        <p>Opening Source Org is an international student organization dedicated to developing impactful open-source projects, providing open-source-related technology information and promoting student open-source communities around the world. To address these goals, we decided to organize the very first Student Open-Source Conference (SOSCON) in China in 2018, which turned out to be meaningful and fun. This year, we, together with SOSSC which shares similar visions to ours, are bringing the experience to another continent.</p>
                        <p>Only students are eligible to become speakers, but anyone is welcome to join the party. Travel reimbursements will be provided to all speakers. If you are interested, links for attendee/speaker registration will be open soon. Please stay tuned by joining our email list!</p>
                        <br/>
                        <h3>A Diverse Learning Experience</h3>
                        <p>Today’s student communities have diverse interests in the most exciting technological areas where evolution is a constant. “USC students, even undergraduates who are relatively less experienced, are developing their own interests in specific dimensions,” said Ivan, “and that deserves more attention.” The conference will be divided into several tracks each dedicated to a technological field, such as Machine Learning, Information Security, Decentralization and Arts and Design. There will also be a female-only track. The main track will be located at an auditorium featuring student open-source projects.</p>
                        <br/>
                        <h3>An Experiment</h3>
                        <p>sosconf 2019 is more than the first open-source-centered and student-centered conference. It is shaped to be a template for sosconf’s to come in the future, organized by students in different parts of the world. “This is why the conference will be highly modularized and configurable,” said Ivan. The team is developing tools such as a ticket system, where most settings can be customized in the future. The team is also using Hexang.org, an “open-source lifestyle platform” created by the team, for project management. The process it uses to prepare for the conference will also be provided to student communities around the world for reference and “forking”.</p>
                        <p>“The conference itself is an open-source project overall,” said Ivan, “and we welcome students who identify with our goals to join us to make this happen.” Contacts are now available are the conference’s official website, sosconf.org.</p>
                      </div>
                      <div className="sosconf-home__readAll">
                          <div className="sosconf-home__readAll--button" onClick={this.readAll}>READ ALL</div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
