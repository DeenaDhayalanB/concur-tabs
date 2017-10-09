import React, { Component } from 'react';
import '../../App.css';
// var _ = require('lodash');
// import fetch = require('whatwg-fetch');
import fetch from "whatwg-fetch";

class SiteListView extends Component {
  constructor(props) {
      super(props);

      this.state = {
        localChecked: false,
        stagingChecked: false,
        prodChecked: false
      }
        
    }

    toggleLocal = () => {
      this.setState({
        localChecked: !this.state.localChecked,
      })
    }

    toggleStaging = () => {
      this.setState({
        stagingChecked: !this.state.stagingChecked,
      })
    }

    toggleProd = () => {
      this.setState({
        prodChecked: !this.state.prodChecked,
      })
    }

    render () {

        return (
          <div>
            <div className="site-list-view-check text-left">          
              <div className="checkbox-wrapper">
                <p>Show Local</p>
                <input type="checkbox"
                  checked={this.state.localChecked}
                  onChange={this.toggleLocal}
                  className={this.state.localChecked ? 'on' : 'off'}
                />
              </div>
              <div className="checkbox-wrapper">
                <p>Show Staging</p>
                <input type="checkbox"
                  checked={this.state.stagingChecked}
                  onChange={this.toggleStaging}
                />
              </div>
              <div className="checkbox-wrapper">
                <p>Show Production</p>
                <input type="checkbox"
                  checked={this.state.prodChecked}
                  onChange={this.toggleProd}
                />
              </div>
            </div>
          </div>
        );
    }
}


export default SiteListView;

// render custom site