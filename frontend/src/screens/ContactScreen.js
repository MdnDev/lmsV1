import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit'
import MapSDK from '../components/MapSDK';

const Contact = () => {
    return (
        <>
        <MDBContainer>
           <h1 className="py-5">PRENDRE CONTACT</h1>

            <MDBRow className="py-3 mb-4" style={{backgroundColor: 'snow'}}>
                <MDBCol sm="12" md="12" lg="6">
                    <MapSDK/>
                </MDBCol>
                <MDBCol className="mx-auto" sm="12" md="12" lg="6">
                    <MDBCol sm="12" md="12" lg="12">
                        <img className="text-center"  style={{width: '100%'}} src="../../images/LMS.png" alt="" />
                    </MDBCol>
                   
                </MDBCol>
            </MDBRow>

            <MDBListGroup className="py-5 mx-auto" style={{backgroundColor: "honeywew"}}>
                <MDBListGroupItem href="#" >Téléphone: +594 694 23 93 88</MDBListGroupItem>
                <MDBListGroupItem href="#" >4, résidence Vidal</MDBListGroupItem>
                <MDBListGroupItem href="#" >260 route de dégrad de cannes</MDBListGroupItem>
                <MDBListGroupItem href="#" >97354 REMIRE MONTJOLY, Guyane Française</MDBListGroupItem>
                    </MDBListGroup>
            <MDBRow className="py-5" >
                <h5 className="text-center">Pour me contacter, veuillez remplir le formulaire ci-dessous:</h5>

                <form className="py-3" action="https://formsubmit.co/wilfried.maudonpro@gmail.com" method="POST">
                    <MDBRow >
                        <MDBCol md="6" >
                            <Form.Label className="my-2">Nom</Form.Label>
                            <Form.Control type="text" placeholder="Nom" name="Nom" />
                        </MDBCol>

                        <MDBCol md="6" >
                            <Form.Label className="my-2">Prénom</Form.Label>
                            <Form.Control type="text" placeholder="Prénom" name="Prénom" />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <Form.Label className="my-2">Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="Email" required/>
                        </MDBCol>

                        <MDBCol md="6">
                            <Form.Label className="my-2">Objet</Form.Label>
                            <Form.Control type="text" placeholder="Objet" name="Objet" />
                        </MDBCol>
                    </MDBRow>
                    
                    <MDBRow md="12">
                        <p className="mt-3">Message</p>
                        <MDBInput className="mb-2" type="text" id='message' name="message" textarea rows={4} />
                    </MDBRow>
                    <MDBRow>
                        <input type="text" name="_honey" style={{display: 'none'}}/>
                        <input type="hidden" name="_template" value="table"/>
                        <MDBCol  md="12">
                            <div className="text-center">
                                <Button className="btn btn-success mx-auto text-center">
                                    Envoyer
                                </Button>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    
                </form>
                
            </MDBRow>
        </MDBContainer>
        </>

    )
}

export default Contact
