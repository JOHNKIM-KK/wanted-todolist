import React, { useState } from "react";
import styled from "styled-components";
import { DatePicker, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Itodo } from "components/todo/TodoService";

const CircleButton = styled.button`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #7bed9f;
  }
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  background-color: #eeeeee;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 40px;
  padding-top: 16px;
  padding-right: 60px;
  padding-bottom: 16px;
`;

const Input = styled.input`
  padding: 12px 12px 12px 21px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #bfbfbf;
    font-size: 16px;
  }

  &:hover {
    border: 1px solid #119955;
  }

  &:focus {
    border: 1px solid #119955;
    box-shadow: 0 0 0 2px rgb(46 213 115/ 20%);
  }
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 110px 16px 40px;

  div {
    width: 100%;
  }

  input {
    padding: 12px;
    font-size: 17px;
  }

  .ant-picker {
    &:hover {
      border: 1px solid #119955;
    }
  }

  .ant-picker-focused {
    border: 1px solid #119955;
    box-shadow: 0 0 0 2px rgb(46 213 115/ 20%);
  }
`;

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId,
}: TodoCreateProps) => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onChange = (date: any, dateString: string) => {
    setDate(dateString);
  };

  const error = () => {
    Modal.error({
      title: "빈칸을 작성해주세요!!",
      content: "todo text는 필수값입니다! 😃 ",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지
    if (value) {
      createTodo({
        id: nextId,
        text: value,
        done: false,
        dueDate: date,
      });
      incrementNextId(); // nextId 하나 증가

      setValue(""); // input 초기화
    } else {
      error();
    }
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={handleChange}
            value={value}
          />
          <CircleButton>
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
        <DateContainer>
          <DatePicker onChange={onChange} />
        </DateContainer>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);
