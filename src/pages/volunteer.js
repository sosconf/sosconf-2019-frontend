import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Row } from 'antd';
import VolunteerGroup from '../components/sponsorCardGroup';
import ProgressHOC from '../components/progressHOC';

import '../themes/volunteer.css';
import '../themes/animate.css';

class Volunteer extends Component { 
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="sosconf-volunteer__wrap">
        <VolunteerGroup style={{
            margin: "70px auto",
        }}></VolunteerGroup>
      </div>
    );
  }
}

export default ProgressHOC(connect(
    state => {
        return {
            language: state.language
        }
    }
)(Volunteer));