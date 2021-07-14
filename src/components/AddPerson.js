import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, Input } from "reactstrap";

const AddPerson = ({props}) => {
    return ( 
        <div>
      <InputGroup>       
        <Input placeholder="name" />
      </InputGroup>
      
      </div>
    );
};

export default AddPerson;