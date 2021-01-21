import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
  Container,
  Row,
  Col, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from './../actions/user'

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const toggle = () => setIsOpen(!isOpen);
  const getCurrentuserid = () => {
    let user_id = Cookies.get('c_user');
    return user_id == null ? '' : user_id;
  }
  
  const logout =()=> {
    var c_user = 'c_user';
    document.cookie = c_user + '=; Max-Age=0'
    var redirect_url = "/".concat('logout');
    // let user_id = webgetCookie('c_user');
    document.cookie = "c_user=;";
    document.cookie = "c_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    deleteSetLocalStorage(['user_id', 'security_data'])
    window.location.replace(redirect_url);

  }
  const deleteSetLocalStorage=(storeKey)=> {
    for (var i = 0; i < storeKey.length; i++) {
      localStorage.removeItem(storeKey[i]);
    }

  }
  useEffect(() => {
    if (getCurrentuserid() > 0) {
      fetch('http://localhost:4000/getUser', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ 'user_id': getCurrentuserid() })
      }).then(function (response) {
        response.json().then(res => {
          console.log(res.status);
          if (res.status == true) {
            dispatch(setUserInfo(res.result))
          }
        })
      })
    }
  },[])

  return (
    <div className="main-menu">
      <div className="menu-top bg-light">
        {/* <Container> */}
        <Row>
          <Col xs="6">
            <div className="float-left">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg></InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Anywhere" />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                  </svg></InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Anytime" />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                  </svg></InputGroupText>
                </InputGroupAddon>
                <Input placeholder="1 guest" />
              </InputGroup>
            </div>
          </Col>
          <Col xs="6">
            {/* <Router> */}
            <ul className="nav float-right">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">Become a Host</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Help</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">Search</Link>
              </li>
              {getCurrentuserid() > 0&&<li className="nav-item">
                <Link className="nav-link" to="#">Add Post</Link>
              </li>}
              {getCurrentuserid() == 0 ? <li className="nav-item">
                <Link className="nav-link" to="/registration">Sign Up</Link>
              </li> : <li className="nav-item">
                  <Link className="nav-link" to="/">{users.users.first_name}</Link>
                </li>}
              {getCurrentuserid() > 0 ? <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logout}>Log Out</Link>
              </li> : <li className="nav-item">
                  <Link className="nav-link" to="/login">Log In</Link>
                </li>}
            </ul>
            {/* </Router> */}
          </Col>
        </Row>
        {/* </Container> */}
      </div>
      <Navbar color="light" light expand="md">
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" className="active-menu">FOR YOU</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">HOMES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">EXPERIENCES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">PLACES</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

// export default connect(
//   mapStateToProps, mapDispatchToProps
// )(Menu);
export default Menu;
