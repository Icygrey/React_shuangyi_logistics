import React from "react";
import TweenOne from "rc-tween-one";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Icon, Button } from "antd";
import QueueAnim from "rc-queue-anim";

export default function Page2() {
  return (
    <ScrollOverPack id="page2" className="content-wrapper page">
      <QueueAnim
        className="text-wrapper left-text"
        key="text"
        duration={450}
        type="bottom"
        leaveReverse
      >
        <h2 key="h2">全国物流</h2>
        <p key="p" style={{ maxWidth: 260 }}>
          双宜物流经过多年的实践与运作，整合运输资源，为客户提供零担、整车、平台、冷链等运输服务，保障客户的货物安全，打造一站式物流运输服务体验。
        </p>
        <div key="button"></div>
      </QueueAnim>
      <TweenOne
        key="image"
        className="image2 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: "easeOutQuad" }}
        style={{ transform: "translateX(100px)", opacity: 0 }}
      />
    </ScrollOverPack>
  );
}
