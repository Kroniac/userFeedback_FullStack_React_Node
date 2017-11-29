import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Header extends Component {
  logged() {
    switch (this.props.isAuthenticated) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a>Emaily</a>
          <ul id="nav-mobile" className="right ">
            {this.logged()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth
  };
};

export default connect(mapStateToProps)(Header);
