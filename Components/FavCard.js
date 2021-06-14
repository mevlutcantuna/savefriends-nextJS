import React from "react";
import { useRouter } from "next/router";
import {useDispatch} from "react-redux";
import {ADDREMOVE} from "../Store/Constant/Constant";

function FavCard(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "1rem 1rem" }} className={"favCard"}>
      <div className={"favCard__image"}>
        <img
          alt={"image"}
          style={{ borderRadius: "2rem" }}
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/220`}
        />
      </div>
      <div style={{ fontSize: "2rem" }}>{props.item.name}</div>
      <div>{props.item.email}</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
              onClick={() => dispatch({type:ADDREMOVE.REMOVE_PERSON,payload:props.item.id})}
              style={{
                  color: "#dc143c",
                  cursor: "pointer",
                  width: "4rem",
                  height: "1.75rem",
                  outline: "none",
                  borderRadius: "1rem",
                  border: "none",
                  marginTop:'1rem'
              }}
          >Delete</button>
        <button
          onClick={() => router.push(`/detail?id=${props.item.id}`)}
          style={{
            color: "#dc143c",
            cursor: "pointer",
            width: "4rem",
            height: "1.75rem",
            outline: "none",
            borderRadius: "1rem",
            border: "none",
              marginTop:'1rem'
          }}
        >
          Detail
        </button>
      </div>
    </div>
  );
}

export default FavCard;
