import { Dispatch, JSX, SetStateAction, useState, useEffect } from "react";
import { Routes, BrowserRouter, Route, useNavigate } from "react-router-dom";
import { CustomButton } from "./components/CustomButton";
import { ProductList } from "./components/ProductList.tsx";
import { ListOfAllGoods } from "./components/ListOfAllGoods.tsx";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { WishList } from "./components/WishList.tsx";
import { previewProducts, ProductObject } from "./productList.ts";
import photoForPresentBlock from "./assets/imgs/photo-for-presentBlock.webp";
import photoForAboutUs from "./assets/imgs/photo-for-aboutUs-block.webp";
import photoLocationBlock from "./assets/imgs/photoLocationBlock.webp";
import { MenuBurger } from "./components/MenuBurger.tsx";
import "./style/App.scss";
import "./style/resetDefaultStyle.css";

interface AppPropsType {
  funcChengeWishList: Dispatch<SetStateAction<ProductObject[]>>;
}

function AppContent({ funcChengeWishList }: AppPropsType): JSX.Element {
  const navigate = useNavigate();

  return (
    <main className="App">
      <div className="present-block">
        <div className="present-block_information-block">
          <h1>Leaf & Cup</h1>
          <p>
            В Leaf & Cup мы верим, что чай — это больше, чем просто напиток —
            это момент спокойствия, ритуал связи и источник вдохновения. Наше
            кафе было создано как уютное пространство, где вы можете отдохнуть
            от городской суеты, насладиться ароматом тщательно отобранных чаев и
            поделиться разговорами за чашкой дымящегося чая.
          </p>
          <CustomButton
            style={{ width: "300px", height: "70px", fontSize: "1.1em" }}
            onClick={() => navigate("/leaf-and-cup/list-of-allGoods")}
          >
            Каталог
          </CustomButton>
        </div>

        <img
          src={photoForPresentBlock}
          alt="cap-of-tea"
          className="photo-for-presentBlock"
        />
      </div>

      <ProductList
        arrayWithProducts={previewProducts}
        functToChangeList={funcChengeWishList}
      />

      <div className="aboutUs">
        <ul className="aboutUs_frst-column">
          <li>
            <div className="column_text-content">
              <div className="text-content_title">
                <p className="title-column_index">1</p>
                <h3>Редкие сорта чая</h3>
              </div>
              <p>
                Не только классика, но и эксклюзивные коллекции со всего мира
              </p>
            </div>
          </li>

          <li>
            <div className="column_text-content">
              <div className="text-content_title">
                <p className="title-column_index">2</p>
                <h3>Высокое качество каждого заваривания</h3>
              </div>

              <p>
                Мы заботимся о том, чтобы каждый чай был свежим, насыщенным и
                идеально раскрывал свой вкус.
              </p>
            </div>
          </li>
        </ul>

        <img
          src={photoForAboutUs}
          alt="aboutUs_decoratePhoto"
          className="aboutUs_decoratePhoto"
        />

        <ul className="aboutUs_second-column">
          <li>
            <div className="column_text-content">
              <div className="text-content_title">
                <p className="title-column_index">3</p>
                <h3>Уютная атмосфера</h3>
              </div>

              <p>
                Интерьер и музыка создают пространство, где хочется остаться
                подольше
              </p>
            </div>
          </li>

          <li>
            <div className="column_text-content">
              <div className="text-content_title">
                <p className="title-column_index">4</p>
                <h3>Дружелюбный сервис</h3>
              </div>

              <p>Бариста и сотрудники помогают выбрать чай под настроение.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="cafe-location">
        <div className="location_text">
          <h3>Найди свой любимый вкус чая в Leaf & Cup!</h3>
          <p>Киев ул. Броварская 33</p>
        </div>

        <div className="img">
          <img src={photoLocationBlock} alt="decorate" />
          <img
            src={photoLocationBlock}
            alt="back-part-decoration"
            className="back-part-decoration"
          />
        </div>
      </div>
    </main>
  );
}
export default function App() {
  const [wishList, setWishList] = useState<ProductObject[]>(() => {
    const saved = localStorage.getItem("storage-with-wish-list");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeMenuBurger, setActiveMenuBurger] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("storage-with-wish-list", JSON.stringify(wishList));
  }, [wishList]);

  return (
    <BrowserRouter>
      <Header
        activeMenuBurger={activeMenuBurger}
        toggleModal={setActiveMenuBurger}
      />
      <Routes>
        <Route
          path="/leaf-and-cup"
          element={<AppContent funcChengeWishList={setWishList} />}
        />
        <Route
          path="/leaf-and-cup/list-of-allGoods"
          element={<ListOfAllGoods functToChangeList={setWishList} />}
        />
        <Route
          path="/leaf-and-cup/wish-list"
          element={
            <WishList wishList={wishList} functToChangeList={setWishList} />
          }
        />
      </Routes>

      <MenuBurger activeMenuBurger={activeMenuBurger} />
      <Footer />
    </BrowserRouter>
  );
}
