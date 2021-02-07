import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addList } from "../../store/modules/todo";
import TodoList from "./TodoList";

export default function Todos() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.todo);
  const [text, setText] = useState("");
  let [id, setId] = useState(2);

  const onChange = (e) => setText(e.target.value);
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setId(id + 1);
      dispatch(addList({ id: id, text: text, done: false }));
      setText("");
    }
  };

  return (
    <TodosWrapper>
      <Input
        value={text}
        placeholder="할 일을 입력하세요.."
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {item.map((data, index) => {
        return <TodoList key={index} data={data} />;
      })}
    </TodosWrapper>
  );
}

const TodosWrapper = styled.section`
  width: 600px;
  background-color: white;
  box-shadow: 0px 10px 10px #dddddd;
`;

const Input = styled.input`
  height: 60px;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: 100;
  border: none;
  border-bottom: 1px solid #eeeeee;
`;
