import { Dispatch, JSX, SetStateAction, useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import useScreenResize from "../useScreenResize";
import "../style/Header.scss";
import logo from "../../public/logo.svg";

interface HeaderProps {
  activeMenuBurger: boolean;
  toggleModal: Dispatch<SetStateAction<boolean>>;
}

export default function Header({
  activeMenuBurger,
  toggleModal,
}: HeaderProps): JSX.Element {
  const location = useLocation();
  const [activeClassLink, setActiveClassLink] = useState<boolean>(false);
  const [visibleMenuBurger, setVisibleMenuBurger] = useState<boolean>(false);

  function displayOfBurgerMenu(): void {
    setVisibleMenuBurger(window.innerWidth <= 742);
  }

  useScreenResize(displayOfBurgerMenu);

  useEffect(() => {
    if (location.pathname == "/leaf-and-cup/wish-list") {
      setActiveClassLink(true);
    } else {
      setActiveClassLink(false);
    }
  }, [location.pathname]);

  return (
    <>
      <header>
        <div className="header-content">
          <img src={logo} alt="" className="header-content_logo-block" />
          {visibleMenuBurger != true ? (
            <>
              <div className="header-content_navigation">
                <Link to="/leaf-and-cup">Главная</Link>

                <Link to="/leaf-and-cup/list-of-allGoods">Весь асортимент</Link>

                <Link to="/leaf-and-cup#cafe-location">Контакты</Link>

                <Link
                  to="/leaf-and-cup/wish-list"
                  title="Перейти в список желаемого"
                  className={
                    activeClassLink
                      ? "navigation_navigate-to-wishList active"
                      : "navigation_navigate-to-wishList"
                  }
                >
                  <svg viewBox="0 0 22 19" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7778 1C13.2982 1 11.8743 2.30695 11.2998 2.98929C11.1533 3.16341 10.8467 3.16341 10.7002 2.98929C10.1257 2.30695 8.70184 1 6.22222 1C3.37778 1 1 3.39342 1 6.23421C1 12.3185 9.67713 17.2769 10.8657 17.9276C10.952 17.9748 11.048 17.9748 11.1343 17.9276C12.3229 17.2769 21 12.3185 21 6.23421C21 3.39342 18.6222 1 15.7778 1Z" strokeWidth="2"/>
                  </svg>
                </Link>
              </div>
            </>
          ) : (
            <>
              <button
                className={
                  activeMenuBurger
                    ? "header-content_open-menu-burger open"
                    : "header-content_open-menu-burger"
                }
                onClick={() => {
                  toggleModal(!activeMenuBurger);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </>
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
}
