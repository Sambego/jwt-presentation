import React from "react";
import PropTypes from "prop-types";
import styles from "./slide.css";

const Slide = ({ children, style, note }) => {
  if (note) {
    console.log(`Note: ${note}`);
    console.log(`----------------------------------------------------------------`);
  }

  return (
    <div style={style} className={styles.slide}>
        {children}
      </div>
  )
};

Slide.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.shape({}),
    note: PropTypes.string
};

Slide.defaultProps = {
    style: {},
    note: undefined
};

export default Slide;
