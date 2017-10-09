import React, { Component } from 'react';
import '../App.css';
import CustomSiteList from './custom_sites/AddCustomSite';
import SiteListView from './customize-tab/SiteListView';

class AdminMenu extends React.Component {
      constructor(props) {
      super(props);

      if(localStorage.getItem('boxNumber')) {
        this.state = {
          closeAdminMenu: false,
          boxCondition : JSON.parse(localStorage.getItem('boxNumber')),
          showAdminMenu: false
        }
      } else {
        this.state = {
          value1: 'no state set',
          closeAdminMenu: false,
          showAdminMenu: false
        }
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    onClick(e){
      e.preventDefault();
      this.setState({
        closeAdminMenu: !this.state.closeAdminMenu,
        showAdminMenu: !this.state.closeAdminMenu
      })
    }

    handleChange(event) {
      this.setState({ value: event.target.value }, function () {
        localStorage.setItem('boxNumber', JSON.stringify(this.state)); 
      });
    } 

    handleSubmit(event) {
      // event.preventDefault();
      alert('You have successfully changed your box to: ' + this.state.value);
      document.getElementByClassName('.local-wrapper a').href = this.state.value;      
    }

  render() {
    var sites = JSON.parse(localStorage.getItem('sites')) || [];
    return (
      <div>
        <a onClick={this.onClick.bind(this)} href='#'><i className="fa fa-cog fa-2x"></i></a>
        <div className={this.state.showAdminMenu ? "admin-menu animated" : ""}>
          <div className= {this.state.closeAdminMenu ? "" : "hideMenu"}>
            <div className="header">
              <h1>Admin Menu</h1>
              <div className="closeMenu" id="close-settings" onClick={this.onClick.bind(this)}>✕</div>
            </div>
            <div className="admin-content">
              <div className="admin-section">
                <h4 className="text-left">Change your port number</h4>
                <form className="box-form text-left" onSubmit={this.handleSubmit}>
                  <input className="box-text-input" type="text" value={this.state.value} ref="boxInput" onChange={this.handleChange} />
                  <input className="box-submit" type="submit" value="Submit" />
                </form> 
              </div> 
              <div className="custom-sites">
                <div className="admin-section">
                  <h4 className="text-left">Custom Sites</h4>
                  <CustomSiteList sites={sites}/>
                </div>
              </div>
              <div className="customize-tab">
                <div className="admin-section">
                  <h4 className="text-left">Customize Your Tab</h4>
                  <SiteListView />
                </div>
              </div>
              <div className="support">
                <div className="admin-section text-left">
                  <h4 id="support-title">Support</h4>
                  <p>
                    <button className="reset-button">Reset Defaults</button>
                  </p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>        
    )
  }
}

export default AdminMenu;
