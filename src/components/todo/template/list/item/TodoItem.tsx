import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Itodo } from "components/todo/TodoService";
import React from "react";
import styled, { css } from "styled-components";

const Remove = styled.div`
  color: #119955;
  font-size: 16px;
  cursor: pointer;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 16px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const DueDate = styled.div<{ done: boolean }>`
  padding-right: 20px;
  color: #119955;

  span {
    color: #ff6348;
  }

  ${(props) =>
    props.done &&
    css`
      span {
        color: #ced4da;
      }
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={todo.done} onClick={handleToggle}>
        {todo.done && <CheckOutlined />}
      </CheckCircle>
      <Text done={todo.done}>{todo.text}</Text>
      {todo.dueDate && (
        <DueDate done={todo.done}>
          Due date : <span>{todo.dueDate}</span>
        </DueDate>
      )}
      <Remove onClick={handleRemove}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
