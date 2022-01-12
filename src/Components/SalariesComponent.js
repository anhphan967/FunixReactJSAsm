import { Card,Form } from 'react-bootstrap'
import { Breadcrumb,BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { fetchSalaries } from '../reducer/Action'


function Salaries({ data }) {
  const dispatch = useDispatch()
  useEffect(()=>{  fetchSalaries(dispatch)},[])
  const [sort, setSort] = useState(false)
  // render Salaries
  const salaries = data.sort((a, b) => sort==='true' ? a.id - b.id : b.id - a.id).map((data) => {
    return (
      <Card key={data.id} className={'col-12 col-md-6 col-lg-4 mt-2 mb-2 '}>
        <h3>{data.name}</h3>
        <p> Mã nhân viên:{data.id}</p>
        <p>Hệ số lương: {data.salaryScale}</p>
        <p>Số giờ đã làm thêm : {data.overTime}</p>
        <Card.Header> Lương : {data.salary}</Card.Header>
      </Card>
    )
  })

  return (
    <div className='container'>
      <div className='row'>
        <Breadcrumb className='col-lg-3 col-md-4 col-xs-6'>
          <BreadcrumbItem ><Link to='/staffs'>Nhân viên</Link></BreadcrumbItem>
          <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-lg-3 col-md-4 col-xs-6 p-2'>
          <Form.Select onChange={(e) => setSort(e.target.value)} >
            <option value={true}>MSNV tăng dần</option>
            <option value={false} >MSNV giảm dần</option>
          </Form.Select>
        </div>
      </div>
      <div className='row'>
        {salaries}
      </div>
    </div>
  )
}
export default Salaries