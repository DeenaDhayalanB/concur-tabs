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
        prodChecked: false,
      }

      this.toggleLocal = this.toggleLocal.bind(this);
      this.toggleStaging = this.toggleStaging.bind(this);
      this.toggleProd = this.toggleProd.bind(this);
        
    }

    toggleLocal = () => {

      this.setState({
        localChecked: !this.state.localChecked,
      })
      console.log(this.state.localChecked)
      localStorage.setItem('showLocal', JSON.stringify(this.state.localChecked))
    }

    toggleStaging = () => {

      this.setState({
        stagingChecked: !this.state.stagingChecked,
      })
      console.log(this.state.stagingChecked)
      localStorage.setItem('showStaging', JSON.stringify(this.state.stagingChecked))
    }

    toggleProd = () => {

      this.setState({
        prodChecked: !this.state.prodChecked,
      })
      console.log(this.state.prodChecked)
      localStorage.setItem('showProd', JSON.stringify(this.state.prodChecked))
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
                  className={this.state.stagingChecked ? 'on' : 'off'}
                />
              </div>
              <div className="checkbox-wrapper">
                <p>Show Production</p>
                <input type="checkbox"
                  checked={this.state.prodChecked}
                  onChange={this.toggleProd}
                  className={this.state.prodChecked ? 'on' : 'off'}
                />
              </div>
            </div>
          </div>
        );
    }
}


export default SiteListView;

// render custom site