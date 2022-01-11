
import dateFormat from "dateformat";
import { useParams, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Loading from "./Loading";

function StaffSelect({ data, loading, errMess}) {
  let { id } = useParams()
  if (loading) { return <Loading /> }
  else if (errMess) { return <div>{errMess}</div> }
  else {
    let selectData = data.filter((data) => parseInt(id) == data.id)
    console.log(selectData)
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
            <p>Phòng ban: { selectData[0].departmentId}</p>
            <p>Số ngày nghỉ còn lại: {selectData[0].annualLeave}</p>
            <p>Số ngày đã làm thêm : {selectData[0].overTime}</p>
          </div>

        </div>
      </div>
    )
  }
}
export default StaffSelect