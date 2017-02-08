import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MenuList extends Component {
  render() {
    return (
      <div className="menu-list container">
        <div className="menu-category">
          <span className="menu-title">Main</span>
          <ul className="menu-ul">
            <p><Link to="/" className="menu-link">Home</Link></p>
            <p><Link to="/browse" className="menu-link">Browse</Link></p>
          </ul>
        </div>
        <div className="menu-category">
          <span className="menu-title">Library</span>
          <ul className="menu-ul">
            <p><Link to="#" className="menu-link">Your List</Link></p>
            <p><Link to="#" className="menu-link">Downloaded</Link></p>
            <p><Link to="#" className="menu-link">Reviewed</Link></p>
            <p><Link to="/games/new" className="menu-link">New Game</Link></p>
          </ul>
        </div>
      </div>
    );
  }
}