import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Card } from 'react-bootstrap'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

function DepartDetail({ data, loading, errMess }) {
    const id = useParams()

    if (loading) { return <Loading /> }
    else if (errMess) { return <div>{errMess}</div> }
    else {
        const value = data.filter((data) => { return data.departmentId == id.id })
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem ><Link to='/deparments'>Phòng ban</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{id.id}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className='row shadow m-3'>
                    
                    <Render value={value} />
                </div>
            </div>
        )
    }

}
const Render = ({ value }) => {

    return (
        <>
            {value.map((data, index) => {
                return (
                    <Link key={index} className='col-6 col-md-4 col-lg-2 mt-3 mb-3'
                        to={`/staff/${data.id}`}
                    >
                        <Card
                            style={{ textAlign: 'center' }}>
                            <img src={data.image} />
                            {data.name}
                        </Card>
                    </Link>
                )
            })}
        </>
    )
}
export default DepartDetail