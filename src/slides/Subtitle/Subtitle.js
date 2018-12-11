import React from "react";
import PropTypes from "prop-types";

import Slide from "../../components/Slide";
import Subtitle from "../../components/Subtitle";

const SubtitleSlide = ({ text, background, color, note, style }) => (
  <Slide style={{ background }} note={note}>
      <Subtitle style={{ color, ...style }}>{text}</Subtitle>
    </Slide>
);

SubtitleSlide.propTypes = {
    background: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.node.isRequired,
    note: PropTypes.string,
    style: PropTypes.shape({})
};

SubtitleSlide.defaultProps = {
    background: "#fff",
    color: "#000",
    note: undefined,
    style: {}
};

export default SubtitleSlide;
