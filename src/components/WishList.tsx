import { JSX } from "react";

export function WishList(): JSX.Element {
  const getLocalStorageData = localStorage.getItem("wish-list");

  const wishList: any[] = getLocalStorageData
    ? JSON.parse(getLocalStorageData)
    : [];

  return (
    <>
      {wishList.map((item, index) => (
        <>
          <img
            src={item.imgURL}
            alt="product_img"
            className="productList_prodPhoto"
          />
          <h2>{item.name}</h2>
          <p>{item.details}</p>

          <p>{item.price} грн</p>
        </>
      ))}
    </>
  );
}
