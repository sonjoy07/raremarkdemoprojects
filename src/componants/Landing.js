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
import { connect } from 'react-redux';
import { setPostInfo } from './../actions/user'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property: []
        }

    }

    // componentWillMount() {

    // }

    componentDidMount() {
        var that = this;
        fetch('http://localhost:4000/getAllProperty', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        // body: JSON.stringify({ 'user_id': getCurrentuserid() })
      }).then(function (response) {
        response.json().then(res => {
            that.setState({
                property:res.data
            })

        //   if (res.status == true) {
        //     // dispatch(setUserInfo(res.result))
        //   }
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
        var {property }= this.state;
        if(property.length>0){
    }
        return (
            <div className="landing">
                <Container>
                    <h3>What guests are saying about homes in the United Kingdom</h3>
                    <CardGroup>
                        {/* {property[0].title} */}
                        {property.length> 0 ?
                         property.map(res=>{
                            return(<Card>
                            <CardImg top width="100%" src={window.location.origin + '/logo192.png'} alt="Card image cap" />
                            <CardBody>
                            {console.log(res.first_name)}
                                <CardText><a href={"/details/"+res.id}>{res.description}</a></CardText>
                                <Media>
                                    <Media left href="#">
                                        <Media object src={window.location.origin + '/logo512.png'} alt="Generic placeholder image" className="rounded-circle"/>
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                        {res.first_name}
                                </Media>
                                    </Media>
                                </Media>
                            </CardBody>
                        </Card>)
                        }):''}
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

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        setPostInfo: (requestData) => dispatch(setPostInfo(requestData)),
    };
}

export default connect(
    mapStateToProps,
)(Landing);
// export default Landing;
