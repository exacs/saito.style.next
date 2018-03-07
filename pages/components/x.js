import React from 'react';
import styled from 'styled-components';

const Container = styled.svg`
  width: 100%;
  height: auto;
`;

const Splash = styled.image`
  transform-origin: center;
`;

const Sunset = styled.image`
  mix-blend-mode: screen;
`;

export default class X extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deg: 0,
      x: 0,
      y: 0
    };
  }

  componentDidMount() {
    document.addEventListener('mousemove', e => {
      const f = (partial, total) => (partial - total / 2) / total * 200;
      const x = f(e.clientX, window.innerWidth);
      const y = f(e.clientY, window.innerHeight);
      const delta = Math.sqrt(x * x + y * y) / 200;

      this.setState(prevState => ({
        deg: (prevState.deg + delta) % 360,
        x,
        y
      }));
    });
  }

  render() {
    return (
      <Container className="x" width="320" height="415" viewBox="0 0 320 415">
        <g className="x--grad" clipPath="url(#x-mask)">
          <Splash
            id="splash"
            className="x--splash"
            href="/static/x-splash.jpg"
            x="-160"
            y="-100"
            width="640"
            height="640"
            style={{
              transform: `rotate(${this.state.deg}deg)`
            }}
          />
          <Sunset
            id="sunsetX"
            className="x--sunset"
            href="/static/x-sunset.jpg"
            x="-160"
            y="-100"
            width="640"
            height="640"
            style={{
              transform: `translateY(${this.state.x}px)`
            }}
          />
        </g>

        <defs>
          <clipPath id="x-mask">
            <polygon
              className="x--mask"
              points="4,0 67,0 160,167 255,0 316,0 190,202 320,415 258,415 155,242 61,415 0,415 126,205"
            />
          </clipPath>
        </defs>
      </Container>
    );
  }
}
