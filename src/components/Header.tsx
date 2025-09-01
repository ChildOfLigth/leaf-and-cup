import { JSX, useEffect, useState } from "react";
import facebookIcon from "../assets/imgs/icons/facebook.svg";
import instagramIcon from "../assets/imgs/icons/instagram.svg";
import telegramIcon from "../assets/imgs/icons/telegram.svg";
import iconToWishlist from "../assets/imgs/icons/iconToWishlist.svg";
import logo from "../../public/logo.svg";
import "../style/Header.css";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

export function Header(): JSX.Element {
  const navigation = useNavigate();
  const location = useLocation();
  const [linkState, setLinkState] = useState("/leaf-and-cup/list-of-allGoods");
  const [linkName, setLinkName] = useState("Весь ассортимент");

  useEffect(() => {
    if (location.pathname !== "/leaf-and-cup/") {
      setLinkState("/leaf-and-cup/");
      setLinkName("Главная страница");
    } else {
      setLinkState("/leaf-and-cup/list-of-allGoods");
      setLinkName("Весь ассортимент");
    }
  }, [location.pathname]);

  return (
    <>
      <header>
        <div className="header-content">
          <div
            className="header-content_logo-block"
            onClick={() => navigation("/leaf-and-cup")}
          >
            <img src={logo} alt="" className="logo" />
            <p>Leaf & Cup</p>
          </div>

          <Link to={linkState}>{linkName}</Link>

          <div className="header-content_block-with-actions">
            <Link to="/leaf-and-cup/wish-list"><img src={iconToWishlist} alt="icon-to-wishList" title="Перейти в список желаемого" className="icon" /></Link>
            <img src={facebookIcon} alt="Facebook" className="icon" />
            <img src={instagramIcon} alt="Instagram" className="icon" />
            <img src={telegramIcon} alt="Telegram" className="icon" />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
