import React from 'react';

const { Component } = React;

export default
class RealTimeGraph extends Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {currentID: '1'}
  }

  clickHandler(e) {
    console.log(e);
  }

  render () {
    const styles = {
      height: '90%',
      width: '100%',
    };
    return (
      <div style={this.props.myStyle}>
        <StatusBar changeImage={(number) => {
            console.log(this.state.currentID);
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
  }

  clickEvent(e) {
    console.log(e.currentTarget.id);
    this.props.changeImage(e.currentTarget.id);
  }

  render() {
    const styles = {
      border: '1px solid red',
      display: 'inline-block',
      heigth: '2%',
      width: 'calc(100%/3)',
    };
      return (
        <div>
          <div onClick={this.clickEvent} style={styles} id={1}>Graph1</div>
          <div onClick={this.clickEvent} style={styles} id={2}>Graph2</div>
          <div onClick={this.clickEvent} style={styles} id={3}>Graph3</div>
        </div>
      );
  }
};
