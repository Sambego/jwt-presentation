import React from "react";
import PropTypes from "prop-types";

import Slide from "../../components/Slide";
import Subtitle from "../../components/Subtitle";
import Code from "../../components/Code";
import Icon from "../../components/Icon";

const CompareSlide = ({ title, code, img, note }) => (
  <Slide note={note}>
      <Subtitle>{title}</Subtitle>
      <div style={{display: 'flex', width: '80vw' }}>
        <div style={{flex: 1, display: 'tomato', maxWidth: '60%', width: '60%', display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: '4rem'}}>
          <Code style={{width: '100%', minWidth: 0}} code={code} />
        </div>
        <div style={{flex: 1, display: 'tomato', maxWidth: '40%', width: '40%', display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: '4rem'}}>
          <Icon src={img} style={{width: '20vw'}}/>
        </div>
      </div>
  </Slide>
);

CompareSlide.propTypes = {
    code: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    note: PropTypes.string,
};

CompareSlide.defaultProps = {
    note: undefined,
};

export default CompareSlide;
