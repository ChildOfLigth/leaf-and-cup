"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WishList = WishList;
var _react = require("react");
function WishList() {
  var getLocalStorageData = localStorage.getItem("wish-list");
  var wishList = getLocalStorageData ? JSON.parse(getLocalStorageData) : [];
  return /*#__PURE__*/React.createElement(React.Fragment, null, wishList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
      src: item.imgURL,
      alt: "product_img",
      className: "productList_prodPhoto"
    }), /*#__PURE__*/React.createElement("h2", null, item.name), /*#__PURE__*/React.createElement("p", null, item.details), /*#__PURE__*/React.createElement("p", null, item.price, " \u0433\u0440\u043D"));
  }));
}