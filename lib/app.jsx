import React from 'react';
import { render } from 'react-dom';
import RealTimeLedger from './realTimeLedger';
import RealTimeGraph from './realTimeGraph';
import FinanceAdvisor from './financeAdvisor';

const { Component } = React;

class App extends Component {
  constructor(){
    super();
    this.state = {trans: []}
  }
  componentDidMount(){
    setInterval(() => {
      const newTrans = {
        buyer: 'Somebody',
        seller: 'Somebody',
        transID: '123104210',
        price: '10c',
        types: 'something'
      };
      this.setState({...this.state, trans:[...this.state.trans, newTrans]});
    }, 2 * 1000);
  }
  render () {
    const vidStyle = {
      position: 'fixed',
      minWidth: '100%',
      minHeight: '100%',
      zIndex: '-100',
      backgroundSize: 'cover'
    };
    const bodyStyle = {
      height:'100vh',
      width:'100vw',
      display:'flex',
      justifyContent:'space-between'
    };
    const ledgerStyle= {
      list_items:{

        listStyleType: 'none',
        fontFamily: 'sans-serif',
        fontSize: '18px',
        color: 'white',
        margin: '0.5em auto',
        padding: '.50rem',
        wordWrap: 'break-word',
        transition: 'top 1s',
        width: '20%',
      },
      container:{
        marginLeft: '5vw',
        opacity: '.8',
        minWidth:'40vw',
        fontSize: '20px',
        marginTop:'10vh',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        height:'80vh',
        borderRadius: '10px',
        display: 'inline-block',
        overflowY: 'scroll',
        scrollSpeed: 'slow',
      },
      stylee: {
        display: 'flex',
        backgroundColor: 'black',
        scrollBehavior: 'smooth',
        transition: 'ease-in 2s',
        animationName: 'anim',
      },
      styleFirst: {
        backgroundColor: '#426871',
        display: 'flex',
        width: '40vw',
      },
    };
    const graphStyle = {
      marginRight: '5vw',
      opacity: '.8',
      marginTop:'10vh',
      minWidth:'40vw',
      height:'80vh',
      backgroundColor:'#d2b04c',
      borderRadius: '20px',
    };

    return (
      <div style={bodyStyle}>
        <video playsInline autoPlay muted loop style={vidStyle}>
            <source src={'/Busy-City.webm'} type={'video/webm'}/>
          </video>
    	<RealTimeLedger transactions={this.state.trans}
                  myStyle={ledgerStyle}
  />
	<RealTimeGraph myStyle={graphStyle}/>
	<FinanceAdvisor/>
      </div>
    );
  }

};

render(<App/>, document.getElementById('container'));



//implement this somehow
//animation-duration: 1s,
//animation-iteration-count: infinite //or 1
//animation-timing-function: ease-in;
//opacity: 0
