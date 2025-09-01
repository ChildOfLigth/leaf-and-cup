"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductList = ProductList;
var _react = require("react");
var _CustomButton = require("./CustomButton");
var _productList = require("../productList.ts");
require("../style/ProductList.css");
var _iconToWishlist = _interopRequireDefault(require("../assets/imgs/icons/iconToWishlist.svg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ProductList(_ref) {
  var arrayWithProducts = _ref.arrayWithProducts;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    arrWithDesiredProd = _useState2[0],
    setArrWithDesiredProd = _useState2[1];
  function addProdToWishList(id) {
    setArrWithDesiredProd(function (prev) {
      return [].concat(_toConsumableArray(prev), [arrayWithProducts[id]]);
    });
    localStorage.setItem("wish-list", JSON.stringify(arrWithDesiredProd));
  }
  ;
  return /*#__PURE__*/React.createElement("ul", {
    className: "productList"
  }, arrayWithProducts.map(function (prod) {
    return /*#__PURE__*/React.createElement("li", {
      key: prod.id
    }, /*#__PURE__*/React.createElement("img", {
      src: prod.imgURL,
      alt: "product_img",
      className: "productList_prodPhoto"
    }), /*#__PURE__*/React.createElement("div", {
      className: "productList_productData"
    }, /*#__PURE__*/React.createElement("h2", null, prod.name), /*#__PURE__*/React.createElement("p", null, prod.details)), /*#__PURE__*/React.createElement("div", {
      className: "productList_price-block"
    }, /*#__PURE__*/React.createElement("p", null, prod.price, " \u0433\u0440\u043D"), /*#__PURE__*/React.createElement(_CustomButton.CustomButton, {
      onClick: function onClick() {
        return addProdToWishList(prod.id);
      },
      style: {
        width: "50px",
        height: "50px",
        borderRadius: "50%"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: _iconToWishlist.default,
      alt: "addProdToFavorites"
    }))));
  }));
}
;