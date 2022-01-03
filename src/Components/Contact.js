import {
    Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col, FormFeedback
} from 'reactstrap';
import { useState, } from 'react';
import { Link } from 'react-router-dom'

function Contact() {
    const initValue = { firstname: '', lastname: '', tel: '', email: '', agree: false, contactType: 'Tel', messenger: '' }
    const [formValues, setFormValues] = useState(initValue)
    const HandelChange = (e) => {

        const { name, value, checked } = e.target
        setFormValues(() => {
            if (e.target.type === 'checkbox') {
                return ({ ...formValues, [name]: checked })
            } else {
                return ({ ...formValues, [name]: value })
            }
        })

    }
    const HandelSubmit = (event) => {
        const data=JSON.stringify(formValues)
        alert('Feedback :'+ data)
        event.preventDefault();

    }

    // const errors = {
    //     firstname: '',
    //     lastname: '',
    //     tel: '',
    //     email: ''
    // };

    // console.log(type)
    // if (type === 'firstName' && firstName.length <= 3) {
    //     errors.firstname = 'First Name should be >=3 characters'
    // }else if (type === 'firstName' && firstName.length >10){
    //     errors.firstname = 'First Name should be <= 10 characters'
    // }
    // if (type === 'lastname' && lastName.length <= 3) {
    //     errors.lastname = 'Last Name should be >=3 characters'
    // }else if (type === 'lastname' && lastName.length >10){
    //     errors.lastname = 'Last Name should be <= 10 characters'
    // }
    // // const reg=  /^\d+$/;
    // // if (type === 'tel' && !reg.test(tel)) {
    // //     errors.tel = 'Tel. Number should contain only numbers'
    // // }
    // // const regEmail=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

    // // if (type === 'email' && regEmail.test(email) ) {
    // //     errors.firstname = 'Email should contain a @'
    // // }



    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row  row-content">
                <div className="col-12">
                    <h3> Send us Your Feedback</h3>
                </div>
                <Form className="col-12 col-md-9" onSubmit={HandelSubmit}>
                    <FormGroup row >
                        <Label htmlFor='firstname' md={2}>Firsit Name</Label>
                        <Col md={10}>
                            <Input
                                type='text' name='firstname' value={formValues.firstname}
                                onChange={HandelChange}
                                placeholder="First Name"
                            // onBlur={(() => setType('firstName'))}
                            // valid={errors.firstname === ''}
                            // invalid={errors.firstname !== ''}
                            />
                            <FormFeedback></FormFeedback>
                        </Col>

                    </FormGroup>
                    <FormGroup row >
                        <Label htmlFor='lastname' md={2}>Last Name</Label>
                        <Col md={10}>
                            <Input type='text' name='lastname'
                                value={formValues.lastname} onChange={HandelChange}
                                placeholder="Last Name"
                            // onBlur={(() => setType('lastname'))}
                            // valid={errors.lastname === ''}
                            // invalid={errors.lastname !== ''}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label htmlFor='tel' md={2}>Contact Tel.</Label>
                        <Col md={10}>
                            <Input type='text' name='tel'
                                value={formValues.tel} onChange={HandelChange}
                                placeholder="Telephone Number"
                            // onBlur={(() => setType('tel'))}
                            // valid={errors.tel === ''}
                            // invalid={errors.tel !== ''}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label htmlFor='email' md={2}>Email</Label>
                        <Col md={10}>
                            <Input type='text' name='email'
                                value={formValues.email} onChange={HandelChange} placeholder="Your Email"
                            // onBlur={(() => setType('email'))}
                            // valid={errors.email === ''}
                            // invalid={errors.email !== ''}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={{ size: 6, offset: 2 }}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        name="agree" checked={formValues.agree}
                                        onChange={HandelChange} value={formValues.agree} />
                                    <strong>May we contact you?</strong>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={{ size: 6, offset: 2 }}>
                            <Input type="select" name="contactType"
                                onChange={HandelChange} value={formValues.contactType} >
                                <option value='tel' >Tel.</option>
                                <option value='email '>Email</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label htmlFor='messenger' md={2}>Your Feedback </Label>
                        <Col md={10}>
                            <Input type='textarea' name='messenger'
                                value={formValues.messenger} onChange={HandelChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button type='submit'> Send Your Feedback </Button>
                        </Col>
                    </FormGroup>

                </Form>

            </div>
        </div>
    )
}
export default Contact