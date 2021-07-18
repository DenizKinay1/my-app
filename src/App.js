import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import ls1 from "./ls1.png";
import Text from "./genText";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./App.css";
import Person from "./components/Person";
import AddPerson from "./components/AddPerson";

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(""); // text from input field
  const [items, setItems] = useState([]); // items list
  const [listcount, setListCount] = useState(-1);
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [editItem, setEditItem] = useState("");

  useEffect(() => {
    console.log("abc");
    setListCount(listcount + 1);
  }, [items]);

  // use effect hook
  //class
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const handleLogin = () => {
    setIsLoggedin({ isLoggedIn: true });
  };

  const handleLogout = () => {
    setIsLoggedin({ isLoggedIn: false });
    console.log(isLoggedIn);
  };

  if (isLoggedIn === false) {
    return (
      /*
      <div>
        <Form className="FormLogin">
          <h1 className="text-center">Welcome to MyApp!</h1>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter Email"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter Password"></Input>
          </FormGroup>
          <Button className ='LoginButton '  onClick={handleLogin}>
            Login
          </Button>
        </Form>

        <h3></h3>
      </div>
      */
      <body>
        <section>
          {/* <header>
            <h1 className="app-logo">MyApp</h1>
            <ul>
              <li>
                <div>
                  <a href="#" onClick={toggle}>
                    Login
                  </a>
                  <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Login Screen</ModalHeader>
                    <ModalBody>
                      <Form className="FormLogin">
                        <h1 className="text-center">Welcome to MyApp!</h1>
                        <FormGroup>
                          <Label>Email</Label>
                          <Input type="email" placeholder="Enter Email"></Input>
                        </FormGroup>
                        <FormGroup>
                          <Label>Password</Label>
                          <Input
                            type="password"
                            placeholder="Enter Password"
                          ></Input>
                        </FormGroup>
                        <Button className="LoginButton" color="success" onClick={handleLogin}>
                          Login
                        </Button>
                      </Form>{" "}
                    </ModalBody>
                    <ModalFooter>
                      
                      <Button color="danger" onClick={toggle}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </header> */}

          <div className="content">
            <div className="textBox">
              <h2>
                Welcome to <span>MyApp</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button color="primary" onClick={handleLogin}>GET STARTED</Button>
            </div>
            <div className="imgBox">
              <img src={ls1} className="ls1" />
            </div>
          </div>
        </section>

        <section className="section2">
        <div className="content">
          <div className="imgBox">
              <img src={ls1} className="ls1" />
            </div>
            <div className="textBox">
              <h2>
                Welcome to <span>MyApp</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
            </div>
            
          </div>
        </section>


        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div className="tagcol">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  class="bi bi-patch-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                </svg>
                <h3>TAG1</h3>
                <p class="lead mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div className="tagcol">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  class="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
                <h3>TAG2</h3>
                <p class="lead mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div className="tagcol">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  class="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <h3>TAG3</h3>
                <p class="lead mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-div">
          <h1>Keep in touch</h1>
          <h2>Let us know you so we can call you back</h2>
          <Form className="contact-form">
            <input
              type="text"
              className="contact-input"
              placeholder="Name"
            ></input>
            <input
              type="text"
              className="contact-input"
              placeholder="Email"
            ></input>
            <input
              type="text"
              className="contact-input"
              placeholder="Phone"
            ></input>
          </Form>
        </div>
        <footer>
          <div className="footer-content">
            <h2>Deniz Kınay </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="footer-bottom">
            <p>2021 Deniz Kınay</p>
          </div>
        </footer>
      </body>
    );
  }

  return (
    <div className="App">
      {/* <h2>{isLoggedIn ? "true" : "false"}</h2> */}
      {/* <h1 className="Item">number test</h1>
      <Button color="primary" onClick={increase}>
        ++
      </Button>
      <Button onClick={decrease}>--</Button>
      <h2>{count}</h2>
      
      {/* { <Text /> } */}
      {/* <h3>useEffect test: Itemlist has been edited {listcount} times</h3> */}
      <h3>Input test: {item}</h3>
      <h2>List Test</h2>
      {
        <AddItem
          item={item}
          items={items}
          setItems={setItems}
          setItem={setItem}
        />
      }
      {
        <ItemList
          setItems={setItems}
          items={items}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      }
      <form></form>
      {/* <AddPerson/>
      <br></br>
      <Person/> */}
      {/* <Button onClick={handleLogout}>
        Logout
      </Button> */}

      <div className="contact-div">
        <h1>Keep in touch</h1>
        <h2>Let us know you so we can call you back</h2>
        <Form className="contact-form">
          <input
            type="text"
            className="contact-input"
            placeholder="Name"
          ></input>
          <input
            type="text"
            className="contact-input"
            placeholder="Email"
          ></input>
          <input
            type="text"
            className="contact-input"
            placeholder="Phone"
          ></input>
        </Form>
      </div>

      <footer>
        <div className="footer-content">
          <h2>Deniz Kınay </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="footer-bottom">
          <p>2021 Deniz Kınay</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
