import React from "react";

import Slide from "../../components/Slide";
import List from "../../components/List";

const SPASummarySlide = ({ text }) => (
  <Slide>
    <List ordered>
      <li>User fills in login form</li>
      <li>We pass that data to an authentication endpoint</li>
      <li>The authentication endpoint returns an access token</li>
      <li>We send along this access token with each request for protected data</li>
    </List>
  </Slide>
);

export default SPASummarySlide;
