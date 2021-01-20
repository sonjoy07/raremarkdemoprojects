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
    // constructor(props) {
    //     super(props);

    // }

    // componentWillMount() {

    // }

    // componentDidMount() {

    // }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }

    render() {
        return (
            <div className="Details">
                <Container>
                    <div className="login-form">
                        <form action="/examples/actions/confirmation.php" method="post">
                            <h2 className="text-center">Registration</h2>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="First Name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Last Name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" required="required" />
                            </div>
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Owner</option>
                                    <option>Renter</option>
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