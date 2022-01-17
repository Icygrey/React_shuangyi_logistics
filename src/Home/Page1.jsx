import React from "react";
import PropTypes from "prop-types";
import TweenOne from "rc-tween-one";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Icon, Button } from "antd";
import QueueAnim from "rc-queue-anim";

export default function Page1({ isMobile }) {
  return (
    <ScrollOverPack id="page1" className="content-wrapper page2">
      <TweenOne
        key="image"
        className="image1 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: "easeOutQuad" }}
        style={{ transform: "translateX(-100px)", opacity: 0 }}
      />
      <QueueAnim
        type={isMobile ? "bottom" : "right"}
        className="text-wrapper"
        key="text"
        leaveReverse
      >
        <h2 key="h2">综合服务</h2>
        <p key="p" style={{ maxWidth: 310 }}>
          双宜物流专注于高附加值物流服务，为客户提供产品的运输、仓储、配送及电商等个性化物流解决方案等专业服务，并可提供货物分拣、包装、信息处理等增值服务。
        </p>
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page1.propTypes = {
  isMobile: PropTypes.bool,
};
