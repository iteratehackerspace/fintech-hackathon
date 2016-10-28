import React from 'react';

const { Component } = React;

export default
class RealTimeGraph extends Component {

  constructor() {
    super();
    this.state = {currentID: '1'}
  }

  render () {
    const styles = {
      height: '90%',
      width: '100%',
      maxWidth: '500px',
    };
    return (
      <div style={this.props.myStyle}>
        <StatusBar changeImage={(number) => {
            this.setState({ ...this.state, currentID: `${number}` });
          }}
        />
        <img src={`${this.state.currentID}.jpg`} style={styles} alt={`${this.state.currentID}`} />
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
      textAlign: 'center',
    };
    const activeStyles = {
      display: 'inline-block',
      heigth: '2%',
      width: 'calc(100%/3)',
      backgroundColor: '#426871',
      opacity: '.9',
      cursor: 'pointer',
      borderRadius: '20px',
    };
    return (
      <div>
        <div
          onClick={this.clickEvent}
          style={this.state.active[0] ? activeStyles : styles}
          id={1}>Graph1
        </div>
        <div
          onClick={this.clickEvent}
          style={this.state.active[1] ? activeStyles : styles}
          id={2}>Graph2
        </div>
        <div
          onClick={this.clickEvent}
          style={this.state.active[2] ? activeStyles : styles}
          id={3}>Graph3
        </div>
      </div>
    );
  }
};
