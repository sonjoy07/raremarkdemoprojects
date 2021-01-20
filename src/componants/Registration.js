import React, { Component } from 'react';
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
    Form, FormGroup, Label,
    Col, InputGroup, InputGroupAddon, InputGroupText, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Media
} from 'reactstrap';
// import { connect } from 'react-redux';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            usertype: 1,
        };
    }
    handleSubmit = (event) => {

        fetch('http://localhost:4000/registration', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(function (response) {
            window.location.href = "/login";
        });

        event.preventDefault();
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="Details">
                <Container>
                    <div className="login-form">
                        <form onSubmit={this.handleSubmit} method="post">
                            <h2 className="text-center">Registration</h2>
                            <div className="form-group">
                                <input type="text" name="firstname" className="form-control" value={this.state.firstname} onChange={this.handleChange} placeholder="First Name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.lastname} name="lastname" onChange={this.handleChange} placeholder="Last Name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.username} name="username" onChange={this.handleChange} placeholder="Username" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" value={this.state.password} name="password" onChange={this.handleChange} placeholder="Password" required="required" />
                            </div>
                            <div className="form-group">
                                <select className="form-control" value={this.state.usertype} name="usertype" onChange={this.handleChange}>
                                    <option value="1">Owner</option>
                                    <option value="2">Renter</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </div>
                            <div className="clearfix">
                                <label className="float-left form-check-label"><input type="checkbox" /> Remember me</label>
                                <a href="#" className="float-right">Forgot Password?</a>
                            </div>
                        </form>
                        <p className="text-center"><a href="#">Sign In</a></p>
                    </div>
                </Container>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {

//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {

//     };
// }

// export default connect(
//     mapStateToProps,
// )(Landing);
export default Registration;
