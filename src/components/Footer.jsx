import ButtonUi from "./Button";

const Footer = ({ todos, clearCompleted }) => {
  const items = todos.filter((todo) => todo.completed !== true);

  return (
    <>
      {todos.length > 0 && (
        <div className="footer d-flex flex-column flex-sm-row align-items-center justify-content-between  gap-3  mx-auto mt-2">
          <h6 className="mb-0">{items.length} Todos Left</h6>
          <ButtonUi buttonClass="clear" onClick={clearCompleted}>
            Clear Completed
          </ButtonUi>
        </div>
      )}
    </>
  );
};

export default Footer;
