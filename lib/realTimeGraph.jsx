import React from 'react';
import * as rd3 from 'react-d3';

const { Component } = React;

export default
class RealTimeGraph extends Component {

  constructor() {
    super();
    this.state = {currentID: 1}
  }

  render () {
    let graph1 = [{x:0, y:9 }];
    let graph2 = [{x:0, y:11 }];
    let graph3 = [{x:0, y:8 }];
    this.props.graph1.forEach((value, idx) => {
      graph1[idx+1] = value;
    });
    this.props.graph2.forEach((value, idx) => {
      graph2[idx+1] = value;
    });
    this.props.graph3.forEach((value, idx) => {
      graph3[idx+1] = value;
    });
    let lineData = [
      [{
        name: "series1",
        values: graph1,
        strokeWidth: 3,
        strokeDashArray: "5,5",
      }],
      [{
        name: "series2",
        values: graph2,
      }],
      [{
        name: "series3",
        values: graph3,
        strokeWidth: 3,
        strokeDashArray: "3,5",
      }]
    ];
    const styles = {
      height: '90%',
      width: '100%',
      maxWidth: '500px',
    };
    const LineChart = rd3.LineChart;
    return (
      <div style={this.props.myStyle}>
        <StatusBar changeImage={(number) => {
            this.setState({ ...this.state, currentID: `${number}` });
          }}
        />
        <LineChart
          legend={true}
          data={lineData[this.state.currentID-1]}
          width='100%'
          height={400}
          viewBoxObject={{
            x: 0,
            y: 0,
            width: 500,
            height: 400,}
          }
          title="Line Chart"
          yAxisLabel="Altitude"
          xAxisLabel="Elapsed Time (sec)"
          gridHorizontal={true}
        />
      </div>
    );
  }
};

class StatusBar extends Component {
  constructor() {
    super();
    this.clickEvent=this.clickEvent.bind(this);
    this.state={active: [true, false, false]}
  }

  clickEvent(e) {
    this.props.changeImage(e.currentTarget.id);
    let newState = [false, false, false];
    newState[e.currentTarget.id - 1] = true;
    this.setState({...this.state, active: newState});
  }

  render() {
    const styles = {
      display: 'inline-block',
      heigth: '2%',
      width: 'calc(100%/3)',
      cursor: 'pointer',
      borderRadius: '20px',
      paddingLeft: '50px',
      paddingTop: '5px',
      paddingBottom: '5px',
      transition: 'all 1s',
    };
    const activeStyles = {
      display: 'inline-block',
      paddingLeft: '20px',
      heigth: '2%',
      width: 'calc(100%/3)',
      backgroundColor: '#a965a1',
      color: 'white',
      opacity: '.9',
      cursor: 'pointer',
      borderRadius: '20px',
      transition: 'all 1s',
    };
    return (
      <div>
        <div
          onClick={this.clickEvent}
          style={this.state.active[0] ? activeStyles : styles}
          id={1}>Banking
        </div>
        <div
          onClick={this.clickEvent}
          style={this.state.active[1] ? activeStyles : styles}
          id={2}>Real Estate
        </div>
        <div
          onClick={this.clickEvent}
          style={this.state.active[2] ? activeStyles : styles}
          id={3}>Medical
        </div>
      </div>
    );
  }
};
