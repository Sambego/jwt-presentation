import React from "react";

import Slide from "../../components/Slide";
import Subtitle from "../../components/Subtitle";
import List from "../../components/List";

const FinalSummarySlide = ({ text }) => (
  <Slide>
    <Subtitle>Let's summarize</Subtitle>
    <List>
      <li style={{ fontWeight: 700, color: "#fac863" }}>Using session cookies is hard with SPAs</li>
      <li style={{ fontWeight: 700, color: "#ec5f67" }}>Stateless authentication is possible<sup>*</sup></li>
      <li style={{ fontWeight: 700, color: "#69c" }}>JSON Web Tokens consist of 3 parts</li>
      <li style={{ fontWeight: 700, color: "#f99157" }}>The future of authentication looks promising</li>
      <li style={{ fontWeight: 700, color: "#5FB3B3" }}>I like cats</li>
    </List>
  </Slide>
);

export default FinalSummarySlide;
