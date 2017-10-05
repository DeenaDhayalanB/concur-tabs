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

    if(sites.length <= 5) {
      sites.push(this.refs.myInput.value);
      this.refs.myInput.value = "";
      localStorage.setItem('sites', JSON.stringify(sites));
      this.setState({ sites: sites });
    } else {
      alert('there are only 6 slots to add!')
    }
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
        <form className="text-left">
          <input className="box-text-input" type="text" ref="myInput" />
          <button className="box-submit" type="submit" onClick={this.add}>Add</button>
        </form>
      </div>
    );
  }
});

export default CustomSiteList;

// add custom site