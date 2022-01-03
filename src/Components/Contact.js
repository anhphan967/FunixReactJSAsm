import {
    Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col
} from 'reactstrap';
import { useState, } from 'react';
import { Link } from 'react-router-dom'

function Contact() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLasttName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [agree, setAgree] = useState(false)
    const [select, setSelect] = useState('tel')
    const [messenger, setMessenger] = useState('')
  

    const HandelSubmit = () => {
        const datas = { firstName, lastName, tel, email, select, messenger, agree }
       alert( JSON.stringify(datas))
        setFirstName('')
        setLasttName('')
        setEmail('')
        setTel('')
        setMessenger('')
        
    }

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
                <Form className="col-12 col-md-9" >
                    <FormGroup row >
                        <Label htmlFor='firstname' md={2}>Firsit Name</Label>
                        <Col md={10}>
                            <Input
                                type='text' name='firstname' value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            ></Input>
                        </Col>

                    </FormGroup>
                    <FormGroup row >
                        <Label htmlFor='lastname' md={2}>Last Name</Label>
                        <Col md={10}>
                            <Input type='text' name='lastname'
                                value={lastName} onChange={e => setLasttName(e.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label htmlFor='tel' md={2}>Contact Tel.</Label>
                        <Col md={10}>
                            <Input type='text' name='tel'
                                value={tel} onChange={e => setTel(e.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label htmlFor='email' md={2}>Email</Label>
                        <Col md={10}>
                            <Input type='text' name='email'
                                value={email} onChange={e => setEmail(e.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={{size: 6, offset: 2}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        name="agree" checked={agree}
                                        onChange={e => setAgree(e.target.checked)}
                                    ></Input>
                                    <strong>May we contact you?</strong>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col  md={{size: 6, offset: 2}}>
                            <Input type="select" name="contactType"
                                onChange={e => setSelect(e.target.value)}
                            >
                                <option value='tel' >Tel.</option>
                                <option value='email '>Email</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label htmlFor='messenger' md={2}>Your Feedback </Label>
                        <Col md={10}>
                            <Input type='textarea' name='messenger'
                                value={messenger} onChange={e => setMessenger(e.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button onClick={HandelSubmit}> Send Your Feedback </Button>
                        </Col>
                    </FormGroup>

                </Form>

            </div>
        </div>
    )
}
export default Contact