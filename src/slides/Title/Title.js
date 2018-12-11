import React from "react";
import Slide from "../../components/Slide";
import Title from "../../components/Title";
import Video from "../../components/Video";

import knock from "../../video/knock.mp4";

const TitleSlide = () => (
  <Slide style={{ background: "#5FB3B3" }}>
      <Video src={knock} autoplay loop full color="#5FB3B3" />
      <Title style={{ color: "#ffffff", position: "relative", zIndex: 1 }}>
            Knock knock, who's there?
        </Title>
    </Slide>
);

export default TitleSlide;
