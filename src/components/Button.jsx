import { Button } from "react-bootstrap";

const ButtonUi = ({ buttonClass, children, ...buttonProps }) => {
  return (
    <Button
      className={`bg-transparent border-0 rounded-0 ${buttonClass}`}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default ButtonUi;
