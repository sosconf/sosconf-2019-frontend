import React, { Component } from 'react';
import ProgressHOC from '../components/progressHOC';
import '../themes/coming.css';

class Comming extends Component { 
  render() {
    return (
      <div className="sosconf-comming__wrap">
        <p className="sosconf-coming__text">Coming Soon</p>
      </div>
    );
  }
}

export default ProgressHOC(Comming);
