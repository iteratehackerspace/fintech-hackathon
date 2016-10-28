import React from 'react';

const { Component } = React;

export default
class RealTimeGraph extends Component {
  render () {
    return (
      <div style={this.props.myStyle}>
	RealTime Graph
      </div>
    );
  }
};
