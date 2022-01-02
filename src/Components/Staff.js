import { Card, Form } from 'react-bootstrap'
import { STAFFS } from '../Shared/Staffs'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Staff() {
    const [colums, setColums] = useState('col-lg-2 col-md-4 col-xs-6 mt-3 mb-3')
    const [sort, setSort] = useState('true')

    const staffList = STAFFS.sort((a, b) => sort === 'true' ? a.id - b.id : b.id - a.id).map((data) => {
        return (
            <div key={data.id}  className={colums} >
                <Link
                    to={`/staff/${data.id}`}
                     >

                    <Card
                        style={{ textAlign: 'center' }}>
                        <img src={data.image} />
                        {data.name}
                    </Card>
                </Link>
            </div>)
    })

    return (
        <div className='container'>
            <div className='row'>
                <h3 className='col-lg-2 col-md-3 col-xs-6'>Nhân viên </h3>
                <div className='col-lg-3 col-md-4 col-xs-6'>
                    <Form.Select onChange={(e) => setColums(e.target.value)} >
                        <option value='col-2 mt-3 mb-3'>Chọn cột hiện thị trang</option>
                        <option value="col-3 mt-3 mb-3">4 cột</option>
                        <option value="col-4 mt-3 mb-3">3 cột</option>
                        <option value="col-6 mt-3 mb-3">2 cột</option>
                    </Form.Select>

                </div>
                <div className='col-lg-3 col-md-4 col-xs-6'>
                    <Form.Select onChange={(e) => setSort(e.target.value)} >
                        <option value={true}>Sắp xếp theo MSNV</option>
                        <option value={false} >Giảm dần</option>
                    </Form.Select>
                </div>
                <hr />
            </div>
            <div className='row'>
                {staffList}
            </div>
        </div>
    )
}
export default Staff