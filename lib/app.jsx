import React from 'react';
import { render } from 'react-dom';
import RealTimeLedger from './realTimeLedger';
import RealTimeGraph from './realTimeGraph';
import FinanceAdvisor from './financeAdvisor';

const { Component } = React;

class App extends Component {

  constructor(){
    super();
    this.state = {trans: []};
  }

  componentDidMount(){
    const names =
	  ['Armen', 'Rouben', 'Edgar',
	   'Hasmik', 'Karen', 'Suren',
	   'Eduard', 'Erik', 'Diana',
	   'Svetlana', 'Arman', 'Armine',
	   'Emma', 'Hagop',
	   'Vianka', 'Ani', 'Viy'];
    const sectors =
	  ['Real estate', 'Services', 'Medical',
	   'Education', 'Transport'];
    const spot = max => {
      return Math.floor(Math.random() * max);
    };

    setInterval(() => {

      const newTrans = {
        buyer: names[spot(names.length)],
        seller: names[spot(names.length)],
        transID: `0x${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
        price: `${spot(1000000)} AMD`,
        sector: sectors[spot(sectors.length)]
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
        marginLeft: '2vw',
        opacity: '.8',
        width:'47%',
        fontSize: '20px',
        marginTop:'10vh',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        height:'80vh',
        borderRadius: '20px',
        display: 'inline-block',
        overflowY: 'scroll',
        scrollSpeed: 'slow',
        background: 'linear-gradient(to right, #c7bfec, #73baaf)',
      },
      stylee: {
        display: 'flex',
        background: 'linear-gradient(to right, #000000, #28287A)',
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
        width: '47%',
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
      paddingLeft: '1vw',
      background: 'linear-gradient(to right, #c7bfec, #73baaf)',
    };

    return (
      <div style={bodyStyle}>
        <video playsInline autoPlay muted loop style={vidStyle}>
          <source src={'/New-York-Jam.webm'} type={'video/webm'}/>
        </video>
    	<RealTimeLedger transactions={this.state.trans}
			myStyle={ledgerStyle}/>
	<RealTimeGraph myStyle={graphStyle}/>
	<FinanceAdvisor/>
      </div>
    );
  }

};

render(<App/>, document.getElementById('container'));
