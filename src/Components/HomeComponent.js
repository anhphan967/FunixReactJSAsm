import React from "react"
import { Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle } from 'reactstrap';
import Loading from './Loading'
function Render({ data, loading, errMess }) {
    
    if (loading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    } else if (errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
        )
    } else {
        return (
            <Card>
                <CardImg src={data[0].image} alt={data[0].name} />
                <CardBody>
                    <CardTitle>{data[0].name}</CardTitle>
                    {data[0].designation ? <CardSubtitle>{data[0].designation}</CardSubtitle> : null}
                    <CardText>{data[0].description}</CardText>
                </CardBody>
            </Card>
        )
    }

}

function Home({ promotion, dish, leader, loading, errMess }) {
    
    return (
        <div className="container">
            <div className="row align-items-star">
                <div className='col-12 col-md m-1'>
                    <Render data={promotion} />
                </div>
                <div className='col-12 col-md m-1'>
                    <Render data={dish} loading={loading} errMess={errMess} />
                </div>
                <div className='col-12 col-md m-1'>
                    <Render data={leader} />
                </div>
            </div>
        </div>
    )
}
export default Home