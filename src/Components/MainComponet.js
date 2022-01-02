import { Routes, Route } from 'react-router-dom'
import Menu from './MenuComponent';
// import DishDetail from "./DishDetail"
import { useState } from "react"
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Conact from './Contact'
import { PROMOTIONS } from '../Shared/promotions'
import { LEADERS } from '../Shared/leaders';
import { DISHES } from '../Shared/Dishes'
// container component
function MainComponent() {
    const [select, setSelect] = useState(null)
    const dishSelect = data => {
        setSelect(data)
        console.log(data)
    }
    return (
        <div >
            <Header />
            <Routes>
                <Route path="/home"
                    element={
                        <Home promotion={PROMOTIONS}
                            leader={LEADERS.filter(leaders => leaders.featured)}
                            dish={DISHES.filter(dishes => dishes.featured)}
                        />} />
                <Route path="/menu" element={<Menu dishSelect={dishSelect} />} />
                <Route path="/contactus" element={<Conact />} />
            </Routes>
            {/* 
             {select&&<DishDetail select={select}/> } */}
            <Footer />
        </div>
    )
}
export default MainComponent