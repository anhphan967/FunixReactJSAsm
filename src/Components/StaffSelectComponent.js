
import dateFormat from "dateformat";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { useParams, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Col, Label, Input } from 'reactstrap'
import Loading from "./Loading";
import {fetchUpdate} from '../reducer/Action'

function StaffSelect({ data, loading, errMess }) {

  let { id } = useParams()
  const [modal, setModal] = useState(false)
  if (loading) { return <Loading /> }
  else if (errMess) { return <div>{errMess}</div> }
  else {
    let selectData = data.filter((data) => parseInt(id) == data.id)

    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem ><Link to='/staffs'>Nhân viên</Link></BreadcrumbItem>
            <BreadcrumbItem active>{selectData[0].name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className='row'>
          <img className='col-lg-3 col-md-4 col-xs-12 m-2 p-2' src={selectData[0].image} />
          <div className='col-lg-8 col-md-7 col-xs-12 m-2 p-2' >
            <h3> Họ và tên :{selectData[0].name} </h3>
            <p>Ngày sinh: {dateFormat(selectData[0].doB, "dd/mm/yyyy")}</p>
            <p>Ngày vào công ty: {dateFormat(selectData[0].startDate, "dd/mm/yyyy")}</p>
            <p>Phòng ban: {selectData[0].departmentId}</p>
            <p>Số ngày nghỉ còn lại: {selectData[0].annualLeave}</p>
            <p>Số ngày đã làm thêm : {selectData[0].overTime}</p>
            <Button onClick={() => setModal(!modal)}> Update </Button>
          </div>
          <RenderModal selectData={selectData} setModal={setModal} modal={modal} />

        </div>
      </div>
    )
  }
}

function RenderModal({ selectData, setModal, modal }) {
  const initValues = {
    id: selectData[0].id,
    name: selectData[0].name,
    doB: '',
    salaryScale: selectData[0].salaryScale,
    startDate: '',
    departmentId: selectData[0].departmentId,
    annualLeave: selectData[0].annualLeave,
    overTime: selectData[0].overTime,
    image: "/asset/images/alberto.png",

  }
  const dispatch= useDispatch()
  const [updateStaff, setUpdateStaff] = useState(initValues)
  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(updateStaff)
    fetchUpdate(updateStaff,dispatch)
    setModal(!modal)

  }
  const handelChange = (e) => {
    const { name, value } = e.target
    setUpdateStaff({ ...updateStaff, [name]: value })
  }
  
  return (
    <Modal isOpen={modal} toggle={() => setModal(!modal)}>
      <ModalHeader toggle={() => setModal(!modal)}>Chỉnh sửa thông tin </ModalHeader>
      <ModalBody>
        <Form onSubmit={handelSubmit}>
          <FormGroup row>
            <Label md={4} htmlFor='name' >Tên</Label>
            <Col md={7}>
              <Input
                type='name' value={updateStaff.name}
                name='name' onChange={handelChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label md={4} htmlFor='doB' >Ngày sinh</Label>
            <Col md={8}>
              <Input
                type='date' value={updateStaff.doB}
                name='doB' onChange={handelChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label md={4} htmlFor='startDate' >Ngày vào công ty</Label>
            <Col md={8}>
              <Input
                type='date' value={updateStaff.startDate}
                name='startDate' onChange={handelChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label md={4} htmlFor='deparment'>Phòng ban</Label>
            <Col md={8}>
              <Input type="select" name="departmentId"
                onChange={handelChange} value={updateStaff.departmentId}>
                <option value='Dept01' >Sale</option>
                <option value='Dept02'>HR</option>
                <option value='Dept03'>MARKETING</option>
                <option value='Dept04'>IT</option>
                <option value='Dept05'>Finance</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label md={4} htmlFor='salaryScale' >Hệ số lương</Label>
            <Col md={8}>
              <Input
                type='text' value={updateStaff.salaryScale}
                name='salaryScale' onChange={handelChange}
                placeholder='1.0 - 3.0'
              />
            </Col>

          </FormGroup>
          <FormGroup row>
            <Label md={4} htmlFor='annualLeave' >Số ngày nghỉ còn</Label>
            <Col md={8}>
              <Input
                type='text' value={updateStaff.annualLeave}
                name='annualLeave' onChange={handelChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label md={4} htmlFor='overTime' >Số ngày làm thêm</Label>
            <Col md={8}>
              <Input
                type='text' value={updateStaff.overTime}
                name='overTime' onChange={handelChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col md={{ size: 8, offset: 4 }}>
              <Button type='submit'> Chỉnh sửa </Button>
            </Col>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>)
}
export default StaffSelect