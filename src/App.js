"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _CustomButton = require("./components/CustomButton");
var _ProductList = require("./components/ProductList.tsx");
var _ListOfAllGoods = require("./components/ListOfAllGoods.tsx");
var _Header = require("./components/Header.tsx");
var _Footer = require("./components/Footer.tsx");
var _WishList = require("./components/WishList.tsx");
var _productList = require("./productList.ts");
require("./style/App.css");
require("./style/resetDefaultStyle.css");
var _photoForPresentBlock = _interopRequireDefault(require("./assets/imgs/photo-for-presentBlock.webp"));
var _photoForAboutUsBlock = _interopRequireDefault(require("./assets/imgs/photo-for-aboutUs-block.webp"));
var _photoLocationBlock = _interopRequireDefault(require("./assets/imgs/photoLocationBlock.webp"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function AppContent() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "present-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "present-block_information-block"
  }, /*#__PURE__*/React.createElement("h1", null, "Leaf & Cup"), /*#__PURE__*/React.createElement("p", null, "\u0412 Leaf & Cup \u043C\u044B \u0432\u0435\u0440\u0438\u043C, \u0447\u0442\u043E \u0447\u0430\u0439 \u2014 \u044D\u0442\u043E \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0430\u043F\u0438\u0442\u043E\u043A \u2014 \u044D\u0442\u043E \u043C\u043E\u043C\u0435\u043D\u0442 \u0441\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u044F, \u0440\u0438\u0442\u0443\u0430\u043B \u0441\u0432\u044F\u0437\u0438 \u0438 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u044F. \u041D\u0430\u0448\u0435 \u043A\u0430\u0444\u0435 \u0431\u044B\u043B\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u043E \u043A\u0430\u043A \u0443\u044E\u0442\u043D\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E, \u0433\u0434\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u0434\u043E\u0445\u043D\u0443\u0442\u044C \u043E\u0442 \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u0441\u0443\u0435\u0442\u044B, \u043D\u0430\u0441\u043B\u0430\u0434\u0438\u0442\u044C\u0441\u044F \u0430\u0440\u043E\u043C\u0430\u0442\u043E\u043C \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0447\u0430\u0435\u0432 \u0438 \u043F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430\u043C\u0438 \u0437\u0430 \u0447\u0430\u0448\u043A\u043E\u0439 \u0434\u044B\u043C\u044F\u0449\u0435\u0433\u043E\u0441\u044F \u0447\u0430\u044F."), /*#__PURE__*/React.createElement(_CustomButton.CustomButton, {
    style: {
      width: "300px",
      height: "70px",
      fontSize: "1.1em"
    },
    onClick: function onClick() {
      return navigate("/leaf-and-cup/list-of-allGoods");
    }
  }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433")), /*#__PURE__*/React.createElement("img", {
    src: _photoForPresentBlock.default,
    alt: "cap-of-tea",
    className: "photo-for-presentBlock"
  })), /*#__PURE__*/React.createElement(_ProductList.ProductList, {
    arrayWithProducts: _productList.previewProducts
  }), /*#__PURE__*/React.createElement("div", {
    className: "aboutUs"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "aboutUs_frst-column"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", {
    className: "column_index"
  }, "1"), /*#__PURE__*/React.createElement("div", {
    className: "column_text-content"
  }, /*#__PURE__*/React.createElement("h3", null, "\u0420\u0435\u0434\u043A\u0438\u0435 \u0441\u043E\u0440\u0442\u0430 \u0447\u0430\u044F"), /*#__PURE__*/React.createElement("p", null, "\u041D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430, \u043D\u043E \u0438 \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0435 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \u0441\u043E \u0432\u0441\u0435\u0433\u043E \u043C\u0438\u0440\u0430"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", {
    className: "column_index"
  }, "2"), /*#__PURE__*/React.createElement("div", {
    className: "column_text-content"
  }, /*#__PURE__*/React.createElement("h3", null, "\u0412\u044B\u0441\u043E\u043A\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0437\u0430\u0432\u0430\u0440\u0438\u0432\u0430\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("p", null, "\u041C\u044B \u0437\u0430\u0431\u043E\u0442\u0438\u043C\u0441\u044F \u043E \u0442\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u043A\u0430\u0436\u0434\u044B\u0439 \u0447\u0430\u0439 \u0431\u044B\u043B \u0441\u0432\u0435\u0436\u0438\u043C, \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u044B\u043C \u0438 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u043B \u0441\u0432\u043E\u0439 \u0432\u043A\u0443\u0441.")))), /*#__PURE__*/React.createElement("img", {
    src: _photoForAboutUsBlock.default,
    alt: "aboutUs_decoratePhoto",
    className: "aboutUs_decoratePhoto"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "aboutUs_second-column"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", {
    className: "column_index"
  }, "3"), /*#__PURE__*/React.createElement("div", {
    className: "column_text-content"
  }, /*#__PURE__*/React.createElement("h3", null, "\u0423\u044E\u0442\u043D\u0430\u044F \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430"), /*#__PURE__*/React.createElement("p", null, "\u0418\u043D\u0442\u0435\u0440\u044C\u0435\u0440 \u0438 \u043C\u0443\u0437\u044B\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u044E\u0442 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E, \u0433\u0434\u0435 \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u043E\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u043F\u043E\u0434\u043E\u043B\u044C\u0448\u0435"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", {
    className: "column_index"
  }, "4"), /*#__PURE__*/React.createElement("div", {
    className: "column_text-content"
  }, /*#__PURE__*/React.createElement("h3", null, "\u0414\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441"), /*#__PURE__*/React.createElement("p", null, "\u0411\u0430\u0440\u0438\u0441\u0442\u0430 \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0447\u0430\u0439 \u043F\u043E\u0434 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435."))))), /*#__PURE__*/React.createElement("div", {
    className: "cafe-location"
  }, /*#__PURE__*/React.createElement("div", {
    className: "location_text"
  }, /*#__PURE__*/React.createElement("h3", null, "\u041D\u0430\u0439\u0434\u0438 \u0441\u0432\u043E\u0439 \u043B\u044E\u0431\u0438\u043C\u044B\u0439 \u0432\u043A\u0443\u0441 \u0447\u0430\u044F \u0432 Leaf & Cup!"), /*#__PURE__*/React.createElement("p", null, "\u041A\u0438\u0435\u0432 \u0443\u043B. \u0411\u0440\u043E\u0432\u0430\u0440\u0441\u043A\u0430\u044F 33")), /*#__PURE__*/React.createElement("div", {
    className: "img"
  }, /*#__PURE__*/React.createElement("img", {
    src: _photoLocationBlock.default,
    alt: "decorate"
  }), /*#__PURE__*/React.createElement("img", {
    src: _photoLocationBlock.default,
    alt: "back-part-decoration",
    className: "back-part-decoration"
  })))));
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_Header.Header, null), /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/leaf-and-cup",
    element: /*#__PURE__*/React.createElement(AppContent, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/leaf-and-cup/list-of-allGoods",
    element: /*#__PURE__*/React.createElement(_ListOfAllGoods.ListOfAllGoods, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/leaf-and-cup/wish-list",
    element: /*#__PURE__*/React.createElement(_WishList.WishList, null)
  })), /*#__PURE__*/React.createElement(_Footer.Footer, null)));
}