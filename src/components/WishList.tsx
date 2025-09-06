import { JSX, SetStateAction, Dispatch } from "react";
import { ProductObject } from "../productList.ts";
import iconForRemoveBtn from "../assets/imgs/icons/remove.svg";
import photoForWishList from "../assets/imgs/photo-for-wishList.webp";
import "../style/WishList.scss";

interface PropsForWishList {
  wishList: ProductObject[] | [];
  functToChangeList: Dispatch<SetStateAction<ProductObject[]>>;
}

export function WishList({
  wishList,
  functToChangeList,
}: PropsForWishList): JSX.Element {
  function removeProdFromWishist(id: number) {
    functToChangeList((prev: ProductObject[]) => {
      const newList = prev.filter((_, index) => index !== id);
      localStorage.setItem("storage-with-wish-list", JSON.stringify(newList));

      return newList;
    });
  }

  return (
    <>
      <div className="wish-list">
        <div className="wish-list_page-description">
          <div className="page-description_text-content">
            <h1 className="page-description_headline">Список желаемого</h1>

            <div className="page-description_description">
              <p>Здесь собраны чаи, которые вы добавили в избранное.</p>
              <p>
                Возвращайтесь в любое время, чтобы быстро найти любимые вкусы
              </p>
            </div>
          </div>

          <img
            src={photoForWishList}
            alt="photo-for-wishList"
            className="page-description_photo-for-wishlist"
          />
        </div>

        <ul className="wish-list_products">
          {wishList.length != 0 ? (
            wishList.map((item, index) => (
              <li className="products_product-card" key={index}>
                <img
                  src={item.imgURL}
                  alt="product-card_img"
                  className="product-card_prodPhoto"
                />
                <div className="product-card_text-content">
                  <h2>{item.name}</h2>
                  <p className="product-card_details">{item.details}</p>

                  <p className="product-card_price">{item.price} грн</p>

                  <button
                    onClick={() => removeProdFromWishist(index)}
                    className="product-card_remove-icon"
                    title="Удалить из списка"
                  >
                    <img src={iconForRemoveBtn} alt="remove-icon" />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <h2 className="products_empty-list">Здесь пусто...</h2>
          )}
        </ul>
      </div>
    </>
  );
}
