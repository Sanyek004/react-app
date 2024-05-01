import { useState } from "react";
//import Button from "./Button";

export default function TodoButtunClick() {
  //const [done, setDone] = useState(false);
  //const changeDone = () => setDone(!done);
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter + 1);
  /*
  return (
    <div>
      <div>{JSON.stringify(done)}</div>
      <Button onClick={() => changeDone()} />
    </div>
  );
  */
  return <div onMouseLeave={() => handleClick(counter)}> {counter} </div>;
}
