import { Form } from "react-bootstrap";

const SelectDropdown = ({ categories }) => {
  return (
    <>
      <div>Select Category</div>
      <Form.Control as="select">
        <option>Select</option>
        {categories.map((category) => (
          <option value={category.cat_title} key={category.id}>
            {category.cat_title}
          </option>
        ))}
      </Form.Control>
    </>
  );
};

export default SelectDropdown;
