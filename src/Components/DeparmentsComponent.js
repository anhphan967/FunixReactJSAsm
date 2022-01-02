import { Card } from 'react-bootstrap';
import { DEPARTMENTS } from '../Shared/Staffs'

// UI Componet
const renderDepartment = DEPARTMENTS.map((data, index) => {
  return(
    <Card key={index} className={'col-lg-3 col-md-5 col-xs-12  m-2 p-4'}>
      <h3>{data.name}</h3>
      <p>Số lượng nhân viên : {data.numberOfStaff}</p>
    </Card>
  )
})
//Container Componet
function Departments() {  
  return (
    <div className='container'>
      <div className='row'>
        {renderDepartment}
      </div>
    </div>
  )
}
export default Departments