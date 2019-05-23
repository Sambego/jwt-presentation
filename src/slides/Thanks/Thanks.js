import React, { Component } from "react";

import Slide from "../../components/Slide";
import Subtitle from "../../components/Subtitle";

export default class Thanks extends Component {
  state = {
    hue: 0,
    background: "hsl(1, 80%, 50)"
  };

  static getHueForChannel(hue, channel) {
    const hueForChannel = hue - channel * 255;
    if (hueForChannel > 0) {
      if (hueForChannel > 255) {
        return 255;
      }

      return hueForChannel;
    }

    return 0;
  }

  constructor(props) {
    super(props);

    this.initAnimation();
  }

  initAnimation() {
    const maxHue = 360;
    const step = 1;

    window.setInterval(() => {
      const { hue } = this.state;
      const newHue = hue + step >= maxHue ? 0 : hue + step;

      this.setState(state => ({
        ...state,
        hue: newHue,
        background: `hsl(${newHue}, 80%, 50%)`
      }));
    }, 10);
  }

  render() {
    return (
      <Slide style={{ backgroundColor: this.state.background }}>
        <Subtitle>
          Thanks!
        </Subtitle>
      </Slide>
    );
  }
}
