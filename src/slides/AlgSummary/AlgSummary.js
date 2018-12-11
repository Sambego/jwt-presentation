import React from "react";

import Slide from "../../components/Slide";
import Subtitle from "../../components/Subtitle";
import List from "../../components/List";

const AlgummarySlide = ({ text }) => (
  <Slide>
    <Subtitle>Algorithms</Subtitle>
    <List>
      <li>HMACSHA256, HMACSHA384, HMACSHA512</li>
      <li>RSASHA256, RSASHA384, RSASHA512</li>
      <li>ECDSASHA256, ECDSASHA384, ECDSASHA512</li>
      <li>RSAPSSSHA256, RSAPSSSHA384</li>
    </List>
  </Slide>
);

export default AlgummarySlide;
