/*
* Created on Tue Nov 8 2016
*
* Side-bar menu itself containing all of the side-bar's components.
*
*/

import React, { Component } from 'react';

import MenuHeader from './MenuHeader';
import MenuList from './MenuList';

export default class Menu extends Component {
  render() {
    return(
      <div className="menu">
        <MenuHeader />
        <MenuList />
        <span className="content-botright">
          <a href="#" className="logout-btn"><i className="fa fa-sign-out"></i></a>
        </span>
      </div>
    )
  }
}
