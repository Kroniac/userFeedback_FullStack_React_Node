import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default connect(null, actions)(App);
