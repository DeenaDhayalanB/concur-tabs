import React, { Component } from 'react';
import '../App.css';

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
              <div className="port-number">
                <h4 className="text-left">Change your port number</h4>
                <form className="box-form text-left" onSubmit={this.handleSubmit}>
                  <input id="box-text-input" type="text" value={this.state.value} ref="boxInput" onChange={this.handleChange} />
                  <input id="box-submit" type="submit" value="Submit" />
                </form> 
              </div> 
            </div>
          </div> 
        </div>
      </div>        
    )
  }
}

export default AdminMenu;
