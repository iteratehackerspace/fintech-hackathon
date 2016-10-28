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
        transID: '10MM100',
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
      justifyContent:'space-between',
      display: 'flex',
      flexWrap: 'wrap'
    };
    const hello  = {
      width: '100%',
      height: '9rem',
      backgroundColor: 'white',
      opacity: '.8',
      font: 'Helvetica',
      fontSize: '8rem',
      textAlign: 'center',
      paddingTop: '3rem',
      marginBottom: '1rem',
      color: 'grey',



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
        textAlign: 'center',
      },
      container:{
        marginLeft: '5vw',
        opacity: '.8',
        width:'40%',
        fontSize: '20px',
        marginTop:'10vh',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        height:'80vh',
        borderRadius: '20px',
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
        textAlign: 'center',
        height: '3rem',
        width: '100%',
      },
      styleFirst: {
        backgroundColor: '#426871',
        display: 'flex',
        width: '40%',
        position: 'absolute',
        borderRadius: '5px',
        height: '3rem',
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
      paddingLeft: '1vw'
    };

    return (
      <div style={bodyStyle}>
        <header style={hello}>
          HAYABOT
        </header>
        <video playsInline autoPlay muted loop style={vidStyle}>
            <source src={'/New-York-Jam.webm'} type={'video/webm'}/>
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
