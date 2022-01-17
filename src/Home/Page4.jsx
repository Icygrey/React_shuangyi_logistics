import React from "react";
import TweenOne from "rc-tween-one";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";

export default function Page4() {
  return (
    <ScrollOverPack id="page4" className="content-wrapper page">
      <QueueAnim
        className="text-wrapper-bottom"
        key="text"
        leaveReverse
        type="bottom"
      >
        <h2 key="h2">以长三角为中心覆盖全国</h2>
        <p key="p">
          双宜物流有限公司总部设于上海，公司持续以惊人的速度在发展，如今它已经成为一家优秀和专业的第三方物流供应商。公司自成立以来，始终关注于服务质量的提升，不断满足市场的需求。
          来自建筑材料、化工制造、电子科技、食品及饮料、快消品、工业机械等不同行业的国际品牌及优质企业，都选择双宜物流作为他们的物流伙伴。
          公司坚持“宜诚、宜美”的服务理念，打造一流服务品牌，和客户建立了互利共赢的合作关系，一直致力于打造全球优秀的物流供应商。
        </p>
      </QueueAnim>
      <TweenOne
        key="image"
        className="image4 bottom-wrapper"
        animation={{
          y: 0,
          opacity: 1,
          duration: 550,
          delay: 150,
          ease: "easeOutQuad",
        }}
        style={{ transform: "translateY(50px)", opacity: 0 }}
      />
    </ScrollOverPack>
  );
}
