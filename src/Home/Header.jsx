import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Menu, Row, Col, Icon, Button, Popover, Badge } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const searchEngine = "Baidu";

export default class Header extends React.Component {
  static propTypes = {
    isFirstScreen: PropTypes.bool,
    isMoblie: PropTypes.bool,
  };
  state = {
    menuVisible: false,
  };

  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  };
  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  };

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  };

  handleSelectFilter = (value, option) => {
    const optionValue = option.props["data-label"];
    return (
      optionValue === searchEngine ||
      optionValue.indexOf(value.toLowerCase()) > -1
    );
  };

  render() {
    // const history = useHistory();
    const { isFirstScreen, isMoblie } = this.props;
    const { menuVisible } = this.state;
    const menuMode = isMoblie ? "inline" : "horizontal";
    const headerClassName = classNames({
      clearfix: true,
      "home-nav-white": !isFirstScreen,
    });

    const menu = [
      <Menu mode={menuMode} defaultSelectedKeys={["home"]} id="nav" key="nav">
        <Menu.Item key="home">
          <Link to="/" className="header-link">
            首页
          </Link>
        </Menu.Item>

        <Menu.Item key="docs/spec">
          <Link to="/aboutUs" className="header-link">
            公司介绍
          </Link>
        </Menu.Item>
        <Menu.Item key="pro">
          {/* <a className="header-link" target="_blank" rel="noopener noreferrer"> */}
          {/* 这里不用添加 <router></router>！！ */}

          <Link to="/contactUs" className="header-link">
            联系我们
          </Link>

          {/* </a> */}
        </Menu.Item>
      </Menu>,
    ];

    //return才是实际render函数会返回出的东西
    return (
      <header id="header" className={headerClassName}>
        {menuMode === "inline" ? (
          <div>
            <Popover
              // overlayClassName="popover-menu"
              placement="bottomRight"
              content={menu}
              trigger="click"
              visible={menuVisible}
              onVisibleChange={this.onMenuVisibleChange}
            >
              <Button type="primary">sdadn</Button>
              {/* <Icon
                className="nav-phone-icon"
                type="menu"
                onClick={this.handleShowMenu}
              /> */}
            </Popover>
          </div>
        ) : null}
        <Row>
          {/* lg={4} md={5} */}
          <Col span={12}>
            <a id="logo">
              <Link to="/" className="header-link">
                <span>上海双宜物流</span>
              </Link>
            </a>
          </Col>
          <Col span={12}>{menuMode === "horizontal" ? menu : null}</Col>
        </Row>
      </header>
    );
  }
}
// lg={20} md={19} sm={0} xs={0}
// {/* <Button onClick={() => history.push("aboutUs")}>公司介绍</Button> */}
