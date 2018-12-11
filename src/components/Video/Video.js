import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./video.css";

const Video = ({ src, color, full, autoplay, loop }) => {
    const classes = classnames(styles.video, {
        [styles.full]: full
    });

    return (
      <div className={classes}>
          <video src={src} autoPlay={autoplay} loop={loop} muted/>
          {color ? (
                <div
              className={styles.overlay}
              style={{
                        backgroundColor: color
                    }}
            />
            ) : null}
        </div>
    );
};

Video.propTypes = {
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    full: PropTypes.bool,
    color: PropTypes.string,
    style: PropTypes.shape({}),
    src: PropTypes.string.isRequired
};

Video.defaultProps = {
    autoplay: false,
    loop: false,
    full: false,
    color: undefined,
    style: {}
};

export default Video;
