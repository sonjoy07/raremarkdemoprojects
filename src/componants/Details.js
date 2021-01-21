import React, { Component, Fragment } from 'react';
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

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property: {}
        }

    }

    // componentWillMount() {

    // }

    componentDidMount() {
        var that = this;
        let pathname = window.location.pathname
        var post_id = pathname.split("/");
        post_id = post_id[post_id.length - 1]
      ? post_id[post_id.length - 1]
      : post_id[post_id.length - 2];
        fetch('http://localhost:4000/getPropertyById', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ 'post_id': post_id })
      }).then(function (response) {
        response.json().then(res => {
            that.setState({
                property:res
            })

        })
      })
    }

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
        console.log('this.state.property',this.state.property)
        return (
             <div className="Details">
                <Container>
                {this.state.property.status == true  &&
                <Fragment>
                <div className="details-top">
                        <h4>{this.state.property.data.title} <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></h4>
                        <p>{this.state.property.location}</p>
                        <div className="image-details">
                            <div className="first_image">
                                <img src={window.location.origin + '/logo512.png'}></img>
                            </div>
                            <div className="rest_image">
                                <div className="rest_image_1">
                                    <img src={window.location.origin + '/logo512.png'}></img>
                                </div>
                                <div className="rest_image_2">
                                    <img src={window.location.origin + '/logo512.png'}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details-start">
                        <Row>
                            <Col xs="7">
                                <Row>
                                    <Col xs="10">
                                        <h2>{this.state.property.data.title}</h2>
                                        <p>{this.state.property.data.country}-{this.state.property.data.city}</p>
                                        <div>
                                            <h6><i className="fas fa-dollar-sign"></i> Private room in flat</h6>
                                            <p>{this.state.property.data.guest}guests &nbsp;&nbsp;{this.state.property.data.bed}bedroom &nbsp;&nbsp; {this.state.property.data.bedNumber} bed </p>
                                            <h6><i className="fas fa-dollar-sign"></i> Self check-in</h6>
                                            <p>Check yourself in with the lockbox</p>
                                            <h6><i className="fas fa-dollar-sign"></i> Breakfast</h6>
                                            <p>This is one of a few places in the area that has this feature</p>
                                            <h6><i className="fas fa-dollar-sign"></i> Great commmuncation</h6>
                                            <p>100% of recent guests rated shimmy 5-star in communcation</p>
                                        </div>
                                        <div className="class_details">
                                            <p>{this.state.property.data.description}</p>
                                            <ul>
                                                <li>5mins walk from underground</li>
                                                <li>5mins walk to shadwell DLR station</li>
                                                <li>10 mins by train to city</li>
                                                <li>5mins by train to trendy Shoreditch nightlife</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xs="2">
                                        <img className="rounded-circle" width="50" src={window.location.origin + '/logo512.png'}></img>
                                        <p>{this.state.property.data.username}</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="5">
                                <div className="cart_form">
                                    <h4 style={{ display: 'inline' }}><i className="fas fa-dollar-sign"></i>{this.state.property.data.price}</h4> per night
                                <p><i className="fas fa-star"></i>4.58(215 reviews)</p>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">Dates</Label>
                                            <Input type="email" name="email" placeholder="Date" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleEmail">Guests</Label>
                                            <select className="form-control">
                                                <option>1 guest</option>
                                                <option>2 guest</option>
                                                <option>4 guest</option>
                                                <option>6 guest</option>
                                            </select>
                                        </FormGroup>
                                    </Form>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between ">
                                            <i className="fas fa-dollar-sign"></i>24 * 1 Night
    <span className="badge "><i className="fas fa-dollar-sign"></i>{this.state.property.data.price}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Cleaning Fee
    <span className="badge"><i className="fas fa-dollar-sign"></i>24</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Service Fee
    <span className="badge"><i className="fas fa-dollar-sign"></i>24</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Total
    <span className="badge"><i className="fas fa-dollar-sign"></i>72</span>
                                        </li>
                                    </ul>
                                    <Button color="danger" size="lg" block>Submit</Button>
                                </div>
                            </Col>
                        </Row>
                    </div></Fragment>}
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
export default Details;
