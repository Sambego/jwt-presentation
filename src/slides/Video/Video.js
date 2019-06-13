import React from "react";
import Slide from "../../components/Slide";
import Video from "../../components/Video";

import knock from "../../video/knock.mp4";

const VideoSlide = ({src}) => (
  <Slide >
      <Video src={src} autoplay loop full />
    </Slide>
);

export default VideoSlide;
