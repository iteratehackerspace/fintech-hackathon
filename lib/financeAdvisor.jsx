import React from 'react';

const { Component } = React;

export default
class FinanceAdvisor extends Component {

  // constructor() {
  //   super();
  //   this.state = { msgs: [], command:''};
  //   this.conn = new WebSocket(webSocketAddr);
  //   this.getCommand = this.getCommand.bind(this);
  //   this.cleanCommand = this.cleanCommand.bind(this);
  //   this.formChanged = this.formChanged.bind(this);
  // }
  // componentDidMount() {
  //   this.conn.onmessage = (message) => {
  //     const reply = JSON.parse(message.data);
  //     switch (reply.message_type) {
  //       case 'new_chat_message':
  //       this.setState({ msgs: [...this.state.msgs] });
  //       break;
  //       default:
  //       console.error('Oops, Cortana is confused');
  //     }
  //   };
  //   const initialMessageSendTimer = setInterval(() =>{
  //     if (this.conn.readyState === 1) {
  //       this.conn.send(JSON.stringify({
  //         cmd: 'connect',
  //       }));
  //       clearInterval(initialMessageSendTimer);
  //     }
  //   }, 500);
  //   getCommand() {
  //     this.setState({command:'Hi Cortana,'});
  //   }
  //   cleanCommand(){
  //     this.setState({command:''});
  //   }
  // }
  render () {
    let mainContainer = {
      height: '40%',
      width: '20%',
      backgroundColor: 'black',
      flexDirection: 'column',
      zIndex: '10000',
      bottom: '0',
      left: '70%',
      position: 'fixed'
    }
    let header = {
      display: 'flex',
      backgroundColor: 'grey',
      color: 'white',
      fontWeight: 'bolder',
      width: '100%',
      height: '10%',
      fontSize: '2em',
      justifyContent: 'center',
      alignItems: 'center'
    }
    let inputDiv = {
      position: 'fixed',
      bottom: '0',
      height: '2em',
      width: '20%',
      display: 'flex'

    }
    let input = {

      height: '2em',
      width: '100%'
    }
    let sendMsg = {
      position: 'absolute',
      right: '0',
      backgroundColor: 'purple',
      height: '2em',
      width: '3.5em'
    }
    return (
      <div style ={mainContainer}>
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
