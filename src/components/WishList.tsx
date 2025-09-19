import { JSX, SetStateAction, Dispatch, useState } from "react";
import { ProductObject } from "../productList.ts";
import useScreenResize from "../useScreenResize.ts";
import iconForRemoveBtn from "../assets/imgs/icons/remove.svg";
import photoForWishList from "../assets/imgs/photo-for-wishList.webp";
import photoForWishListSecondVariant from "../assets/imgs/photo-for-wishList-second-variant.webp";
import "../style/WishList.scss";

interface PropsForWishList {
  wishList: ProductObject[] | [];
  functToChangeList: Dispatch<SetStateAction<ProductObject[]>>;
}

export default function WishList({wishList, functToChangeList}: PropsForWishList): JSX.Element {
  const [activateSecondPhoto, setActivateSecondPhoto] =
    useState<boolean>(false);

  function removeProdFromWishist(id: number) {
    functToChangeList((prev: ProductObject[]) => {
      const newList = prev.filter((_, index) => index !== id);
      localStorage.setItem("storage-with-wish-list", JSON.stringify(newList));

      return newList;
    });
  }

  useScreenResize(() => setActivateSecondPhoto(window.innerWidth <= 844));

  return (
    <>
      <div className="wish-list">
        <div className="wish-list_page-description">
          <div className="page-description_text-content">
            <h1 className="text-content_headline">Список желаемого</h1>

            <p className="text-content_description">
              Здесь собран весь чай, который вы добавили в избранное.
              Возвращайтесь в любое время, чтобы быстро найти любимые вкусы
            </p>
          </div>

          <div className="page-description_photo-for-wishlist">
            <img
              src={
                activateSecondPhoto
                  ? photoForWishListSecondVariant
                  : photoForWishList
              }
              alt="photo-for-wishList"
            />
        </div>


        </div>

      {wishList.length != 0 ? (
        <ul className="wish-list_products">
            {wishList.map((item, index) => (
              <li className="products_product-card" key={index}>
                <img
                  src={item.imgURL}
                  alt="product-card_img"
                  className="product-card_prodPhoto"
                />

                <div className="product-card_text-content">
                  <h2 className="text-content_product-name">{item.name}</h2>
                  <p className="text-content_details">{item.details}</p>

                  <button
                    onClick={() => removeProdFromWishist(index)}
                    className="text-content_remove-icon"
                    title="Удалить из списка"
                  >
                    <img src={iconForRemoveBtn} alt="remove-icon" />
                  </button>
                </div>
              </li>
            ))}
        </ul>
        ) : (
          <h2 className="message-about-empty-list">Здесь пусто...</h2>
        )}
      </div>
    </>
  );
}
