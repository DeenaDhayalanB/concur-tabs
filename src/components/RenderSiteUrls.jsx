import React, { Component } from 'react';
import '../App.css';
import AdminMenu from './AdminMenu';
var urlConfigs = require('../static_data/site_urls');
var setLocalUrls = urlConfigs.localSiteData();
var setStagingUrls = urlConfigs.stagingSiteData();
var setProdUrls = urlConfigs.prodSiteData();


export class RenderLocalBoxList extends Component {

  constructor(props) {
      super(props);
        this.state = {
          showLocalList: false,
          adminShowLocal: JSON.parse(localStorage.getItem('showLocal'))
        }
      }

    componentDidMount () {
      if(this.state.adminShowLocal === false) {
        this.setState({
          showLocalList: true
        })
      }
    }

    onClick(e) {
      e.preventDefault();
      this.setState({
        showLocalList: !this.state.showLocalList,
      })
    }

    render () {

      return (
        <div className="local-wrapper">
          <h3>Local Sites  <a onClick={this.onClick.bind(this)} href='#'>
            <i className={this.state.showLocalList ? 'fa fa-chevron-down' : 'fa fa-chevron-right'}></i>
            </a>
          </h3>
          <div>
            {this.state.showLocalList && <FilterLocalUrls />}
          </div>
        </div>   
      )
    }
}

export class RenderStagingList extends Component {

  constructor(props) {
      super(props);
        this.state = {
          showStagingList: false
        }
      }

    onClick(e) {
      e.preventDefault();
      this.setState({
        showStagingList: !this.state.showStagingList
      })
    }

    render () {
      
      return (
        <div className="staging-wrapper">
          <h3>Staging Sites  <a onClick={this.onClick.bind(this)} href='#'>
            <i className={this.state.showStagingList ? 'fa fa-chevron-down' : 'fa fa-chevron-right'}></i>
            </a>
          </h3>
          <div>
            {this.state.showStagingList && <FilterStagingUrls />}
          </div>
        </div>   
      )
    }
}

export class RenderProdList extends Component {

  constructor(props) {
      super(props);
        this.state = {
          showProdList: false
        }
      }

    onClick(e) {
      e.preventDefault();
      this.setState({
        showProdList: !this.state.showProdList
      })
    }

    render () {

      return (
        <div className="staging-wrapper">
          <h3>Production Sites  <a onClick={this.onClick.bind(this)} href='#'>
            <i className={this.state.showProdList ? 'fa fa-chevron-down' : 'fa fa-chevron-right'}></i>
            </a>
          </h3>
          <div>          
            {this.state.showProdList && <FilterProdUrls />}
          </div>
        </div>   
      )
    }
}

class FilterLocalUrls extends Component {
 
    constructor(props) {
      super(props);
      // this.state = {value: ''};

      if(localStorage.getItem('boxNumber')) {
        this.state = {
          setLocalUrls: setLocalUrls,
          boxCondition : JSON.parse(localStorage.getItem('boxNumber')),
          result: setLocalUrls,
        }
      } else {
        this.state = {
          setLocalUrls: setLocalUrls,
          result: setLocalUrls,
          boxCondition : 'undefined',
        }
      }

      this.filterList = this.filterList.bind(this);
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            setLocalUrls: nextProps.setLocalUrls,            
        });

    }

    filterList(event) {
        let value = event.target.value.toLowerCase();
        let setLocalUrls = this.state.setLocalUrls, result=[];
        result = setLocalUrls.filter((setLocalUrls)=>{
            return setLocalUrls.site.toLowerCase().search(value) != -1;
        });
        this.setState({result});
    }

  render(){
    if(this.state.boxCondition.value === undefined || this.state.boxCondition.value === null) {
        alert('Looks like you need to add your box number')
      }

    const userList = this.state.result.map((localUrl, i) => {
      return <li key={i}>
        <p>
          <a href={localUrl.url + this.state.boxCondition.value + localUrl.port}>{localUrl.site}</a>
        </p>
      </li>;
    });

    return(
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        <ul>
          {userList}
        </ul>
      </div>
    );

  }
}

class FilterStagingUrls extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
            setStagingUrls: setStagingUrls,
            result: setStagingUrls,
        };

        this.filterList = this.filterList.bind(this);

    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            setStagingUrls: nextProps.setStagingUrls,            
        });

    }

    filterList(event) {
        let value = event.target.value.toLowerCase();
        let setStagingUrls = this.state.setStagingUrls, result=[];
        result = setStagingUrls.filter((setStagingUrls)=>{
            return setStagingUrls.site.toLowerCase().search(value) != -1;
        });
        this.setState({result});
    }

  render(){

    const userList = this.state.result.map((stagingUrl, i) => {
      return <li key={i}>
        <p>
          <a href={stagingUrl.url + stagingUrl.port}>{stagingUrl.site}</a>
        </p>
      </li>;
    });

    return(
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        <ul>
          {userList}
        </ul>
      </div>
    );

  }
}

class FilterProdUrls extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
            setProdUrls: setProdUrls,
            result: setProdUrls,
        };

        this.filterList = this.filterList.bind(this);

    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            setProdUrls: nextProps.setProdUrls,            
        });

    }

    filterList(event) {
        let value = event.target.value.toLowerCase();
        let setProdUrls = this.state.setProdUrls, result=[];
        result = setProdUrls.filter((setProdUrls)=>{
            return setProdUrls.site.toLowerCase().search(value) != -1;
        });
        this.setState({result});
    }

  render(){

    const userList = this.state.result.map((prodUrl, i) => {
      return <li key={i}>
        <p>
          <a href={prodUrl.url}>{prodUrl.site}</a>
        </p>
      </li>;
    });

    return(
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        <ul>
          {userList}
        </ul>
      </div>
    );

  }
}



export default RenderStagingList;

