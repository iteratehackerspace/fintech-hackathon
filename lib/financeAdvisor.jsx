import React from 'react';

const { Component } = React;

export default
class FinanceAdvisor extends Component {
  constructor () {
    super();
    this.state = { shouldShow : false };
  }

  render () {
    const botSecret =
          'NL5gd68BbBY.cwA.vis.VcGzw76t32DY0Vdc5_4sWb-3CpGMV0gA8MHrmPpBjnY';
    const link =
	  `https://webchat.botframework.com/embed/finance-advisor?s=${botSecret}`;
    const botStyle = {
      height:'375px',
      maxHeight:'375px'
    };
    const wrapperStyle = {
      position:'absolute',
      bottom:0,
      right:0
    };
    const smallerStyle = {
      color:'white',
      backgroundColor:'black',
      textAlign:'center',
      minHeight:'20px'
    };

    const chat = (show => {
      const bar = <div style={smallerStyle} onClick={e => {
	this.setState({shouldShow: !this.state.shouldShow});
      }}> Financial help per district </div>;
      if (show)
	return (
	  <div>
	    {bar}
	    <iframe src={link} style={botStyle}></iframe>
	  </div>
	);
      else
	return (
	  <div style={{...wrapperStyle,
		       position:'absolute',
		       bottom:0,
		       right:0,
		       minWidth:'300px',
	       minHeight:'20px'}}>
	    {bar}
	  </div>
	);
    })(this.state.shouldShow);

    return (
      <div style={wrapperStyle}>
	{chat}
      </div>
    );
  }
};
