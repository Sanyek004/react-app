import React, { useEffect, useState } from "react";
//import { Button } from "antd";
import axios from "axios";
import Loader from "../common/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
//import { setLoading } from "../../store/testSlice";
import { setNumberDecrement } from "../../store/testNumberDEcrement";
import { number } from "prop-types";

export default function Test() {
  //1 const [number, setNumber] = useState(() => {
  //   const localNumber = localStorage.getItem("number");
  //   return localNumber !== null ? Number(localNumber) : 0;
  // });
  // const [number, setNumber] = useState();
  //2 const [loading, setLoading] = useState(true);
  //1 useEffect(() => {
  //   localStorage.setItem("number", number);
  //   console.log(number);
  // }, []);

  const dispatch = useDispatch();

  // const loading = useSelector((state) => state.test.loading);

  const decrement = useSelector((state) => state.test.number);

  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   axios("http://jsonplaceholder.typicode.com/users")
  //     .then((data) => {
  //       dispatch(setLoading(false));
  //       setNumber(data.data[1].email);
  //     })
  //     .catch((e) => {
  //       if (e !== null) setNumber("Нет такого товара");
  //     });
  // }, [setLoading, dispatch, setNumber]);

  useEffect(() => {
    dispatch(setNumberDecrement(decrement));
  }, [decrement, dispatch, setNumberDecrement]);

  return (
    <div>
      {/*1 <Button onClick={() => setNumber(number + 1)}>{number}</Button> */}
      {/*1 {loading ? null : number} */}
      {/* {loading ? <Loader subject="users" /> : number} */}
      {0}
    </div>
  );
}
