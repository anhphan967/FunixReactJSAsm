import { Input, FormGroup, Card, CardImg, CardTitle, CardBody, CardText, BreadcrumbItem, Breadcrumb, ModalBody, Button, Modal, ModalHeader, Label } from 'reactstrap';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Loading from './Loading'
import { baseUrl } from '../Shared/fetch';

// UI component
function RenderComment({ comments, select, HandelSubmit }) {
    const initValues = {
        dishId: select.id,
        rating: '',
        author: '',
        comment: ''
    }
    
    const [modal, setModal] = useState(false)
    const [newComment, setNewComment] = useState(initValues)
    const HandelChange = (e) => {
        const { name, value } = e.target
        setNewComment({ ...newComment, [name]: value })
    }

    if (comments != null) {
        return (
            <div className='col-12 col-md-5 m-1 '>
                <Card >
                    <CardBody >
                        <CardTitle><h3>Comments</h3></CardTitle>
                        {comments.map((data, index) => {
                            return (
                                <div key={index}>
                                    <p>{data.comment}</p>
                                    <p>---{data.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(data.date)))}</p>
                                </div>
                            )
                        })}
                        <Button onClick={() => setModal(!modal)}><span className="fa fa-pencil fa-lg"></span>Submit Comment</Button>
                        <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                            <ModalHeader toggle={() => setModal(!modal)}>
                                Submit Comment
                            </ModalHeader>
                            <ModalBody>
                                <form onSubmit={(e) => HandelSubmit(newComment, e)}>
                                    <FormGroup row>
                                        <Label htmlFor='rating'>Rating</Label>
                                        <Input name='rating'
                                            type='select' value={newComment.rating} onChange={HandelChange}>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor='author'>Your Name</Label>
                                        <Input name='author' placeholder='Your Name'
                                            type='text' value={newComment.author} onChange={HandelChange} />
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor='comment'>Comment</Label>
                                        <Input name='comment'
                                            type='textarea' value={newComment.comment} onChange={HandelChange} />
                                    </FormGroup>
                                    <Button type='submit'>Submit</Button>
                                </form>
                            </ModalBody>
                        </Modal>
                    </CardBody>
                </Card>
            </div>
        )
    } else {
        return <div></div>
    }

}
function RenderDish({ select }) {
    return (
        <div className="col-12 col-md-5 m-1 ">
            <Card  >
                <CardImg src={baseUrl + select.image} alt={select.name} />
                <CardBody >
                    <CardTitle>{select.name}</CardTitle>
                    <CardText>{select.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function DishDetail({ select, comments, HandelSubmit, loading, errMess,  errMessComments }) {
    const param = useParams()
    const comment = comments.filter(comments => comments.dishId == parseInt(param.DishID))
    const dish = select.filter(dish => dish.id == parseInt(param.DishID))[0]
  
    if (loading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (errMess ||errMessComments ) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{errMess}{errMessComments}</h4>
                </div>
            </div>
        );
    } else if (dish != null) {
        return (<div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{select.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row" >
                <RenderDish select={dish} />
                <RenderComment comments={comment} select={dish} HandelSubmit={HandelSubmit} />
            </div>
        </div>
        )
    } else {
        return (
            <div></div>
        );
    }


}
export default DishDetail