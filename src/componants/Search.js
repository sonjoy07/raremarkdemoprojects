import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Pagination, PaginationItem, PaginationLink,
    Container,InputGroupText, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Media, Badge
} from 'reactstrap';
// import { connect } from 'react-redux';

class Search extends Component {
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
        return (
            <div className="search">
                <Container>
                    {this.state.property.length > 0 ?this.state.property.map(res=>{
                    return(
                        <Fragment>
                    <div className="card">
                        <div className="row no-gutters">
                            <div className="col-auto">
                                <img src="//placehold.it/400" className="img-fluid" alt="" />
                            </div>
                            <div className="col">
                                <div className="card-block px-2">
                                    <p>{res.title} <Badge className="float-right"><i className="fas fa-star"></i> 4.61(207)</Badge></p>
                                    <h4 className="card-title">{res.title} - 1Double & 1 single Bed-central London</h4>
                                    <p className="card-text">{res.guest} Guests . {res.bed} bedroom . {res.bedNumber} beds . 1 shared bathroom</p>
                                    <p className="card-text">Wifi . Kitchen . Heating . Washing machine</p>
                                    <h4 className="float-right"><i className="fas fa-dollar-sign"></i>{res.price}/night</h4>
                                    {/* <p  className="float-right"><i className="fas fa-dollar-sign"></i>38/night</p> */}
                                </div>
                            </div>
                        </div>
                    </div></Fragment>)
                }):''}
                     
                </Container>
                <Pagination size="sm" aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink first href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink previous href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                1
        </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                2
        </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                3
        </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last href="#" />
                        </PaginationItem>
                    </Pagination>
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
export default Search;
