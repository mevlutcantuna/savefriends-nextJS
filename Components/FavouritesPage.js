import { useEffect, useState } from "react";
import FavCard from "./FavCard";
import {useSelector} from "react-redux";

function FavouritesPage() {

  const favourites = useSelector(state => state.FormReducer.favourites);

  console.log(favourites);
  return (
    <div className={"can"}>
      {
        (favourites === []) ? (
        <h1 style={{ display: "flex",justifyContent:'center'}}>Not Found Friends</h1>
      ) : (
        <div
          style={{ display: "flex",justifyContent:'center', flexWrap: "wrap", margin: "0 3rem 0 3rem" }}
        >
          {favourites.map((item) => (
            <FavCard key={item.id} item={item} />
          ))}
        </div>
      )
      }
    </div>
  );
}

export default FavouritesPage;
