import { JSX } from "react";
import decoratForTeaQualSection from "../assets/imgs/photo-for-productList-component.webp";
import { ProductList } from "./ProductList";
import { productsList } from "../productList.ts";
import "../style/ListOfAllGoods.css";

export function ListOfAllGoods(): JSX.Element {
  return (
    <>
      <div className="quality-of-ourTea">
        <img src={decoratForTeaQualSection} alt="decoration-part" />

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

      <ProductList arrayWithProducts={productsList} />
    </>
  );
}
