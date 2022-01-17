import React from "react";
import DocumentTitle from "react-document-title";
import "../Home/static/style";
import { enquireScreen } from "enquire-js";

import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Page3 from "../Home/Page3";

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class AboutUs extends React.Component {
  state = {
    isFirstScreen: true,
    isMobile,
  };
  render() {
    return [
      <Header />,
      <Page3
        key="page3"
        className="image3 image-wrapper"
        isMobile={this.state.isMobile}
        text1="经营理念"
        text2_0=" 宜诚 • 宜美"
        text2_1="以客户为中心"
        text2_2="以诚信为根本"
      />,
      <div id="aboutus"></div>,

      <Footer />,
    ];
  }
}
// const Router = () => (
//   <Router>
//     <Link to="/aboutUs">联系我们</Link>
//     <Route path="/aboutUs" exact component={AboutUs} />
//   </Router>
// );
export default AboutUs;
