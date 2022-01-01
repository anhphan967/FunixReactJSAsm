import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from "./DishDetail"
import { useState } from "react"
// container component
function MainComponent() {
    const [select, setSelect]=useState(null)
    const dishSelect=data=>{
        setSelect(data)
    }
    return (
        <div >            
          <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
             <Menu  dishSelect={(data)=>dishSelect(data)}/>
             {select&&<DishDetail select={select}/> }
        </div>
    )
}
export default MainComponent