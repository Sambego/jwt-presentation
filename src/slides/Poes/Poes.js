import React from "react";
import PropTypes from "prop-types";

import Slide from "../../components/Slide";
import Subtitle from "../../components/Subtitle";

import poes from '../../images/poes.jpg';

const Poeslide = ({ text, background, color, note, style }) => (
  <Slide style={{ background }} note={note}>
    <div style={{position: 'relative'}}>
      <img src={poes} alt="Cat stickers" style={{width: '100vw', height: '100vh', objectFit: 'cover'}} />
      <div style={{position: 'absolute', top: 0, width: '100vw', height: '100vh', background: '#5FB3B3', opacity: .5}} />
      <Subtitle style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate3d(-50%, -50%, 0)', color: '#fff'}}>Tweet me @sambego</Subtitle>
    </div>
  </Slide>
);

export default Poeslide;
