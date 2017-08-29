import React, { Component } from 'react';
import './App.css';

var Child = React.createClass({
  render: function() {
    return (<div>I'm the child</div>);
  }
});

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <div className="col-md-4">
                        <div className="stagin-wrapper">
                            <h2>Staging Sites</h2>
                            <ul>
                                <li><h4><a href="">US</a></h4></li>
                                <li><h4><a href="">UK</a></h4></li>
                                <li><h4><a href="">JP</a></h4></li>
                            </ul>
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
