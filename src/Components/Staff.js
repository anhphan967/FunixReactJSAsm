import { Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button, Input, Modal, ModalHeader, ModalBody, Label, FormGroup, Col, FormFeedback } from 'reactstrap'
import { useState, useRef } from 'react'
import Loading from './Loading'
import { useDispatch } from 'react-redux'
import { fetchDelete } from '../reducer/Action'

function Staff({ HandelSubmit, data, loading, errMess }) {
    const initValues = {
        id: '',
        name: "",
        doB: "",
        salaryScale: 1,
        startDate: "",
        departmentId: "",
        annualLeave: 0,
        overTime: 0,
        image: "/asset/images/alberto.png",

    }
    const initTouches = {
        name: false,
        doB: false,
        startDate: false
    }
    const [search, setSearch] = useState('')
    const [modal, setModal] = useState(false)
    const [newStaff, setNewStaff] = useState(initValues)
    const [blur, setBlur] = useState(initTouches)
    const dispatch = useDispatch()
    const searchRef = useRef()
    if (loading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
        );
    } else {
        
        const handelSearch = (e) => {
            setSearch(searchRef.current.value)
            e.preventDefault()
        }
        const handelModal = () => {
            setModal(!modal)
        }

        const handelChange = (e) => {
            const { name, value } = e.target
            setNewStaff(prev => { return { ...prev, [name]: value } })

        }
        const HandelBlur = (e) => {
            const { name } = e.target
            setBlur({ ...blur, [name]: true })

        }
        const validate = (values) => {
            const errors = {
                name: "",
                doB: "",
                startDate: "",
            }

            if (blur.name && newStaff.name.length < 1)
                errors.name = "Yêu cầu nhập";
            else if (blur.name && newStaff.name.length < 3)
                errors.name = "Yêu cầu nhiều hơn 2 ký tự";
            else if (blur.name && newStaff.name.length > 30)
                errors.name = "Yêu cầu ít hơn 30 ký tự";

            if (blur.doB && newStaff.doB.length < 1) errors.doB = "Yêu cầu nhập";
            if (blur.startDate && newStaff.startDate.length < 1)
                errors.startDate = "Yêu cầu nhập";
            return errors

        }
        const errors = validate(newStaff)
        const staffList = data.filter((val) => {
            if (search === "")
                return val;
            else if (val.name.toLowerCase().includes(search.toLowerCase()))
                return val;
            return 0;
        }).map((data) => {
            const id = data.id
            const handelDelete = (id) => { fetchDelete(id, dispatch) }
            return (
                <div key={data.id} className='col-6 col-md-4 col-lg-2 mt-3 mb-3' >
                    <Link to={`/staff/${data.id}`}  >
                        <Card
                            style={{ textAlign: 'center' }}>
                            <img src={data.image} />
                            {data.name}
                        </Card>
                    </Link>
                    <Button color="danger" onClick={() => handelDelete(id)}>Delete</Button>
                </div>)
        })


        return (
            <div className='container'>
                <div className='row'>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="row">
                            <div className='col-10 col-md-8'>
                                <h3 >Nhân viên </h3>
                            </div>
                            <div className='col-2 col-auto'>
                                <Button onClick={handelModal}> <span className="fa fa-plus fa-lg"></span></Button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 mt-3'>
                        <Form onSubmit={handelSearch}>
                            <div className='row'>
                                <div className='col-8 col-md-8'>
                                    <input
                                        type='text'
                                        name='search' ref={searchRef} />
                                </div>
                                <div className="col-4 col-md-4">
                                    <Button type='submit'>Tìm kiếm </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                <hr />
                <div className='row shadow m-3'>
                    {staffList}
                </div>
                <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalHeader toggle={() => setModal(!modal)}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(e) => HandelSubmit(newStaff, e, setModal)}>
                            <FormGroup row>
                                <Label md={4} htmlFor='name' >Tên</Label>
                                <Col md={7}>
                                    <Input
                                        type='name' value={newStaff.name}
                                        name='name' onChange={handelChange}
                                        onBlur={HandelBlur} valid={blur.name && errors.name == ''}
                                        invalid={errors.name !== ''}
                                    />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={4} htmlFor='doB' >Ngày sinh</Label>
                                <Col md={8}>
                                    <Input
                                        type='date' value={newStaff.doB}
                                        name='doB' onChange={handelChange}
                                        onBlur={HandelBlur} valid={blur.doB && errors.doB == ''}
                                        invalid={errors.doB !== ''}
                                    />
                                    <FormFeedback>{errors.doB}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={4} htmlFor='startDate' >Ngày vào công ty</Label>
                                <Col md={8}>
                                    <Input
                                        type='date' value={newStaff.startDate}
                                        name='startDate' onChange={handelChange}
                                        onBlur={HandelBlur} valid={blur.startDate && errors.startDate == ''}
                                        invalid={errors.startDate !== ''}
                                    />
                                    <FormFeedback>{errors.doB}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={4} htmlFor='deparment'>Phòng ban</Label>
                                <Col md={8}>
                                    <Input type="select" name="departmentId"
                                        onChange={handelChange} value={newStaff.departmentId}>
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
                                        type='text' value={newStaff.salaryScale}
                                        name='salaryScale' onChange={handelChange}
                                        placeholder='1.0 - 3.0'
                                    />
                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <Label md={4} htmlFor='annualLeave' >Số ngày nghỉ còn</Label>
                                <Col md={8}>
                                    <Input
                                        type='text' value={newStaff.annualLeave}
                                        name='annualLeave' onChange={handelChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={4} htmlFor='overTime' >Số ngày làm thêm</Label>
                                <Col md={8}>
                                    <Input
                                        type='text' value={newStaff.overTime}
                                        name='overTime' onChange={handelChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 8, offset: 4 }}>
                                    <Button type='submit'> Thêm </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default Staff