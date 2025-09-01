"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = Header;
var _react = require("react");
var _facebook = _interopRequireDefault(require("../assets/imgs/icons/facebook.svg"));
var _instagram = _interopRequireDefault(require("../assets/imgs/icons/instagram.svg"));
var _telegram = _interopRequireDefault(require("../assets/imgs/icons/telegram.svg"));
var _iconToWishlist = _interopRequireDefault(require("../assets/imgs/icons/iconToWishlist.svg"));
var _logo = _interopRequireDefault(require("../../public/logo.svg"));
require("../style/Header.css");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Header() {
  var navigation = (0, _reactRouterDom.useNavigate)();
  var location = (0, _reactRouterDom.useLocation)();
  var _useState = (0, _react.useState)("/leaf-and-cup/list-of-allGoods"),
    _useState2 = _slicedToArray(_useState, 2),
    linkState = _useState2[0],
    setLinkState = _useState2[1];
  var _useState3 = (0, _react.useState)("Весь ассортимент"),
    _useState4 = _slicedToArray(_useState3, 2),
    linkName = _useState4[0],
    setLinkName = _useState4[1];
  (0, _react.useEffect)(function () {
    if (location.pathname !== "/leaf-and-cup/") {
      setLinkState("/leaf-and-cup/");
      setLinkName("Главная страница");
    } else {
      setLinkState("/leaf-and-cup/list-of-allGoods");
      setLinkName("Весь ассортимент");
    }
  }, [location.pathname]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "header-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-content_logo-block",
    onClick: function onClick() {
      return navigation("/leaf-and-cup");
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _logo.default,
    alt: "",
    className: "logo"
  }), /*#__PURE__*/React.createElement("p", null, "Leaf & Cup")), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: linkState
  }, linkName), /*#__PURE__*/React.createElement("div", {
    className: "header-content_block-with-actions"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/leaf-and-cup/wish-list"
  }, /*#__PURE__*/React.createElement("img", {
    src: _iconToWishlist.default,
    alt: "icon-to-wishList",
    title: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0433\u043E",
    className: "icon"
  })), /*#__PURE__*/React.createElement("img", {
    src: _facebook.default,
    alt: "Facebook",
    className: "icon"
  }), /*#__PURE__*/React.createElement("img", {
    src: _instagram.default,
    alt: "Instagram",
    className: "icon"
  }), /*#__PURE__*/React.createElement("img", {
    src: _telegram.default,
    alt: "Telegram",
    className: "icon"
  })))), /*#__PURE__*/React.createElement(_reactRouterDom.Outlet, null));
}