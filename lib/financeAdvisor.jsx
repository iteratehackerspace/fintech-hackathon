import React from 'react';

const { Component } = React;

export default
class FinanceAdvisor extends Component {
  //
  // constructor() {
  //   super();
  //   this.state = { msgs: [], command:''};
  //   this.conn = new WebSocket(webSocketAddr);
  //   this.getCommand = this.getCommand.bind(this);
  //   this.cleanCommand = this.cleanCommand.bind(this);
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
      height: '30em',
      width: '20em',
      backgroundColor: 'black',
    }
    let header = {
      backgroundColor: 'grey',
      width: '100%',
      height: '3em'
    }
    return (
      <div style ={mainContainer}>
        <div style = {header}></div>
Advisor Bot
      </div>
    );
  }
};
