import React, { Component } from 'react';
import '../themes/volunteer.css';
import '../themes/animate.css';

class Comming extends Component { 
  render() {
    return (
      <div className="sosconf-volunteer__wrap">
        <div className="sosconf-volunteer__text">
            Welcome to be a volunteer
        </div>
        <div className="sosconf-volunteer__card-group">
            <div className="sosconf-volunteer__card">
                <div className="sosconf-volunteer__card-header">
                    <span>技术组</span>
                </div>
            </div>
            <div className="sosconf-volunteer__card">
                <div className="sosconf-volunteer__card-header">
                    <span>技术组</span>
                </div>
            </div>
            <div className="sosconf-volunteer__card">
                <div className="sosconf-volunteer__card-header">
                    <span>技术组</span>
                </div>
            </div>
        </div>
        <div className="sosconf-volunteer__button-group">
            <a href="./" className="animated bounce">APPLY</a>
        </div>
      </div>
    );
  }
}

export default Comming;