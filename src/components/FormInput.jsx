import { useState } from "react";
import { Form } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { ImSpinner8 } from "react-icons/im";
import ButtonUi from "./Button";

const FormInput = ({ loading, addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <Form className="form  mx-auto" onSubmit={handleSubmit}>
      <Form.Group className="d-flex h-100 m-auto">
        <Form.Control
          type="text"
          size="md"
          className="rounded-0 rounded-start border-0"
          placeholder="Add Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <ButtonUi buttonClass="submit" type="submit">
          {loading ? <ImSpinner8 className="spinner" /> : <BsPlusLg />}
        </ButtonUi>
      </Form.Group>
    </Form>
  );
};

export default FormInput;
