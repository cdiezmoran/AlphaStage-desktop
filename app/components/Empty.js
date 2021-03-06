// @flow
import React, { Component } from 'react';
import type { Element } from 'react';

class Empty extends Component {
  props: {
    title: string,
    description: Element<*>
  }

  render() {
    const { title, description } = this.props;
    return (
      <div className="empty-component">
        <h3>{title}</h3>
        {description}
      </div>
    );
  }
}

export default Empty;
