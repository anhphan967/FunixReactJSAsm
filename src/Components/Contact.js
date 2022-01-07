import {
    FormFeedback,
    Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col
} from 'reactstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Contact() {
    const initValues = {
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        agree: false,
        contactType: '',
        messenger: '',

    }
    const initTouches = {
        firstName: false,
        lastName: false,
        email: false,
        tel: false,
        messenger: false
    }

    const [formValues, setFormValues] = useState(initValues)
    const [blur, setBlur] = useState(initTouches)

    const HandelChange = (e) => {

        const { name, value, checked } = e.target
        setFormValues(() => {
            if (e.target.type === 'checkbox') {
                return { ...formValues, [name]: checked }
            } else {
                return { ...formValues, [name]: value }
            }
        })

    }

    const HandelSubmit = (e) => {
        alert('Feedback:' + JSON.stringify(formValues))
        e.preventDefault()

    }
    const HandelBlur = (e) => {
        const { name } = e.target
        setBlur({ ...blur, [name]: true })

    }

    const validate = (values) => {
        const errors = {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            messenger: ''
        }


        if (blur.firstName && values.firstName.length <= 3) {
            errors.firstName = 'Last Name should be >= 3 characters'
        } else if (values.firstName.length > 10) {
            errors.firstName = 'Last Name should be <10 characters'
        }
        if (blur.lastName && values.lastName.length <= 3) {
            errors.lastName = 'Last Name should be >= 3 characters'
        } else if (values.lastName.length > 10) {
            errors.lastName = 'Last Name should be <10 characters'
        }
        const reg = /^\d+$/;
        if (blur.tel && !reg.test(formValues.tel))
            errors.tel = 'Tel. Number should contain only numbers';

        if (blur.email && formValues.email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';
        return errors;

    }
    const errors = validate(formValues)

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
                                type='text' name='firstName' value={formValues.firstName}
                                onChange={HandelChange} onBlur={HandelBlur}
                                valid={blur.name && errors.firstName == ''}
                                invalid={errors.firstName !== ''}
                                placeholder='First Name'
                            />
                            <FormFeedback>{errors.firstName}</FormFeedback>
                        </Col>

                    </FormGroup>
                    <FormGroup row >
                        <Label htmlFor='lastname' md={2}>Last Name</Label>
                        <Col md={10}>
                            <Input type='text' name='lastName'
                                value={formValues.lastName}
                                onChange={HandelChange} onBlur={HandelBlur}
                                valid={blur.lastName &&errors.lastName == ''}
                                invalid={errors.lastName !== ''}
                                placeholder='Last Name'
                            />
                            <FormFeedback>{errors.lastName}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label htmlFor='tel' md={2}>Contact Tel.</Label>
                        <Col md={10}>
                            <Input type='text' name='tel'
                                value={formValues.tel} onChange={HandelChange} onBlur={HandelBlur}
                                valid={blur.tel && errors.tel == ''}
                                invalid={errors.tel !== ''}
                                placeholder='Tel Number'
                            />
                            <FormFeedback>{errors.tel}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label htmlFor='email' md={2}>Email</Label>
                        <Col md={10}>
                            <Input type='text' name='email'
                                value={formValues.email} onChange={HandelChange} onBlur={HandelBlur}
                                valid={blur.email &&errors.email == ''}
                                invalid={errors.email !== ''}
                                placeholder='Your Email'
                            />
                            <FormFeedback>{errors.email}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={{ size: 6, offset: 2 }}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        name="agree" checked={formValues.agree}
                                        onChange={HandelChange}
                                    ></Input>
                                    <strong>May we contact you?</strong>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={{ size: 6, offset: 2 }}>
                            <Input type="select" name="contactType"
                                onChange={HandelChange} value={formValues.contactType}>
                                <option value='tel' >Tel.</option>
                                <option value='email '>Email</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label htmlFor='messenger' md={2}>Your Feedback </Label>
                        <Col md={10}>
                            <Input type='textarea' name='messenger'
                                value={formValues.messenger} onChange={HandelChange} onBlur={HandelBlur}
                                placeholder='Your Feedback'
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