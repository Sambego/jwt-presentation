import React from "react";
import PropTypes from "prop-types";

import Slide from "../../components/Slide";
import Subtitle from "../../components/Subtitle";
import Code from "../../components/Code";

const CodeSlide = ({ title, code, note, lang }) => (
  <Slide note={note}>
    {title ? <Subtitle>{title}</Subtitle> : null}
    <Code code={code} lang={lang} />
  </Slide>
);

CodeSlide.propTypes = {
    title: PropTypes.node,
    code: PropTypes.string.isRequired,
    lang: PropTypes.string,
    note: PropTypes.string
};

CodeSlide.defaultProps = {
    title: undefined,
    lang: 'javascript',
    note: undefined
};

export default CodeSlide;
