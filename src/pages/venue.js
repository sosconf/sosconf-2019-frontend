import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ProgressHOC from '../components/progressHOC';
import "../themes/venue.css"

class Venue extends Component { 
  componentDidMount() {
    
  }

  render() {
    return (
      <div class="sosconf__venue" style={{
          width: "100%",
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '40px',
          paddingBottom: '40px'
      }}>
        <div style={{
            width:'80%'
        }}>
            <iframe width="100%" height="800" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-118.295556306839%2C34.01783370512139%2C-118.28139424324037%2C34.02604130765942&amp;layer=mapnik" style={{border: "1px solid black",margin:"0 auto"}}></iframe><br/>
            <small>
                <a href="https://www.openstreetmap.org/#map=17/34.02194/-118.28848">
                  <FormattedMessage id="largerMap"/>
                </a>
            </small>
        </div>
      </div>
    );
  }
}

export default ProgressHOC(Venue);