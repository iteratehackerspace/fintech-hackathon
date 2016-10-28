import React from 'react';

const { Component } = React;

export default
class FinanceAdvisor extends Component {



  render () {
    let mainContainer = {
      height: '40%',
      width: '20%',
      backgroundColor: 'powderblue',
      opacity: '.90',
      flexDirection: 'column',
      zIndex: '10000',
      bottom: '0',
      left: '60%',
      right: '10%',
      position: 'fixed',
      borderRadius: '5px'
    }
    let header = {
      display: 'flex',
      backgroundColor: 'grey',
      color: 'white',
      font: 'Sans-serif',
      paddingTop: '.25em',
      paddingBottom: '.25em',
      width: '100%',
      height: '12%',
      fontSize: '2em',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px'
    }
    let inputDiv = {
      position: 'fixed',
      bottom: '0',
      height: '2em',
      width: '20%',
      display: 'flex'

    }
    let input = {
      border: 'none',
      height: '2em',
      width: '100%',
      paddingLeft: '.25em'
    }
    let sendMsg = {
      position: 'absolute',
      right: '0',
      backgroundColor: '#83D3C4',
      border: 'none',
      height: '2em',
      width: '3.5em'
    }
    return (
      <div style = {mainContainer}>
      <div style = {header}>
        Advisor Bot
      </div>
        <div style = {inputDiv}>

          <button style={sendMsg}>
            Send
          </button>
          <input
            style = {input}
            type={'text'}
            placeholder={'How can I help?'}
          />
        </div>
      </div>
    );
  }
};
