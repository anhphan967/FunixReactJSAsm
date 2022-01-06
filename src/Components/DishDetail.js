import { Card, CardImg, CardTitle, CardBody, CardText, BreadcrumbItem, Breadcrumb} from 'reactstrap';
import { Link } from 'react-router-dom'
import React from 'react'
// UI component
function RenderComment({comments}) {
   
        if(comments!=null){
            return(
                <div className='col-12 col-md-5 m-1 '>
                <Card >
                    <CardBody >
                        <CardTitle><h3>Comments</h3></CardTitle>
                        {comments.map(data => {
                            return (
                                <div key={data.id}>
                                    <p>{data.comment}</p>
                                    <p>---{data.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(data.date)))}</p>
                                </div>
                            )
                        })}
                    </CardBody>
                </Card>
            </div>
            )
        }else{
            return <div></div>
        }
   
}
function RenderDish({select}) {
        
    return (
        <div className="col-12 col-md-5 m-1 ">
            <Card  >
                <CardImg src={select.image} alt={select.name} />
                <CardBody >
                    <CardTitle>{select.name}</CardTitle>
                    <CardText>{select.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
function DishDetail({ select, comments }) {
    
    return (
        <div className="container">
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{select.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{select.name}</h3>
                        <hr />
                    </div>
                </div>
            <div className="row" >
                <RenderDish select={select} />
               <RenderComment comments={comments} />
            </div>
        </div>
    )
}
export default DishDetail