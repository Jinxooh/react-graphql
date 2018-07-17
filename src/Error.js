import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';

export default class Error extends Component {
  state = {
    textArray: 'error'.split(''),
    codeArray: '404'.split(''),
    randomNumberArray: [],
    speed: 100,
    interval: null,
    randomTime: 0,
    startTime: 3000,
    firstAnimation: false,
    secondAnimation: false,
  }

  flashEffect = () => {
    this.setState({ randomTime: this.randomNum(6)})
  }
  componentDidMount() {
    const { textArray, codeArray, speed, randomNumberArray, startTime } = this.state;
    const { flashEffect } = this;

    // random index
    randomNumberArray.push(this.randomNum(textArray.length));
    randomNumberArray.push(this.randomNum(codeArray.length));
    this.setState({ randomNumberArray });

    this.setState({ interval: setInterval( flashEffect , speed )}); // random time

    // animation start time
    setTimeout(() => this.setState({ firstAnimation: true }) , startTime);
    setTimeout(() => this.setState({ secondAnimation: true }) , startTime * 2.6);
  }

  randomNum = time => Math.floor(Math.random() * time);

  render() {
    const { textArray, codeArray, randomNumberArray, randomTime, firstAnimation, secondAnimation } = this.state;
    return (
      <Container>
        <div>
          { textArray.map((item, index) => <Column color='white' blick={randomNumberArray[0] === index && firstAnimation} time={randomTime} >{item}</Column>) }
        </div>
        <div>
          { codeArray.map((item, index) => <Column color='red' off={randomNumberArray[1] === index && secondAnimation}>{item}</Column>) }
        </div>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  width: 100%;
  height: 400px;
  background: black;
  text-align: center;
`

const Blink = keyframes`
  0% { opacity: 1.0; }
  50% { opacity: 0.3; }
  100% { opacity: 1.0; }
`

const Column = styled.span`
  user-select: none;
  font: 75px/75px Monoton, cursive;
  width: 100%;
  text-transform: uppercase;
  color: ${props => props.color};
  opacity: ${props => props.off ? 0.3 : 1 }
  animation: ${props => props.blick ? `${Blink} ${props.time}s linear infinite`: `none` }
  text-shadow: ${props => {
    if(props.color === 'red'){
      return `0 0 80px red, 0 0 30px firebrick, 0 0 6px darkred`;
    }
    if(props.color === 'white'){
      return `0 0 80px #ffffff, 0 0 30px #008000, 0 0 6px #0000ff`;
    }
    if(props.color === 'green'){
      return `0 0 80px #ffffff, 0 0 30px lime, 0 0 6px darkgreen`;
    }
  }};
`