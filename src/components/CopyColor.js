import React, { Component } from 'react';
import '../App.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip'

class CopyColor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        copied: false,
         value: ''
     }
  }

  render() {

    return (
        <div>
            <div className="row">
                <div className='col-md-4'>
                    <div className="colorBox">
                    <CopyToClipboard text="#15b8fe">
                        <p data-tip="Psst.. Click me to copy the hex!" className="bg-concur-light-blue"></p>
                    </CopyToClipboard>
                    </div>            
                    <CopyToClipboard text="bg-concur-light-blue">
                        <p>bg-concur-light-blue</p>
                    </CopyToClipboard>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <CopyToClipboard text="#00a9f2">
                            <p data-tip="Psst.. Click me to copy the hex!" className="bg-concur-blue"></p>
                        </CopyToClipboard>
                    </div>
                    <CopyToClipboard text="bg-concur-blue">
                        <p className="colorText">bg-concur-blue</p>
                    </CopyToClipboard>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <CopyToClipboard text="#0078c9">
                            <p data-tip="Psst.. Click me to copy the hex!" className="bg-blue-medium"></p>
                        </CopyToClipboard>
                    </div>
                    <CopyToClipboard text="bg-concur-medium">
                        <p className="colorText">bg-blue-medium</p>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="colorBox">
                        <CopyToClipboard text="#0b59a9">
                            <p data-tip="Psst.. Click me to copy the hex!" className="bg-concur-darker-blue"></p>
                        </CopyToClipboard>
                    </div>
                    <CopyToClipboard text="bg-concur-darker-blue">
                        <p className="colorText">bg-concur-darker-blue</p>
                    </CopyToClipboard>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <CopyToClipboard text="#014a7d">
                            <p data-tip="Psst.. Click me to copy the hex!" className="bg-concur-modified-dark-blue"></p>
                        </CopyToClipboard>
                    </div>
                    <CopyToClipboard text="bg-concur-modified-dark-blue">
                        <p className="colorText">bg-concur-modified-dark-blue</p>
                    </CopyToClipboard>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <CopyToClipboard text="#004a7d">
                            <p data-tip="Psst.. Click me to copy the hex!" className="bg-blue-dark"></p>
                        </CopyToClipboard>
                    </div>
                    <CopyToClipboard text="bg-blue-dark">
                        <p className="colorText"> bg-blue-dark</p>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="colorBox">
                        <CopyToClipboard text="bg-concur-light-green">
                            <p data-tip="Psst.. Click me to copy the hex!" className="bg-concur-light-green"></p>
                        </CopyToClipboard>
                    </div>
                    <CopyToClipboard text="#89bf42">
                        <p className="colorText">bg-concur-light-green</p>
                    </CopyToClipboard>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <CopyToClipboard text="#f4a900">
                            <p data-tip="Psst.. Click me to copy the hex!" className="bg-concur-yellow"></p>
                        </CopyToClipboard>
                    </div>
                    <CopyToClipboard text="bg-concur-yellow">
                        <p className="colorText">bg-concur-yellow</p>
                    </CopyToClipboard>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <CopyToClipboard text="#d25533">
                            <p data-tip="Psst.. Click me to copy the hex!" className="bg-burnt-orange"></p>
                        </CopyToClipboard>
                    </div>
                    <CopyToClipboard text="bg-burnt-orange">
                        <p className="colorText">bg-burnt-orange</p>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="colorBox">
                        <CopyToClipboard text="#444">
                            <p data-tip="Psst.. Click me to copy the hex!" className="bg-concur-grey"></p>
                        </CopyToClipboard>
                    </div>
                    <CopyToClipboard text="bg-concur-grey">
                        <p className="colorText">bg-concur-grey</p>
                    </CopyToClipboard>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <CopyToClipboard text="#f0f0f0">
                            <p data-tip="Psst.. Click me to copy the hex!" className="bg-concur-light-grey"></p>
                        </CopyToClipboard>
                    </div>
                    <CopyToClipboard text="bg-concur-light-grey">
                        <p className="colorText">bg-concur-light-grey</p>
                    </CopyToClipboard>
                </div>
                <div className="col-md-4">
                    <div className="colorBox">
                        <CopyToClipboard text="#f6f6f6">
                            <p data-tip="Psst.. Click me to copy the hex!" className="bg-concur-md-grey"></p>
                        </CopyToClipboard>
                    </div>
                    <CopyToClipboard text="bg-concur-md-grey">
                        <p className="colorText">bg-concur-md-grey</p>
                    </CopyToClipboard>
                </div>
            </div>
            <ReactTooltip />
        </div>
    );
  }

}

export default CopyColor;