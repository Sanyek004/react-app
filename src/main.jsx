import React /*{ useEffect, useState }*/ from "react";
import ReactDOM from "react-dom/client";
//import Todo from "./components/todo/Todo.jsx";
//import Button from "./components/button/Button.jsx";
//import TodoButtunClick from "./components/button/TodoButtunClick.jsx";
//import TodoChangeColor from "./components/todo/TodoChangeColor.jsx";
import "./index.css";
//import TodoEvent from "./components/todo/TodoEvent.jsx";
//import TodoClick from "./components/button/TodoButtunClick.jsx";
//import Form from "./components/form/Form.jsx";
import Test from "./components/test/Test";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer as testReducer } from "./store/testSlice";
import { reducer as testNumberDecrement } from "./store/testNumberDEcrement";
import Task2 from "./components/Task2/Task2";
import Publication from "./components/Publication/Publication";
import Drawer from "./components/Drawer/Drawer";
import Slider from "./components/Slider/Slider";
import HeaderSlider from "./components/HeaderSlider/HeaderSlider";
import Gallery from "./components/Gallery/Gallery";
import HeaderLogotext from "./components/HeaderLogotext/HeaderLogotext";
import Partners from "./components/Partners/Partners";
import About from "./components/About/About";
import ProductCard from "./components/ProductCard/ProductCard";
import WaterFiltrationSystem from "./components/WaterFiltrationSystem/WaterFiltrationSystem";


const store = configureStore({
  reducer: {
    test: testReducer,
    number: testNumberDecrement,
  },
});

/*
export default function Todo2() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) => setPosts(data));
  });

  return posts.map((post) => (
    <Todo
      Tasktitle={post.id}
      TaskDescription={post.title}
      doneFlag={post.completed}
    />
  ));
}
*/



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HeaderSlider />
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root2")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Publication />
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root3")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Slider />
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root4")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Gallery />
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root5")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HeaderLogotext />
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root6")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Partners />
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root7")).render(
  <React.StrictMode>
    <Provider store={store}>
      <About />
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root8")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductCard />
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root9")).render(
  <React.StrictMode>
    <Provider store={store}>
      <WaterFiltrationSystem />
    </Provider>
  </React.StrictMode>
);