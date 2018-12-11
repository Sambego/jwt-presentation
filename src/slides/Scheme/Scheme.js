import React from "react";
import PropTypes from "prop-types";

import Slide from "../../components/Slide";
import Icon from "../../components/Icon";
import Subtitle from "../../components/Subtitle";

import styles from './scheme.css';

const SchemeSlide = ({ src, note, title }) => (
  <Slide note={note}>
      {title ? <Subtitle>{title}</Subtitle> : null}
      <Icon
      className={styles.scheme}
          src={src}
          style={{
                width: "80vw",
                maxHeight: "80vh",
            }}
        />
    </Slide>
);

SchemeSlide.propTypes = {
    src: PropTypes.string.isRequired,
    note: PropTypes.string,
    title: PropTypes.string
};

SchemeSlide.defaultProps = {
  note: undefined,
  title: undefined
}

export default SchemeSlide;
