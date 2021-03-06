import React from 'react';
import { render } from 'react-dom';
import RealTimeLedger from './realTimeLedger';
import RealTimeGraph from './realTimeGraph';
import FinanceAdvisor from './financeAdvisor';

const { Component } = React;

class App extends Component {

  constructor(){
    super();
    this.state = {trans: [], graph1: [{x:0, y:9 }], graph2: [{x:0, y:9 }], graph3: [{x:0, y:9 }], count:0};
  }

  componentDidMount(){
    const names =
	  ['Armen', 'Rouben', 'Edgar',
	   'Hasmik', 'Karen', 'Suren',
	   'Eduard', 'Erik', 'Diana',
	   'Svetlana', 'Arman', 'Armine',
	   'Emma', 'Hagop',
	   'Vianka', 'Ani', 'Viy', 'Mark',
     'Kalipso', 'Robert', 'Lilith', 'Martin', 'Davit', 'Areg'];
    const sectors =
	  ['Real estate', 'Services', 'Medical',
	   'Education', 'Transport', 'Banking'];
    const spot = max => Math.floor(Math.random() * max);
    setInterval(() => {
      const newTrans = {
        buyer: names[spot(names.length)],
        seller: names[spot(names.length)],
        transID: `0x${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
        price: `${spot(3000000)} AMD`,
        sector: sectors[spot(sectors.length)]
      };
      this.setState({...this.state,
        trans:[...this.state.trans, newTrans],
        count:this.state.count+1,
      });
      let arr1 = this.state.graph1;
      let arr2 = this.state.graph2;
      let arr3 = this.state.graph3;
      const newElm1 = {
        x: this.state.count,
        y: Math.floor(Math.random()*5 + 12),
      };
      const newElm2 = {
        x: this.state.count,
        y: Math.floor(Math.random()*10 + 14),
      };
      const newElm3 = {
        x: this.state.count,
        y: Math.floor(Math.random()*2 + 11),
      };
      if(this.state.count > 10) {
        arr1.shift();
        arr2.shift();
        arr3.shift();
        arr1.push(newElm1);
        arr2.push(newElm2);
        arr3.push(newElm3);
      } else {
        arr1.push(newElm1);
        arr2.push(newElm2);
        arr3.push(newElm3);
      }
      this.setState({...this.state,
        graph1: arr1,
        graph2: arr2,
        graph3: arr3,
      });
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
        width:'54%',
        fontSize: '20px',
        marginTop:'15vh',
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
        width: '54%',
        position: 'absolute',
        borderRadius: '5px',
        height: '3rem',
      },
    };
    const graphStyle = {
      marginRight: '2vw',
      opacity: '.8',
      marginTop:'15vh',
      minWidth:'40vw',
      height:'80vh',
      backgroundColor:'#d2b04c',
      borderRadius: '20px',
      paddingLeft: '2vw',
      background: 'linear-gradient(to right, #c7bfec, #73baaf)',
    };
    const infoStyle = {
      paddingLeft: '100px',
      color: 'white',
      display: 'inline-block',
    }

    return (
      <div style={bodyStyle}>
        <video playsInline autoPlay muted loop style={vidStyle}>
          <source src={'/New-York-Jam.webm'} type={'video/webm'}/>
        </video>
    	<RealTimeLedger transactions={this.state.trans}
			myStyle={ledgerStyle}/>
    <RealTimeGraph
      myStyle={graphStyle}
      graph1={this.state.graph1}
      graph2={this.state.graph2}
      graph3={this.state.graph3}
    />
  <div> <div style = {infoStyle}>iteratehackerspace </div><a style = {infoStyle} href = "https://iteratehackerspace.github.io/" target="_blank"> More about us </a> </div>
	<FinanceAdvisor/>
      </div>
    );
  }

};

render(<App/>, document.getElementById('container'));
