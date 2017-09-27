import React, { Component } from 'react';
import '../../App.css';
var urlConfigs = require('../../static_data/site_urls');

var CustomSiteItem = React.createClass({
  done: function() {
    this.props.done(this.props.site);
  },

  render: function() {
    return <li onClick={this.done}>{this.props.site}</li>
  }
});

var CustomSiteList = React.createClass({
  getInitialState: function() {
    return {
      sites: this.props.sites
    };
  },

  add: function() {
    var sites = this.props.sites;
    sites.push(this.refs.myInput.value);
    this.refs.myInput.value = "";
    localStorage.setItem('sites', JSON.stringify(sites));
    this.setState({ sites: sites });
  },

  done: function(site) {
    var sites = this.props.sites;
    sites.splice(sites.indexOf(site), 1);
    localStorage.setItem('sites', JSON.stringify(sites));
    this.setState({ sites: sites });
  },

  render: function() {
    return (
      <div>
        <h1>Custom Sites</h1>
        <ul>
        {
          this.state.sites.map(function(site, id) {
            return <CustomSiteItem site={site} key={id} done={this.done} />
          }.bind(this))
        }
        </ul>
        <input type="text" ref="myInput" />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
});

export default CustomSiteList;
