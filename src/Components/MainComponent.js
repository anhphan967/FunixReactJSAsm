import Menu from './MenuComponent';
import DishDetail from "./DishDetail"
import { useState } from "react"
import Header from './HeaderComponent';
import Footer from './FooterComponent'
// container component
function MainComponent() {
    const [select, setSelect]=useState(null)
    const dishSelect=data=>{
        setSelect(data)
    }
    return (
        <div >          
            <Header />            
             <Menu  dishSelect={(data)=>dishSelect(data)}/>
             {select&&<DishDetail select={select}/> }
            <Footer />
        </div>
    )
}
export default MainComponent