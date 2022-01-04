import { Routes, Route, Navigate } from 'react-router-dom'
import Menu from './MenuComponent';
import DishDetail from "./DishDetail"
import { useState } from "react"
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Conact from './Contact'
import { PROMOTIONS } from '../Shared/Promotions'
import { LEADERS } from '../Shared/Leaders';
import { DISHES } from '../Shared/Dishes'
import {COMMENTS} from '../Shared/Comments'
// container component
function MainComponent() {
    const [select, setSelect] = useState(null)
    const dishSelect = data => {
        setSelect(data)        
    }
    return (
        <div >
            <Header />
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route exact path="/home"
                    element={
                        <Home promotion={PROMOTIONS}
                            leader={LEADERS.filter(leaders => leaders.featured)}
                            dish={DISHES.filter(dishes => dishes.featured)}
                        />} />
                <Route exact  path="/menu" element={<Menu dishSelect={dishSelect} />} />
                <Route path="/menu/:DishID" 
                        element=
                        {select && <DishDetail select={select}
                                    comments={COMMENTS.filter(comments=>comments.dishId===select.id)}
                        />} />
                <Route exact path="/contactus" element={<Conact />} />
            </Routes>           
           
            <Footer />
        </div>
    )
}
export default MainComponent