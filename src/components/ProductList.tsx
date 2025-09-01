import { JSX, useState } from "react";
import { CustomButton } from "./CustomButton";
import { ProductObject } from "../productList.ts";
import "../style/ProductList.css";
import iconForButton from '../assets/imgs/icons/iconToWishlist.svg';

type ProductListProps = {
  arrayWithProducts: Array<ProductObject>;
};

export function ProductList({arrayWithProducts}: ProductListProps): JSX.Element {
  const [arrWithDesiredProd, setArrWithDesiredProd] = useState<Array<ProductObject>>([]);

  function addProdToWishList(id: number) {
    setArrWithDesiredProd((prev) => [...prev, arrayWithProducts[id]]);
    localStorage.setItem("wish-list", JSON.stringify(arrWithDesiredProd));
  };

  

  return (
    <ul className="productList">
      {arrayWithProducts.map((prod) => (
        <li key={prod.id}>
          <img
            src={prod.imgURL}
            alt="product_img"
            className="productList_prodPhoto"
          />
          <div className="productList_productData">
            <h2>{prod.name}</h2>
            <p>{prod.details}</p>
          </div>

          <div className="productList_price-block">
            <p>{prod.price} грн</p>
            <CustomButton 
            onClick={() => addProdToWishList(prod.id)}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            >
              <img src={iconForButton} alt="addProdToFavorites" />
            </CustomButton>
          </div>
        </li>
      ))}
    </ul>
  );
};
