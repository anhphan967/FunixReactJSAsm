import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

// UI Componet
const RenderDepartment = ({ data }) => {
  return data.map((data, index) => {
    return (
      <Link key={index} to={`/departments/${data.id}`} >
        <Card  className={'col-lg-3 col-md-5 col-xs-12  m-2 p-4'}>
          <h3>{data.name}</h3>
          <p>Số lượng nhân viên : {data.numberOfStaff}</p>
        </Card>
      </Link>
    )
  })
}
//Container Componet
function Departments({ data }) {
  return (
    <div className='container'>
      <div className='row'>
        <RenderDepartment data={data} />
      </div>
    </div>
  )
}
export default Departments