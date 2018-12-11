import React from "react";
import PropTypes from "prop-types";

import Slide from "../../components/Slide";

import poes from '../../images/poes2.jpg';

const Poeslide = ({ text, background, color, note, style }) => (
  <Slide style={{ background }} note={note}>
    <div style={{position: 'relative'}}>
      <img src={poes} alt="Cat stickers" style={{width: '100vw', height: '100vh', objectFit: 'cover'}} />
    </div>
  </Slide>
);

export default Poeslide;
