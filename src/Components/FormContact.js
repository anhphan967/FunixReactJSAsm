import React from "react";
import {
   Row, Col, Label
} from 'reactstrap';
import { Form, Field } from "react-final-form";


function FormContact() {
  let formData = {

  };
  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };
  // const validate = (values) => {
  //     const errors = {};
  //     if (!values.firstName) {
  //         errors.firstName = "Required";
  //     }
  //     if (!values.password) {
  //         errors.password = "Required";
  //     }
  //     if (!values.confirm) {
  //         errors.confirm = "Required";
  //     } else if (values.confirm !== values.password) {
  //         errors.confirm = "Must match";
  //     }
  //     return errors;
  // }
  const Render = ({ handleSubmit, form, values }) => {
    return (
      <form onSubmit={handleSubmit}>
        <Field name="firstName">
          {({ input}) => (
            <Row className="form-group">
              <Label htmlFor="firstname" md={2}>First Name</Label>
              <Col md={10}>
                <input {...input} type="text" placeholder="Username" />
              </Col>
            </Row>
          )}
        </Field>
        <Field name="LastName">
          {({ input}) => (
            <Row className="form-group">
              <Label htmlFor="lastName" md={2}>Last Name</Label>
              <Col md={10}>
                <input {...input} type="text" placeholder="Last Name" />
              </Col>
            </Row>
          )}
        </Field>
        <Field name="Tel">
          {({ input}) => (
            <Row className="form-group">
              <Label htmlFor="Tel" md={2}>Contact Tel.</Label>
              <Col md={10}>
                <input {...input} type="text" placeholder="Tel Number" />
              </Col>
            </Row>
          )}
        </Field>
        <Field name="Email">
          {({ input}) => (
            <Row className="form-group">
              <Label htmlFor="Tel" md={2}>Email</Label>
              <Col md={10}>
                <input {...input} type="text" placeholder="Email" />
              </Col>
            </Row>
          )}
        </Field>
        <Field name="Agree">
          {({ input}) => (
            <Row className="form-group">
              <Col md={{ size: 6, offset: 2 }}>
                <div >
                  <input {...input} type="checkbox" />
                  <strong>May we contact you?</strong>
                </div>
              </Col>
            </Row>
          )}
        </Field>
        <Row className="form-group">
          <Col md={{ size: 6, offset: 2 }}
          ><Field name="ContactType" component="select">
              <option value='Tel'>Tel.</option>
              <option value=''>Email</option>
            </Field>
          </Col>
        </Row>
        <Field name="Messenger">
          {({ input}) => (
            <Row className="form-group">
              <Label htmlFor="Messenger" md={2}>Your Feedback</Label>
              <Col md={10}>
                <input {...input} type="textarea" placeholder="Messenger" />
              </Col>
            </Row>
          )}
        </Field>
        <div>
          <button type="submit" >
            Submit
          </button>
        </div>
      </form>
    )
  }
  return (
    <Form onSubmit={onSubmit}
      initialValues={formData}
      component={Render} />
  )
}



export default FormContact

