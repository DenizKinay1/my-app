import React from "react";
import { Button, Input, Form } from "reactstrap";
import "./components.scss";

const AddItem = ({ setItem, items, setItems, item }) => {
  

  const tempItem = (e) => {
    
    setItem(e.target.value);
  };

  const tempSubmit = (e) => {
    
    e.preventDefault(); 
    setItems([...items, { text: item, id: Math.random() * 1000 }]);
    alert("New item has been added to the list: " + item)
    setItem("");
  };

  return (
    <Form className="AddItemForm">
      <Input placeholder="Enter Item to add to the list" value={item} onChange={tempItem} type="text" />
      <Button outline  className="submitButton" onClick={tempSubmit} type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddItem;
