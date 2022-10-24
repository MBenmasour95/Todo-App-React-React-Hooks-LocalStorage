import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Footer, FormInput, TodosList } from "./components";
import { AppContext } from "./context";

const App = () => {
  const { loading, todos, addTodo, deleteTodo, updateTodo, clearCompleted } =
    useContext(AppContext);

  return (
    <Container className="py-5">
      <h1 className="display-3 text-center text-uppercase mb-3">Todo App</h1>
      <FormInput loading={loading} addTodo={addTodo} />
      <TodosList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
      <Footer todos={todos} clearCompleted={clearCompleted} />
    </Container>
  );
};

export default App;
