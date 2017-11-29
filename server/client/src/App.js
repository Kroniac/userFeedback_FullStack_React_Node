import React, { Component } from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
