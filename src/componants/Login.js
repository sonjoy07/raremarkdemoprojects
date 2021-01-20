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
import { connect } from 'react-redux';
import {setUserInfo} from './../actions/user'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error:''
        };

    }

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
    handleSubmit = (event) => {
        let that = this;
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(function (response) {
             response.json().then(res=>{
                console.log(res.status);
                if(res.status == true){
                    that.props.setUserInfo(res.result)
                    setInterval(() => {
                        window.location.href = "/";
                        
                    }, 5500);
                    
                }else{
                    that.setError();
                }

            });
            // return response.json();
        });

        event.preventDefault();
    }
    setError = ()=>{
        this.setState({error:'Username or password is wrong'})
        setInterval(()=>{
            this.setState({error:''})
        },3000)
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
                            <h2 className="text-center">Log in</h2>
                            <span className="danger">{this.state.error}</span>
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.username} name="username" onChange={this.handleChange}placeholder="Username" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} required="required" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Log in</button>
                            </div>
                            <div className="clearfix">
                                <label className="float-left form-check-label"><input type="checkbox" /> Remember me</label>
                                <a href="#" className="float-right">Forgot Password?</a>
                            </div>
                        </form>
                        <p className="text-center"><a href="#">Create an Account</a></p>
                    </div>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {        
        setUserInfo: (requestData) => dispatch(setUserInfo(requestData)),
    };
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Login);
