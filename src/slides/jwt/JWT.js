import React from "react";
import PropTypes from "prop-types";

import Slide from "../../components/Slide";
import Subtitle from "../../components/Subtitle";
import Icon from "../../components/Icon";

import JWTIcon from '../../images/jwt.svg';

const JWTSlide = ({ }) => (
  <Slide style={{ background: '#000' }}>
    <Icon src={JWTIcon} style={{width: '400px'}} />
    <Subtitle style={{ color: '#fff', marginTop: '-20px'}}><a href="https://jwt.io" target="_blank" style={{ color: '#fff', textDecoration: 'none'}}>jwt.io</a></Subtitle>
  </Slide>
);


export default JWTSlide;
