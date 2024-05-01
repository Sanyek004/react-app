import React, { useEffect, useState } from "react";
import Button from "./button";

export default function TodoButtunClick() {
  //const [done, setDone] = useState(false);
  //const changeDone = () => setDone(!done);
  const [counter, setCounter] = useState(0);
  const handleClick = (e) => setCounter(counter + 1);
  /*
  return (
    <div>
      <div>{JSON.stringify(done)}</div>
      <Button onClick={() => changeDone()} />
    </div>
  );
  */
  return <div onMouseLeave={(e) => handleClick(counter)}> {counter} </div>;
}
