import React from "react";
import PropTypes from "prop-types";
import styles from "./subtitle.css";

const Subtitle = ({ children, style }) => (
  <h2 className={styles.subtitle} style={{ ...style }}>
      {children}
    </h2>
);

Subtitle.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.shape({})
};

Subtitle.defaultProps = {
    style: {}
};

export default Subtitle;
