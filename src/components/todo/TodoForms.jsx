import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

export default function TodoForms(props) {
  const { title, body, deleteTodo, index } = props;
  const [flag, setFlag] = useState(false);

  const ChangeDo = () => {
    setFlag(!flag);
  };

  return (
    <div onClick={(e) => ChangeDo(e)}>
      <h1 className={flag ? styles.gray : ""}>{title}</h1>
      <div className={flag ? styles.gray : ""}>{body}</div>
      <DeleteOutlined spin onClick={() => deleteTodo(index)} />
    </div>
  );
}

TodoForms.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  deleteTodo: PropTypes.func,
  index: PropTypes.number,
};
