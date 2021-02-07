import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteList, toggleList, modifyList } from "../../store/modules/todo";

export default function TodoList({ data }) {
  const dispatch = useDispatch();
  let [isModifyClicked, setModifyStatus] = useState(false);
  const [text, setText] = useState(data.text);

  const onToggle = () => {
    dispatch(toggleList(data.id));
  };
  const onTextChange = (value) => {
    setText(value);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(modifyList({ id: data.id, text: text }));
      setModifyStatus(!isModifyClicked);
      setText("");
    }
  };
  const onStatusChange = () => {
    setModifyStatus(!isModifyClicked);
  };
  const onDelete = () => {
    dispatch(deleteList(data.id));
  };

  return (
    <>
      {isModifyClicked && (
        <Input
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          onKeyPress={onKeyPress}
        />
      )}
      {!isModifyClicked && (
        <List>
          <Text done={data.done} onClick={onToggle}>
            {data.text}
          </Text>
          <div>
            <Button name="modifyBtn" onClick={onStatusChange}>
              수정
            </Button>
            <Button name="deleteBtn" onClick={onDelete}>
              삭제
            </Button>
          </div>
        </List>
      )}
    </>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 14px;
  background-color: white;
  border-bottom: 1px solid #eeeeee;
`;

const Text = styled.div`
  color: ${(props) => (props.done ? "#cccccc" : "black")};
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  cursor: pointer;
`;

const Button = styled.button`
  margin: 0 6px;
  background-color: white;
  color: ${(props) => (props.name === "modifyBtn" ? "#00a0df" : "#fe6f6f")};
  cursor: pointer;
`;

const Input = styled.input`
  height: 60px;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: 100;
  border: 10px solid #eeeeee;
`;
