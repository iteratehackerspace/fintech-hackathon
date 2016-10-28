import React from 'react';

const { Component } = React;

export default
class FinanceAdvisor extends Component {
  render () {
    const botSecret = 'j8wZqP9tO4k.cwA.mxE.Zl9qLEbnDTwPHK-nqHpUU-avrdNq-x2Gr-sOXZkVL9g';
    const link =
	  `https://webchat.botframework.com/embed/finance-advisor?s=${botSecret}`;
    const botStyle = {
      height:'400px',
      maxHeight:'400px'
    };
    const wrapperStyle = {
      position:'absolute',
      bottom:0,
      right:0
    };
    return (
      <div style={wrapperStyle}>
	<iframe src={link} style={botStyle}></iframe>
      </div>
    );
  }
};
