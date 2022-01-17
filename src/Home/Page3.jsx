import React from "react";
import PropTypes from "prop-types";
import TweenOne from "rc-tween-one";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Icon, Button } from "antd";
import QueueAnim from "rc-queue-anim";

export default function Page3({
  className,
  isMobile,
  text1,
  text2_0,
  text2_1,
  text2_2,
}) {
  return (
    <ScrollOverPack id="page3" className="content-wrapper page">
      <TweenOne
        key="image"
        className={className}
        animation={{ x: 0, opacity: 1, ease: "easeOutQuad" }}
        style={{ transform: "translateX(-100px)", opacity: 0 }}
      />
      <QueueAnim
        className="text-wrapper"
        key="text"
        type={isMobile ? "bottom" : "right"}
        leaveReverse
        style={{ top: "40%" }}
      >
        <h2 key="h2" style={{ maxWidth: 280 }}>
          {text1}
        </h2>
        <p key="p" style={{ maxWidth: 280 }}>
          {text2_0}
          <div>{text2_1}</div>
          <div>{text2_2}</div>
        </p>
        <div key="button"></div>
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page3.propTypes = {
  isMobile: PropTypes.bool,
};
