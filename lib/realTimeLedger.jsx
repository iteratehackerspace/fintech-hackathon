import React from 'react';

const { Component } = React;

export default
class RealTimeLedger extends Component {

  shouldComponentUpdate(nextProps) {
    const next = nextProps.messages;
    const current = this.props.messages;
    return next[next.length - 1] !== current[current.length - 1];
  }

  componentDidUpdate() {
    const panel = this.refs.transaction_container;
    if (panel.lastChild) panel.lastChild.scrollIntoView();
  }

  render() {
    
    const TransactionList = this.props.transactions.map((transaction, idx) => {
      return (
        <li key={idx} style={this.props.myStyle.list_items}>
          {transaction}
        </li>
      );
    });
    return (
      <div ref={'transaction_container'} style={this.props.myStyle.container}>
	       {TransactionList}
      </div>
    );
  }
};
