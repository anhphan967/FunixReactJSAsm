import { baseUrl } from "../Shared/fetch";
import {TransitionGroup,CSSTransition } from 'react-transition-group'
import { Card, CardImg, CardImgOverlay, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom'
import Loading from './Loading'

// UI component
function Menu({ dishSelect, dishes, loading, errMess }) {
    if (loading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>

                    {dishes.map(data => {
                        return (<div className="col-12 col-md-5 m-1" key={data.id} onClick={() => dishSelect(data)}>
                            <CSSTransition in={true} timeout={1000} classNames="fades">
                                <Card>
                                    <Link to={`/menu/${data.id}`} >
                                        <CardImg src={baseUrl + data.image} alt={data.name} width='100%' />
                                        <CardImgOverlay >
                                            <CardTitle>{data.name}</CardTitle>
                                        </CardImgOverlay>
                                    </Link>
                                </Card>
                            </CSSTransition>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Menu