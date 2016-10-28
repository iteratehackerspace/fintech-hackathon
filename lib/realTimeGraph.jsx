import React from 'react';
//import d3 from 'd3';
import * as rd3 from 'react-d3';

const { Component } = React;

export default
class RealTimeGraph extends Component {

  constructor() {
    super();
    this.state = {currentID: 1}
  }

  render () {
    let lineData = [
      [{
        name: "series1",
        values: [
          { x: 0, y: 20 },
          { x: 1, y: 30 },
          { x: 2, y: 10 },
          { x: 3, y: 5 },
          { x: 4, y: 7.5 },
          { x: 5, y: 15 },
          { x: 6, y: 10 },
        ],
        strokeWidth: 3,
        strokeDashArray: "5,5",
      }],
      [{
        name: "series2",
        values: [
          { x: 0, y: 7.5 },
          { x: 1, y: 5 },
          { x: 2, y: 20 },
          { x: 3, y: 12 },
          { x: 4, y: 4 },
          { x: 5, y: 6 },
          { x: 6, y: 2 },
        ]
      }],
      [{
        name: "series3",
        values: [
          { x: 0, y: 7.5 },
          { x: 1, y: 5 },
          { x: 2, y: 20 },
          { x: 3, y: 12 },
          { x: 4, y: 4 },
          { x: 5, y: 6 },
          { x: 6, y: 2 },
        ]
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
          id={1}>Graph 1
        </div>
        <div
          onClick={this.clickEvent}
          style={this.state.active[1] ? activeStyles : styles}
          id={2}>Graph 2
        </div>
        <div
          onClick={this.clickEvent}
          style={this.state.active[2] ? activeStyles : styles}
          id={3}>Graph 3
        </div>
      </div>
    );
  }
};
