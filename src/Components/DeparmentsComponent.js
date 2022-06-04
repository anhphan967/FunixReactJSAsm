import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { CardBody, CardText, CardTitle } from 'reactstrap';
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {  fetchDepartments } from '../reducer/Action'

// UI Componet
const RenderDepartment = ({ data }) => {
  return data.map((data, index) => {
    return (      
          <Link key={index} to={`/departments/${data.id}`} className='col-12 col-md-6 col-lg-4 mt-2 mb-2'>
            <Card  >
              <CardTitle className='m-2'>{data.name}</CardTitle>
              <CardBody>
                <CardText>Số lượng nhân viên : {data.numberOfStaff}</CardText>
              </CardBody>
            </Card>
          </Link>    
    )
  })
}
//Container Componet
function Departments({ data }) {
  const dispatch = useDispatch()
  useEffect(()=>{ fetchDepartments(dispatch)},[])
  return (
    <div className='container'>
      <div className='row shadow m-3'>
        <RenderDepartment data={data} />
      </div>
    </div>
  )
}
export default Departments