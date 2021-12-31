import { DISHES } from "../Shared/Dishes"
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
// container
function Menu({ dishSelect }) {
    return (
        <div className="container">
            <div className="row">
                {DISHES.map(data => {
                return(    <div className="col-12 col-md-5 m-1" key={data.id} onClick={() => dishSelect(data)}>
                        <Card>
                            <CardImg src={data.image} alt={data.name} width='100%' />
                            <CardImgOverlay >
                                <CardTitle>{data.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>         
                )})}
            </div>
        </div>    
    )
}
export default Menu