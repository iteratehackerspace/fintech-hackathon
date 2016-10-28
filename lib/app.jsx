import React from 'react';
import { render } from 'react-dom';
import RealTimeLedger from './realTimeLedger';
import RealTimeGraph from './realTimeGraph';
import FinanceAdvisor from './financeAdvisor';

const { Component } = React;

class App extends Component {

  render () {
    const bodyStyle = {
      marginLeft:'5vw',
      height:'100vh',
      width:'100vw',
      display:'flex',
      justifyContent:'space-between'
    };
    const ledgerStyle= {
      list_items:{
        fontSize: '20px',
      },
      container:{
	minWidth:'40vw',
        fontSize: '20px',
	marginTop:'10vh',
	alignSelf: 'flex-start',
	backgroundColor: 'red',
	height:'80vh'
      },
    };
    const graphStyle = {
      marginTop:'10vh',
      minWidth:'40vw',
      height:'80vh',
      backgroundColor:'orange'
    };

    return (
      <div style={bodyStyle}>
	<RealTimeLedger transactions={['a', 'b']} myStyle={ledgerStyle} />
	<RealTimeGraph myStyle={graphStyle}/>
	<FinanceAdvisor/>
      </div>
    );
  }

};

render(<App/>, document.getElementById('container'));
