import React from "react";

import Slide from "../../components/Slide";
import List from "../../components/List";

const SummarySlide = ({ text }) => (
  <Slide>
      <List>
      <li style={{ fontWeight: 700, color: "#fac863" }}>
                Traditional authentication
            </li>
            <li style={{ fontWeight: 700, color: "#ec5f67" }}>
                Token based authentication
        </li>
      <li style={{ fontWeight: 700, color: "#69c" }}>What the #&$* is a token?</li>
      <li style={{ fontWeight: 700, color: "#f99157" }}>
                Future of authentication
            </li>
        </List>
    </Slide>
);

export default SummarySlide;
