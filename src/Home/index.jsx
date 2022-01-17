import React from "react";
import DocumentTitle from "react-document-title";
import { enquireScreen } from "enquire-js";
import Header from "./Header";
import Banner from "./Banner";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Footer from "./Footer";
import "./static/style";

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isFirstScreen: true,
    isMobile,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === "enter",
    });
  };
  render() {
    return [
      <Header
        key="header"
        isFirstScreen={this.state.isFirstScreen}
        isMobile={this.state.isMobile}
      />,
      <Banner
        key="banner"
        onEnterChange={this.onEnterChange}
        test="专业的B2B供应链"
        test1="服务商"
      />,
      <Page4 key="page4" isMobile={this.state.isMobile} />,
      <Page2 key="page2" isMobile={this.state.isMobile} />,
      <Page1 key="page1" isMobile={this.state.isMobile} />,
      <Footer key="footer" />,
      <DocumentTitle title="上海双宜物流" key="title" />,
    ];
  }
}
export default Home;
