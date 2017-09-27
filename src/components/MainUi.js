import React, { Component } from 'react';
import '../App.css';
import AdminMenu from './AdminMenu';
// import StagingUrls from './StagingUrls';
import {RenderLocalBoxList} from './RenderSiteUrls';
import RenderStagingList from './RenderSiteUrls';
import {RenderProdList} from './RenderSiteUrls.jsx';
import CopyColor from './CopyColor';
import RenderCustomSite from './custom_sites/RenderCustomSite';

class MainUi extends React.Component {
  constructor() {
    super();
    this.state = {
      showAdminMenu: false,
      condition: false,
    }
  }

  render() {
    var sites = JSON.parse(localStorage.getItem('sites')) || [];

    return (
      <div className="main">
        <div className="main-header">
          <div className="container">
            <div className="col-md-6">
              <img src="https://www.concur.com/sites/all/modules/custom_concur/concur_responsive_menu/images/desktop-logo.svg" />
            </div>
            <div className="col-md-6 text-right">
              <div className="admin-cog text-right">
              </div>
              <AdminMenu />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="site-wrapper">
            <div className="col-md-12">
              <div className="col-md-4">
                <RenderLocalBoxList />
              </div>
              <div className="col-md-4">
                <RenderStagingList />
              </div>
              <div className="col-md-4">
                <RenderProdList /> 
              </div>               
            </div> 
          </div>
          <div className="copy-color-wrapper">
            <div className="col-md-12 color-wrapper">
              <div className="col-md-6">
                <CopyColor />
              </div>
              <div className="col-md-6">
                <RenderCustomSite sites={sites}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainUi;
