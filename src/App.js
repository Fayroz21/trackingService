import './App.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Home from './components/pages_incs//Home';
import Tracking from "./components/pages_incs/Tracking";
import InputNum from "./components/pages_incs/Input";


function App() {

  const mystyle = {
    width: "300px",
    left: "217px",
    top: "-1005px",
  };

  const textStyle = {
    color: "red",
    fontWeight : "Bold",
  };

  const blackText = {
    color: "black",
    fontWeight : "bold"
  };

  //To store the traching Num
  const [trackingNum, setTrackingNum] = React.useState();


  return (
    <div className="App">
      <Router>
    <div>
    <Navbar expand="lg" className="bg-body-tertiary" style={{minHeight:"20px"}}>
      <Container>
        <Navbar.Brand as={(Link)} to='/Home'>
        <img
              alt=""
              src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/apem8baba5pgyh6mlwnm"
              width="200"
              height="100"
              className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={(Link)} to='/Home' style={blackText}>Home</Nav.Link>
            <Nav.Link as={(Link)} to='/Home' style={blackText}>Prices</Nav.Link>
            <Nav.Link as={(Link)} to='/Home' style={blackText}>Sales</Nav.Link>
          </Nav>
          </Navbar.Collapse> 
        <Navbar.Collapse className="justify-content-end"> 
          <Nav>      
            <NavDropdown title=
            {
              <span className="text my-auto" style={blackText}>Tracking shipment</span>
            }
             id="basic-nav-dropdown">
              <div className="container-fluid" style={mystyle}>
              <NavDropdown.Header style={{color : "red"}}>Track your shipment</NavDropdown.Header>
              <NavDropdown.Divider />
              <InputNum callBack={setTrackingNum}/>
              </div>
            </NavDropdown>
            <Nav.Link as={(Link)} to='/Home' style={blackText}>Sign In</Nav.Link>
            <Nav.Link as={(Link)} to='/Home' style={textStyle}>En</Nav.Link>
            </Nav>
            </Navbar.Collapse>  
            <Navbar.Toggle />

      </Container>
    </Navbar>
    </div>
    <div>
      <Routes>
      <Route path="/Home" element={<Home></Home>} />
      <Route path="/Tracking/:value" element={<Tracking trackingNum={trackingNum}></Tracking>} />
      </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
