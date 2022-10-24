import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";

const TodosList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <ListGroup className="bg-transparent  mx-auto mt-4">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        );
      })}
    </ListGroup>
  );
};

export default TodosList;
