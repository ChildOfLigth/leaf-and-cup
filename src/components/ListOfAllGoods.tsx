import { JSX, Dispatch, SetStateAction } from "react";
import decoratForTeaQualSection from "../assets/imgs/photo-for-productList-component.webp";
import { ProductList } from "./ProductList";
import { productsList, ProductObject } from "../productList.ts";
import "../style/ListOfAllGoods.scss";

interface PropsListOfAllGoods {
  functToChangeList: Dispatch<SetStateAction<ProductObject[]>>,
}

export function ListOfAllGoods({functToChangeList}: PropsListOfAllGoods): JSX.Element {
  return (
    <div className="list-all-goods">
      <div className="list-all-goods_quality-of-ourTea">
        <div className="quality-of-ourTea_decoaret-img">
          <img src={decoratForTeaQualSection} alt="decoration-img" />
        </div>

        <div className="quality-of-ourTea_text-part">
          <h2>О качестве нашего чая</h2>
          <p>
            В <span>Leaf of Cup</span> мы верим, что чашка чая — это не просто
            напиток, а маленький ритуал заботы о себе. Мы собираем лучшие сорта
            со всего мира, чтобы вы могли найти вкус по душе: от нежных
            цветочных нот до ярких фруктовых акцентов и глубоких классических
            оттенков. Каждый чай в нашем меню — это история, которой хочется
            делиться.
          </p>
        </div>
      </div>

      <ProductList arrayWithProducts={productsList} functToChangeList={functToChangeList}/>
    </div>
  );
}
