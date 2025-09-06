import { JSX, useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export function NavigationLink(): JSX.Element {
  const location = useLocation();
  const [linkState, setLinkState] = useState<string>(
    "/leaf-and-cup/list-of-allGoods"
  );
  const [linkName, setLinkName] = useState<string>("Весь ассортимент");

  useEffect(() => {
    if (location.pathname != "/leaf-and-cup/") {
      setLinkState("/leaf-and-cup/");
      setLinkName("Главная");
    } else {
      setLinkState("/leaf-and-cup/list-of-allGoods");
      setLinkName("Весь ассортимент");
    }
  }, [location.pathname]);
  
  return <Link to={linkState}>{linkName}</Link>;
}
