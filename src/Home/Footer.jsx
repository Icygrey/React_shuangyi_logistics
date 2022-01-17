import React from "react";
import { Row, Col } from "antd";
import wechat from "./assets/wechat.png";

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>企业邮箱 📧 :</h2>

              <div>
                <a target="_blank ">shuangyi_logistics@outlook.com</a>
              </div>
            </div>
          </Col>

          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>业务热线 ☎️ :</h2>
              <div>
                <a>(+86) 15601929193</a>
                <p></p>
                <a>(+86) 13361908118</a>
              </div>
            </div>
          </Col>

          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <img
                  className="title-icon"
                  src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                  alt=""
                />
                业务微信：
              </h2>
              <div>
                <img src={wechat} alt="" width="25%" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          <span style={{ marginRight: 12 }}>
            Copyright © 上海双宜物流有限责任公司
          </span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
