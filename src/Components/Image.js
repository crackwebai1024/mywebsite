import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class Image extends Component {

render() {
return (
    <MDBContainer>
    <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}>
        <MDBModalHeader toggle={this.props.toggle}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
            <img src={this.props.profilepic} alt="Mingxing Wang Profile Pic" style={{width:"300px" ,height:"300px"}}/>
        </MDBModalBody>
    </MDBModal>
    </MDBContainer>
    );
}
}

export default Image;