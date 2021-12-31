import { DISHES } from "../Shared/DISHES"
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import {useState} from "react"

// UI component
function HandelDishSelect({data}){ 
        console.log(data.select.name)
    return(
        <div className="row" >
                 <Card >
                 <CardImg src={data.select.image} alt={data.select.name} width='100%' />                    
                <CardBody >
                    <CardTitle>{data.select.name}</CardTitle> 
                    <CardText>{data.select.description}</CardText>                    
                </CardBody>
            </Card>
        </div>
    )            
}
// container
function Menu (){

    const [select, setSelect]=useState(null)
   
   
    const Component=DISHES.map(data=>{
        return(
            <div className="col-12 col-md-5 m-1" key={data.id} onClick={()=>setSelect(data)}>
                <Card>
                    <CardImg src={data.image} alt={data.name} width='100%' />
                    <CardImgOverlay >
                        <CardTitle>{data.name}</CardTitle>                     
                    </CardImgOverlay>
                </Card>
            </div>
        )
    })

    return(
            <div className="container">
                <div className="row">
                    {Component}
                </div>
                { select&&<HandelDishSelect data={{select}}/>}
            </div>
            
        )
}
export default Menu
