import { useState } from "react";
import TodoForms from "../todo/TodoForms";
import { Input, Button } from "antd";

export default function Form() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [todos, setTodos] = useState([]);
  const [statusTitle, setStatusTitle] = useState([]);
  const [statusBody, setStatusBody] = useState([]);

  const deleteTodo = (i) => {
    setTodos([...todos.filter((todo, index) => index !== i)]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor=""> Title</label>

        <Input
          placeholder="Insert title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          allowClear
          status={statusTitle}
        />

        <label htmlFor=""> Body</label>

        <Input
          placeholder="Insert body"
          type="text"
          onChange={(e) => setBody(e.target.value)}
          value={body}
          allowClear
          status={statusBody}
        />

        <Button
          style={{ marginTop: 15 }}
          onClick={() => {
            if (title === undefined) setStatusTitle("error");
            else if (body === undefined) setStatusBody("error");
            else {
              setTodos([...todos, { title, body }]);
              setBody(undefined);
              setTitle(undefined);
            }
          }}
        >
          Создать дело
        </Button>
      </form>
      <div>
        {todos.map(({ title, body }, index) => (
          <TodoForms
            key={index}
            title={title}
            body={body}
            deleteTodo={deleteTodo}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
