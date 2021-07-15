import React, { useState } from 'react';
import { Button, Input, Form, Alert } from "reactstrap";
import "./components.scss";

const AddItem = ({ setItem, items, setItems, item }) => {

  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(false);  
  

  const tempItem = (e) => {
    
    setItem(e.target.value);
  };

  const tempSubmit = (e) => {
    
    e.preventDefault(); 
    setItems([...items, { text: item, id: Math.random() * 1000 }]);
    // alert("New item has been added to the list: " + item)
    setItem("");
    setVisible(!visible);
  };

  return (
    <Form className="AddItemForm">
      <Alert color="info" isOpen={visible} toggle={onDismiss}>
      New item has been added to the list {item.text}
    </Alert>
      <Input placeholder="Enter Item to add to the list" value={item} onChange={tempItem} type="text" />
      <Button outline  className="submitButton" onClick={tempSubmit} type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddItem;
