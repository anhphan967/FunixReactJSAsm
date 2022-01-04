import React from "react"
import { Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle } from 'reactstrap';

function Render(data) {
    
    return (
        <Card>
            <CardImg src={data.data[0].image} alt={data.data[0].name} />
            <CardBody>
                <CardTitle>{data.data[0].name}</CardTitle>
                {data.data[0].designation ? <CardSubtitle>{data.data[0].designation}</CardSubtitle> : null}
                <CardText>{data.data[0].description}</CardText>
            </CardBody>
        </Card>
    )
}

function Home({ promotion, dish, leader }) {

    return (
        <div className="container">
            <div className="row align-items-star">
                <div className='col-12 col-md m-1'>
                    <Render data={promotion} />
                </div>
                <div className='col-12 col-md m-1'>
                    <Render data={dish} />
                </div>
                <div className='col-12 col-md m-1'>
                    <Render data={leader} />
                </div>
            </div>
        </div>
    )
}
export default Home