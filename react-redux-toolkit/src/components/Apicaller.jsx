import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, setData } from "../features/apiCalls/usersCallSlice";

export function Apicaller() {
  const count = useSelector((state) => state.userCaller.value);
  const dispatch = useDispatch();

  async function getDataApi() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET",
    });
  
    let data = await response.text();
    setData(data)
    dispatch(getData())
    console.log(data);
  }

  return (
    <div>
      <div>
        <button aria-label="print JSON" onClick={getDataApi()}>
          {count}Print JSON
        </button>
      </div>
    </div>
  );
}
