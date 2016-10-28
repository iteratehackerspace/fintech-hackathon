import React from 'react';
import { render } from 'react-dom';
import RealTimeLedger from './realTimeLedger';
import RealTimeGraph from './realTimeGraph';
import FinanceAdvisor from './financeAdvisor';

const { Component } = React;

class App extends Component {
  render () {
    const style= {
      list_items:{
        fontSize: '20px',
      },
      container:{
        fontSize: '20px',
      },
    };
    return (
      <div>
	Happy hacking
	<RealTimeLedger
    transactions={[]}
    myStyle={style}
  />
	<RealTimeGraph/>
	<FinanceAdvisor/>
      </div>
    );
  }

};

render(<App/>, document.getElementById('container'));
