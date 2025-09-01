import { JSX } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../public/logo.svg";
import facebookIcon from "../assets/imgs/icons/facebook.svg";
import instagramIcon from "../assets/imgs/icons/instagram.svg";
import telegramIcon from "../assets/imgs/icons/telegram.svg";
import "../style/Footer.css";

export function Footer(): JSX.Element {
  return (
    <>
      <footer>
        <div className="footer_content">
          <div className="footer_content_top-part">
            <ul className="top-part_social-media">
              <h4>Соцсети</h4>

              <li className="social-media_link">
                <img
                  src={facebookIcon}
                  alt="facebookIcon"
                  className="link_icon-social-media"
                />
                <p>@leafandcup</p>
              </li>

              <li className="social-media_link">
                <img
                  src={instagramIcon}
                  alt="instagramIcon"
                  className="link_icon-social-media"
                />
                <p>@leafcup_tea</p>
              </li>

              <li className="social-media_link">
                <img
                  src={telegramIcon}
                  alt="telegramIcon"
                  className="link_icon-social-media"
                />
                <p>@leafcup_official</p>
              </li>
            </ul>

            <Link to="leaf-and-cup/list-of-allGoods">Весь ассортимент</Link>
          </div>

          <div className="footer_content_bottom-part">
            <img src={logo} alt="logo" className="bottom-part_logo"/>

            <div className="bottom-part_text-part">
              <h4>Leaf & Cup</h4>
              <p>©2025. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

      <Outlet />
    </>
  );
}
