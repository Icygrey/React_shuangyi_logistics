import React from "react";
import PropTypes from "prop-types";
import ScrollElement from "rc-scroll-anim/lib/ScrollElement";
import GitHubButton from "react-github-button";
import { Icon } from "antd";
import QueueAnim from "rc-queue-anim";
//
import { Carousel } from "antd";

function typeFunc(a) {
  if (a.key === "line") {
    return "right";
  } else if (a.key === "button") {
    return "bottom";
  }
  return "left";
}

//

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Banner({ onEnterChange, test, test1 }) {
  return (
    <Carousel autoplay>
      <div>
        <section className="page banner-wrapper">
          <ScrollElement
            className="page"
            id="banner"
            onChange={({ mode }) => onEnterChange(mode)}
            playScale={0.9}
          >
            <QueueAnim
              className="banner-text-wrapper"
              type={typeFunc}
              delay={300}
              key="banner"
            >
              <h2 key="h2">
                {test}
                <p>{test1}</p>
                {/* 专业的B2B供应链 <p>服务商</p> */}
              </h2>
              <p key="content">上海双宜物流，中国领先的物流一体化服务供应商</p>
              <span className="line" key="line" />
            </QueueAnim>
            <Icon type="down" className="down" />
          </ScrollElement>
        </section>
      </div>

      <div>
        <section className="page banner-wrapper2">
          <ScrollElement
            className="page"
            id="banner"
            onChange={({ mode }) => onEnterChange(mode)}
            playScale={0.9}
          >
            <QueueAnim
              className="banner-text-wrapper"
              type={typeFunc}
              delay={300}
              key="banner"
            >
              <h2 key="h2">
                先进可靠的 <p>物流仓储体系</p>
              </h2>
              <p key="content">宜诚 • 宜美</p>
              <span className="line" key="line" />
            </QueueAnim>
            <Icon type="down" className="down" />
          </ScrollElement>
        </section>
      </div>
    </Carousel>
  );
}
Banner.propTypes = {
  onEnterChange: PropTypes.func,
};
