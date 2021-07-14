import React from "react";
import "./components.scss";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      isEditTest: false,
    }
    // this.state = {
    //   item : "sss"

    // }

    this.handleDelete=this.handleDelete.bind(this)
    this.handleEdit=this.handleEdit.bind(this)
    this.handleExit=this.handleExit.bind(this)
    this.handleItemEdit = this.handleItemEdit.bind(this)

  }
  handleDelete = (e) => {
    // this.setState({item:'deniz'});
    // console.log(this.state.item)
    this.props.setItems(
      this.props.items.filter((e) => e.id !== this.props.item.id)
    );
  };

  handleEdit = (e) => {
    console.log(this.props.item)
     this.setState({item: this.props.item.text})   
    

    console.log(this.state.item)
    
    console.log(this.props.item.id)
    console.log(this.props.item)
    console.log(this.state.isEditTest)
    this.isEditTest = true
    this.setState({isEditTest: true})
    console.log(this.state.isEditTest);
    
    
    
    // this.forceUpdate();
    
  }

  handleExit = (e) => {
    this.props.item.text = this.state.item
    this.setState({isEditTest:false})
    
  }

  handleItemEdit = (e) => {
    this.setState({item: e.target.value})
    // this.props.item.text = e.target.value
  }


  render() {
    const isEditRender = this.state.isEditTest;
    return (
      <div>
        {isEditRender 
          ? <div>
            <ListGroupItem className="EditComp">
            <input value={this.state.item} onChange={this.handleItemEdit}></input>
          <Button className="EditButton" onClick={this.handleExit} >OK</Button>
          </ListGroupItem>
          </div>
          : <ListGroup className="Items">
          <ListGroupItem className="ItemComp">
            
            {this.props.item.text}
            <Button onClick={this.handleEdit} size="sm" className="DeleteButton"  >EDIT</Button>
            <Button
              size="sm"
              color="danger"
              className="DeleteButton"
              onClick={this.handleDelete}
            >
              X
            </Button>{" "}
          </ListGroupItem>
        </ListGroup>}
        
      </div>
    );
  }
}

export default Item;
