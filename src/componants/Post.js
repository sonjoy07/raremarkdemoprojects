import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Form, FormGroup, Label, Input, FormText,
    Container,
    Row,
    Col, InputGroup, InputGroupAddon, InputGroupText, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Media
} from 'reactstrap';
import axios from 'axios';
// import { connect } from 'react-redux';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            country: '',
            city: '',
            user_id: '',
            type: 1,
            price: '',
            guest: '',
            bedNumber: '',
            description: '',
            bed: '',
            imgCollection: '',
        };
    }
    onFileChange(e) {
        this.setState({ imgCollection: e.target.files[0] })
    }
    handleSubmit = (event) => {
        let that = this;
        const formData = new FormData();
        // for (const key of Object.keys(this.state.imgCollection)) {
        // }
        formData.set('title', this.state.title)
        formData.set('country', this.state.country)
        formData.set('bed', this.state.bed)
        formData.set('guest', this.state.guest)
        formData.set('price', this.state.price)
        formData.set('bedNumber', this.state.bedNumber)
        formData.set('type', this.state.type)
        formData.set('user_id', this.state.user_id)
        formData.set('city', this.state.city)
        formData.append('file', this.state.imgCollection)
        for (var value of formData.values()) {
            console.log(value);
        }
        // fetch('http://localhost:4000/postAdded', {
        //     method: 'POST',
        //     headers: {
        //         "Content-type": "application/json",
        //         // "multipart"
        //     },
        //     body: JSON.stringify(this.state)
        // }).then(function (response) {
        //      response.json().then(res=>{
        //         console.log(res.status);
        //         // if(res.status == true){
        //         //     that.props.setUserInfo(res.result)
        //         //     setInterval(() => {
        //         //         window.location.href = "/";

        //         //     }, 5500);

        //         // }else{
        //         //     that.setError();
        //         // }

        //     });
        //     // return response.json();
        // });
        axios.post("http://localhost:4000/postAdded", formData, {

        })

        event.preventDefault();
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="post-form">
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="exampleEmail">Title</Label>
                            <Input type="text" name="title" id="exampleEmail" placeholder="" onChange={this.handleChange} value={this.state.title} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Country</Label>
                            <Input type="text" name="country" id="exampleEmail" placeholder="" onChange={this.handleChange} value={this.state.country} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">City</Label>
                            <Input type="text" name="city" id="exampleEmail" placeholder="" onChange={this.handleChange} value={this.state.city} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Type</Label>
                            <select className="form-control" onChange={this.handleChange} value={this.state.type}>
                                <option value="1">Single</option>
                                <option value="2">Double</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Price</Label>
                            <Input type="text" name="price" id="exampleEmail" placeholder="" onChange={this.handleChange} value={this.state.price} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Bed</Label>
                            <Input type="number" name="bed" id="exampleEmail" placeholder="" onChange={this.handleChange} value={this.state.bed} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Guest</Label>
                            <Input type="number" name="guest" id="exampleEmail" placeholder="" onChange={this.handleChange} value={this.state.guest} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">How many Bed</Label>
                            <Input type="number" name="bedNumber" id="exampleEmail" placeholder="" onChange={this.handleChange} value={this.state.bedNumber} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleFile">Photos</Label>
                            <Input type="file" name="photos" id="exampleFile" onChange={(e) => this.onFileChange(e)} />
                            <Input type="hidden" name="user_id" id="exampleFile" value="10" value={this.state.user_id} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Description</Label>
                            <Input type="textarea" name="description" id="exampleText" onChange={this.handleChange} value={this.state.description} />
                        </FormGroup>

                        <Button>Submit</Button>
                    </Form>
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
export default Post;
