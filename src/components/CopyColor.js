import React, { Component } from 'react';
import '../App.css';
import CopyToClipboard from 'react-copy-to-clipboard';

class CopyColor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        copied: false,
         value: ''
     }
  }

  onClick() {
      this.setState({
        copied: !this.state.copied
      })
    }

  render() {

    return (
        <div>
            <div className="row">
                <div className='col-md-4'>
                    <div className="colorBox">
                        <p className="bg-concur-light-blue"></p>
                    </div>                
                    <CopyToClipboard text="bg-concur-light-blue">
                        <p onClick={this.onClick.bind(this)}>bg-concur-light-blue</p>
                    </CopyToClipboard>
                    <CopyToClipboard text="#15b8fe">
                        <p onClick={this.onClick.bind(this)}>#15b8fe</p>
                    </CopyToClipboard>
                    <h4 className={this.state.copied ? 'animated text-center' : ''}>{this.state.copied ? <span style={{color: '#00a9f2'}}>Copied!</span> : null}</h4>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <p className="bg-concur-blue"></p>
                    </div>
                    <p className="colorText">bg-concur-blue</p>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <p className="bg-blue-medium"></p>
                    </div>
                    <p className="colorText">bg-blue-medium</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="colorBox">
                        <p className="bg-concur-darker-blue"></p>
                    </div>
                    <p className="colorText">bg-concur-darker-blue</p>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <p className="bg-concur-modified-dark-blue"></p>
                    </div>
                    <p className="colorText">bg-concur-modified-dark-blue</p>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <p className="bg-blue-dark"></p>
                    </div>
                    <p className="colorText"> bg-blue-dark</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="colorBox">
                        <p className="bg-concur-light-green"></p>
                    </div>
                    <p className="colorText">bg-concur-light-green</p>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <p className="bg-concur-yellow"></p>
                    </div>
                    <p className="colorText">bg-concur-yellow</p>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <p className="bg-burnt-orange"></p>
                    </div>
                    <p className="colorText">bg-burnt-orange</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="colorBox">
                        <p className="bg-concur-grey"></p>
                    </div>
                    <p className="colorText">bg-concur-grey</p>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <p className="bg-concur-light-grey"></p>
                    </div>
                    <p className="colorText">bg-concur-light-grey</p>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <p className="bg-concur-md-grey"></p>
                    </div>
                    <p className="colorText">bg-concur-md-grey</p>
                </div>
            </div>
        </div>
    );
  }

}

export default CopyColor;