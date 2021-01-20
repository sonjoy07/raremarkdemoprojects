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
    Col, InputGroup, InputGroupAddon, InputGroupText, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Media
} from 'reactstrap';
// import { connect } from 'react-redux';

class Landing extends Component {
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
            <div className="landing">
                <Container>
                    <h3>What guests are saying about homes in the United Kingdom</h3>
                    <CardGroup>
                        <Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Media>
                                    <Media left href="#">
                                        <Media object src={window.location.origin + '/logo512.png'} alt="Generic placeholder image" className="rounded-circle"/>
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Nicky
                                </Media>
                                    </Media>
                                </Media>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Media>
                                    <Media left href="#">
                                        <Media object src={window.location.origin + '/logo512.png'} alt="Generic placeholder image" className="rounded-circle"/>
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Nicky
                                </Media>
                                    </Media>
                                </Media>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Media>
                                    <Media left href="#">
                                        <Media object src={window.location.origin + '/logo512.png'} alt="Generic placeholder image" className="rounded-circle"/>
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Nicky
                                </Media>
                                    </Media>
                                </Media>
                            </CardBody>
                        </Card>
                    </CardGroup>
                    <h3>Just Booked</h3>
                    <CardGroup>
                        <Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>                                
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                               
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                               
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                               
                            </CardBody>
                        </Card>
                    </CardGroup>
                    <h3>Places in London</h3>
                    <CardGroup>
                        <Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>                                
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                               
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                               
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                               
                            </CardBody>
                        </Card>
                    </CardGroup>
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
export default Landing;
