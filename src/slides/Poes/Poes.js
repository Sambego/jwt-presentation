import React from "react";
import PropTypes from "prop-types";

import Slide from "../../components/Slide";

import poes from '../../images/poes.jpg';

const Poeslide = ({ text, background, color, note, style }) => (
  <Slide style={{ background }} note={note}>
    <div style={{position: 'relative'}}>
      <img src={poes} alt="Cat stickers" style={{width: '100vw', height: '100vh', objectFit: 'cover'}} />
      <div style={{position: 'absolute', top: 0, width: '100vw', height: '100vh', background: '#5FB3B3', opacity: .5}} />
    </div>
  </Slide>
);

export default Poeslide;
