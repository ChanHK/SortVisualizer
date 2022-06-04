import "bootstrap/dist/css/bootstrap.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import sortTypes from "../sortAlgorithms/sortTypes";

function Selector(props) {
  return (
    <DropdownButton
      id="dropdown-item-button"
      title={props.value === "" ? " Select a sort" : props.value}
      variant="secondary"
    >
      {Object.values(sortTypes).map((type) => (
        <Dropdown.Item as="button" onClick={() => props.setSortType(type)}>
          {type}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default Selector;
