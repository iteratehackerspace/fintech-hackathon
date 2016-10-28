import React from 'react';

const { Component } = React;

export default
class FinanceAdvisor extends Component {
  constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {chatDefault: false}
      }

      clickHandler(e) {
           this.setState({...this.state, chatDefault: !this.state.chatDefault});
         }
render () {
const activeStyle = {
    mainContainer: {
      height: '40%',
      width: '20%',
      backgroundColor: 'powderblue',
      opacity: '.90',
      flexDirection: 'column',
      zIndex: '10000',
      bottom: '0',
      left: '70%',
      right: '10%',
      position: 'fixed',
      borderRadius: '5px'
    },
    header: {
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
    },
    inputDiv: {
      position: 'fixed',
      bottom: '0',
      height: '2em',
      width: '20%',
      display: 'flex'

    },
    input: {
      border: 'none',
      height: '2em',
      width: '100%',
      paddingLeft: '.25em'
    },
    sendMsg: {
      position: 'absolute',
      right: '0',
      backgroundColor: '#83D3C4',
      border: 'none',
      height: '2em',
      width: '3.5em'
    },
  };
  const styles = {
    mainContainer: {

      width: '20%',



      zIndex: '10000',
      bottom: '0',
      left: '70%',
      right: '10%',
      position: 'fixed',
      borderRadius: '5px'
    },
    header: {
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
    },
    inputDiv: {
    display: 'none'

    },
    input: {
      display: 'none'
    },
    sendMsg: {
      display: 'none'
    },
  }
  let currentStyle = this.state.chatDefault ? activeStyle : styles;
    return (
      <div style = {currentStyle.mainContainer}
        >

        <div
          style = {currentStyle.header}
          onClick={this.clickHandler}>
          Advisor Bot
        </div>
        <div style = {currentStyle.inputDiv}>

          <button style={currentStyle.sendMsg}>
            Send
          </button>
          <input
            style = {currentStyle.input}
            type={'text'}
            placeholder={'How can I help?'}
          />
        </div>
      </div>
    );
  }
};
