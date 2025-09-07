import { JSX } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../public/logo.svg";
import facebookIcon from "../assets/imgs/icons/facebook.svg";
import instagramIcon from "../assets/imgs/icons/instagram.svg";
import telegramIcon from "../assets/imgs/icons/telegram.svg";
import "../style/Footer.scss";
import { NavigationLink } from "./NavigationLink";

export function Footer(): JSX.Element {
  return (
    <>
      <footer>
        <div className="footer_content">
          <div className="footer_content_top-part">
            <ul className="top-part_social-media">

              <li className="social-media_link">
                <img
                  src={facebookIcon}
                  alt="facebookIcon"
                  className="link_icon-social-media"
                />
                <address>@leafandcup</address>
              </li>

              <li className="social-media_link">
                <img
                  src={instagramIcon}
                  alt="instagramIcon"
                  className="link_icon-social-media"
                />
                <address>@leafcup_tea</address>
              </li>

              <li className="social-media_link">
                <img
                  src={telegramIcon}
                  alt="telegramIcon"
                  className="link_icon-social-media"
                />
                <address>@leafcup_official</address>
              </li>
            </ul>

            <NavigationLink />
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
