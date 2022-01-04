import { Routes, Route, Navigate } from 'react-router-dom'
import Menu from './MenuComponent';
import DishDetail from "./DishDetail"
import { useState } from "react"
import { useSelector } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Conact from './Contact'


// container component
function MainComponent() {
    const reducer=useSelector(state=> state.reducer)
    console.log(reducer)
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
                        <Home promotion={reducer.PROMOTIONS}
                            leader={reducer.LEADERS.filter(leaders => leaders.featured)}
                            dish={reducer.DISHES.filter(dishes => dishes.featured)}
                        />} />
                <Route exact  path="/menu" element={<Menu dishSelect={dishSelect} dishes={reducer.DISHES} />} />
                <Route path="/menu/:DishID" 
                        element=
                        {select && <DishDetail select={select}
                                    comments={reducer.COMMENTS.filter(comments=>comments.dishId===select.id)}
                        />} />
                <Route exact path="/contactus" element={<Conact />} />
            </Routes>           
           
            <Footer />
        </div>
    )
}
export default MainComponent