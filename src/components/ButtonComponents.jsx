import { Button } from "react-bootstrap";

function ButtonComponents({ children, styling }) {
  return <Button variant={styling}>{children}</Button>;
}

export default ButtonComponents;
