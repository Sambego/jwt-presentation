import React from "react";
import PropTypes from "prop-types";
import styles from "./text.css";

const Text = ({ children, style }) => <p className={styles.text} style={style}>{children}</p>;

Text.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.shape({}),
};

Text.defaultProps = {
    style: {},
};

export default Text;
