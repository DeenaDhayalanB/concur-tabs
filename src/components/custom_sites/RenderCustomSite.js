import React, { Component } from 'react';
import '../../App.css';
import CustomSiteList from './AddCustomSite';


var RenderSiteList = React.createClass({

  render: function() {
    var sites = JSON.parse(localStorage.getItem('sites')) || [];

    return (
      <div>
        <CustomSiteList sites={sites}/>
      </div>
    );
  }
});


export default RenderSiteList;