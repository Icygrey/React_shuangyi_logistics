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

class contactUs extends React.Component {
  state = {
    isFirstScreen: true,
    isMobile,
  };
  render() {
    return [
      <Header />,
      <Page3
        key="page3"
        className="image33 image-wrapper"
        isMobile={this.state.isMobile}
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
export default contactUs;
