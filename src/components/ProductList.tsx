import { JSX, Dispatch, SetStateAction, useState } from "react";
import { CustomButton } from "./CustomButton";
import { ProductObject } from "../productList.ts";
import "../style/ProductList.scss";
import iconForButton from "../assets/imgs/icons/iconToWishlist.svg";
import iconAddProdToWishList from '../assets/imgs/icons/addProdToWishList.svg';

type ProductListProps = {
  arrayWithProducts: ProductObject[];
  functToChangeList?: Dispatch<SetStateAction<ProductObject[]>>;
};

export function ProductList({arrayWithProducts, functToChangeList}: ProductListProps): JSX.Element {
  const [activeBtn, setActiveBtn] = useState<number | null | undefined>(null);

  function addProdToWishList(id: number) {
    const wishList = functToChangeList!((prev: ProductObject[]) => [...prev, arrayWithProducts[id]]);
    localStorage.setItem('storage-with-wish-list', JSON.stringify(wishList));
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
              onClick={() => {addProdToWishList(prod.id); setActiveBtn(prod.id); setTimeout(() => setActiveBtn(null), 1000)}}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              className={activeBtn == prod.id ? `custom-btn completionOfFunction` : 'custom-btn'}
            >
              {activeBtn == prod.id ? <img src={iconAddProdToWishList}/> : <img src={iconForButton} alt="addProdToFavorites" />}
            </CustomButton>
          </div>
        </li>
      ))}
    </ul>
  );
}
