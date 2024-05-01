import {} from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

export default function Todo(props) {
  const { TaskDescription, Tasktitle, doneFlag } = props;
  console.log({ doneFlag });
  return (
    <div className={doneFlag ? styles.gray : ""}>
      <h1 className={styles.title}> {Tasktitle} </h1>
      <div className={styles.text}> {TaskDescription} </div>
      <div className={styles.text}> {JSON.stringify(doneFlag)} </div>
    </div>
  );
}

Todo.propTypes = {
  TaskDescription: PropTypes.string,
  Tasktitle: PropTypes.string,
  doneFlag: PropTypes.bool,
};
