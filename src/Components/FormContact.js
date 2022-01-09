import React from "react";
import {
  Row, Col, Label,Button, Input
} from 'reactstrap';
import { Form, Field } from "react-final-form";


function FormContact() {
  let formData = {

  };
  const onSubmit = (values) => {
    console.log(values)
    alert(JSON.stringify(values));
  };
  const required = (val) => val && val.length ? undefined : 'Required';
  const maxLength = (len) => (val) => !(val) || (val.length <= len) ? undefined : 'Must be 15 characters or less';
  const minLength = (len) => (val) => val && (val.length >= len) ? undefined : 'Must be greater than 2 characters';
  const isNumber = (val) => !isNaN(Number(val)) ? undefined : 'Must be a number';
  const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val) ? undefined : 'Invalid Email Address';
  const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);
  // const Render = ({ handleSubmit,  meta }) => {
  //   console.log(meta)
  //   return (
  //   
  //   )
  // }
  return (
    <Form onSubmit={onSubmit}
      initialValues={formData}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
               <Field name="firstName" validate={composeValidators(required, minLength(3), maxLength(15))}>
                 {({ input, meta }) => (
                  <Row className="form-group">
                    <Label htmlFor="firstname" md={2}>First Name</Label>
                    <Col md={10}>
                      <Input {...input} type="text" placeholder="Username" />
                      {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                    </Col>
                  </Row>
                )}
              </Field>
              <Field name="LastName" validate={composeValidators(required, minLength(3), maxLength(15))}>
                {({ input, meta }) => (
                  <Row className="form-group">
                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                    <Col md={10}>
                      <Input {...input} type="text" placeholder="Last Name" />
                      {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                    </Col>
                  </Row>
                )}
              </Field>
              <Field name="Tel" validate={composeValidators(required, minLength(3), maxLength(15), isNumber)}>
                {({ input, meta }) => (
                  <Row className="form-group">
                    <Label htmlFor="Tel" md={2}>Contact Tel.</Label>
                    <Col md={10}>
                      <Input {...input} type="text" placeholder="Tel Number" />
                      {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                    </Col>
                  </Row>
                )}
              </Field>
              <Field name="Email" validate={composeValidators(required, validEmail)}>
                {({ input, meta }) => (
                  <Row className="form-group">
                    <Label htmlFor="Tel" md={2}>Email</Label>
                    <Col md={10}>
                      <Input {...input} type="text" placeholder="Email" />
                      {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                    </Col>
                  </Row>
                )}
              </Field>
              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div >
                    <Field name="Agree" component="input" type="checkbox" />
                    <strong>May we contact you?</strong>
                  </div>
                </Col>
              </Row>
      
              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}
                ><Field name="ContactType" component="select">
                    <option value='Tel'>Tel.</option>
                    <option value=''>Email</option>
                  </Field>
                </Col>
              </Row>
              <Field name="Messenger">
                {({ input }) => (
                  <Row className="form-group">
                    <Label htmlFor="Messenger" md={2}>Your Feedback</Label>
                    <Col md={10}>
                      <Input {...input} type="textarea" placeholder="Messenger" />
                    </Col>
                  </Row>
                )}
              </Field>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </form>
        )} />
  )
}

export default FormContact
