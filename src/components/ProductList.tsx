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

export default function ProductList({arrayWithProducts, functToChangeList}: ProductListProps): JSX.Element {
  const [activeBtn, setActiveBtn] = useState<number | null | undefined>(null);

  function addProdToWishList(id: number) {
  functToChangeList!((prev: ProductObject[]) => {
    const exists = prev.some(prod => prod.id === id);
    const newList = exists
      ? prev 
      : [...prev, arrayWithProducts[id]];

    localStorage.setItem(
      "storage-with-wish-list",
      JSON.stringify(newList)
    );

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
                  <img src={iconForButton} alt="addProdToFavorites" />
                )}
              </CustomButton>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
