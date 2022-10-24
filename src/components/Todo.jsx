import React from "react";
import { ListGroup } from "react-bootstrap";
import { CgTrash } from "react-icons/cg";
import { GiCheckMark } from "react-icons/gi";
import ButtonUi from "./Button";

const Todo = ({ id, todo, completed, deleteTodo, updateTodo }) => {
  return (
    <>
      <ListGroup.Item
        className={`d-flex align-items-center gap-3 my-2 todo ${
          completed && "completed"
        }`}
      >
        <span
          className="checkbox d-inline-block rounded-circle position-relative"
          role="button"
          onClick={() => updateTodo(id)}
        >
          <GiCheckMark className="position-absolute start-50 top-50 translate-middle" />
        </span>
        <p className="flex-fill mb-0 user-select-none">{todo}</p>

        <ButtonUi buttonClass="delete" onClick={() => deleteTodo(id)}>
          <CgTrash />
        </ButtonUi>
      </ListGroup.Item>
    </>
  );
};

export default Todo;
