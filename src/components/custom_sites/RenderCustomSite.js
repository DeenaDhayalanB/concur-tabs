import React, { Component } from 'react';
import '../../App.css';
// var _ = require('lodash');
// import fetch = require('whatwg-fetch');
import fetch from "whatwg-fetch";

class RenderSiteList extends Component {

    constructor(props) {
        super(props);

        if(localStorage.getItem('sites')) {
            this.state = {
              siteCondition: JSON.parse(localStorage.getItem('sites')),
              valueOne: 'nothing',
              data: false
            }
          } else {
            this.state = {
              siteCondition : ["www.concur.com"],
              valueOne: 'something'
            }
          }

          this.receiveData = this.receiveData.bind(this);
    }

     receiveData(data) {
      this.setState({data});
     }

    removeSite(site) {
        var newState = this.state.siteCondition;
        var index = newState.indexOf(site)

        if (newState.indexOf(site) > -1) {
            newState.splice(index, 1);
            // removes site from localstorage
            localStorage.setItem('sites', JSON.stringify(newState))
            this.setState({siteCondition: newState})
        }
        
    }

    render () {
        const siteList = this.state.siteCondition.map((sites, i) => {
            var current_url = this.state.siteCondition[i];
            var url_pattern = current_url.replace(/https:\/\/|www\.|\.com/gi, "")

            current_url[0].toUpperCase();
            
            
          return <div className="col-md-6">
            <li className={'custom-slots text-center custom-site-slot-'+ i} key={i}>
                <p className="remove-site" onClick={this.removeSite.bind(this, sites)}>X</p>
                <p><a href={this.state.siteCondition[i]}>{url_pattern}</a></p>
            </li>
          </div>;
        });
        return (
          <div>
          {this.state.data}
            <ul>
                {siteList}
            </ul>
          </div>
        );
    }
}


export default RenderSiteList;

// render custom site