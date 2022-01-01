import {Routes, Route, Link} from 'react-router-dom'
import Menu from './MenuComponent';
import DishDetail from "./DishDetail"
import { useState } from "react"
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
// container component
function MainComponent() {
    const [select, setSelect]=useState(null)
    const dishSelect=data=>{
        setSelect(data)
    }
    return (
        <div > 
            
            <Header />         
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menu  dishSelect={(data)=>dishSelect(data)}/>} />
            </Routes>   
             {/* 
             {select&&<DishDetail select={select}/> } */}
            <Footer />
        </div>
    )
}
export default MainComponent