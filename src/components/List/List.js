import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import styles from "./list.css";

const List = ({ children, ordered }) => {
    const renderItems = () =>
        children.map((child, index) =>
            cloneElement(child, {
                className: styles.item,
                key: index
            })
        );

    if (ordered) {
        return <ol className={styles.ol}>{renderItems()}</ol>;
    }

    return <ul className={styles.list}>{renderItems()}</ul>;
};

List.propTypes = {
    children: PropTypes.node.isRequired,
    ordered: PropTypes.bool
};

List.defaultProps = {
  ordered: false
};

export default List;
