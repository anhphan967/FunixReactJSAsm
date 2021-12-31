import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
function DishDetail({ select }) {

    return (
        <div className="container">
            <div className="row" >
                <Card className="col-12 col-md-5 m-2 p-0" >
                    <CardImg src={select.image} alt={select.name}  />
                    <CardBody >
                        <CardTitle>{select.name}</CardTitle>
                        <CardText>{select.description}</CardText>
                    </CardBody>
                </Card>
                <Card className='col-12 col-md-5 m-1 p-0'>
                    <CardBody >
                        <CardTitle><h1>Comments</h1></CardTitle>
                        {select.comments.map(data => {                            
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
        </div>
    )
}
export default DishDetail