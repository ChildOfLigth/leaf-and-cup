import { JSX, Dispatch, SetStateAction, useState } from "react";
import { CustomButton } from "./CustomButton";
import { ProductObject } from "../productList.ts";
import "../style/ProductList.scss";
import iconForButton from "../assets/imgs/icons/iconToWishlist.svg";
import iconAddProdToWishList from "../assets/imgs/icons/addProdToWishList.svg";

type ProductListProps = {
  arrayWithProducts: ProductObject[];
  functToChangeList?: Dispatch<SetStateAction<ProductObject[]>>;
};

export default function ProductList({
  arrayWithProducts,
  functToChangeList,
}: ProductListProps): JSX.Element {
  const [activeBtn, setActiveBtn] = useState<number | null | undefined>(null);

  function addProdToWishList(id: number) {
    functToChangeList!((prev: ProductObject[]) => {
      const exists = prev.some((prod) => prod.id === id);
      const newList = exists ? prev : [...prev, arrayWithProducts[id]];

      localStorage.setItem("storage-with-wish-list", JSON.stringify(newList));

      return newList;
    });
  }

  return (
    <ul className="productList">
      {arrayWithProducts.map((prod) => (
        <li key={prod.id} className="productList-card_product-map">
          <img
            src={prod.imgURL}
            alt="product_img"
            className="product-map_prodPhoto"
          />

          <div className="product-map_productData">
            <h2 className="productData_name-prod">{prod.name}</h2>
            <p className="productData_details">{prod.details}</p>

            <div className="productData_price-block">
              <p className="price-block_price">{prod.price} грн</p>

              <CustomButton
                onClick={() => {
                  addProdToWishList(prod.id);
                  setActiveBtn(prod.id);
                  setTimeout(() => setActiveBtn(null), 1000);
                }}
                className={
                  activeBtn == prod.id
                    ? `custom-btn completionOfFunction`
                    : "custom-btn"
                }
              >
                {activeBtn == prod.id ? (
                  <img src={iconAddProdToWishList} />
                ) : (
                  <svg
                    viewBox="0 0 22 19"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      d="M15.7778 1C13.2982 1 11.8743 2.30695 11.2998 2.98929C11.1533 3.16341 10.8467 3.16341 10.7002 2.98929C10.1257 2.30695 8.70184 1 6.22222 1C3.37778 1 1 3.39342 1 6.23421C1 12.3185 9.67713 17.2769 10.8657 17.9276C10.952 17.9748 11.048 17.9748 11.1343 17.9276C12.3229 17.2769 21 12.3185 21 6.23421C21 3.39342 18.6222 1 15.7778 1Z"
                      stroke="white" 
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </CustomButton>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
