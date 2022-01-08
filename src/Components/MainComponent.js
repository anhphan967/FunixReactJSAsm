import { Routes, Route, Navigate } from 'react-router-dom'
import Menu from './MenuComponent';
import DishDetail from "./DishDetail"
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Conact from './Contact'
import { addComment } from '../reducer/Action'
// container component
function MainComponent() {
    const datas = useSelector(state => state)
    const [select, setSelect] = useState(null)
    const dispatch = useDispatch()
    const dishSelect = data => {
        setSelect(data)
    }
    const HandelSubmit = (newComment, e) => {
        
        if (newComment.comment == ''||newComment.author == '') {
            alert('Please give us Your Name and Your Feedback')
        } else {          
            const { dishId, rating, author, comment } = newComment
            const action = addComment(dishId, rating, author, comment)
            dispatch(action)
        }


        e.preventDefault();


    }
    return (
        <div >
            <Header />
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route exact path="/home"
                    element={
                        <Home promotion={datas.Promotions}
                            leader={datas.Leaders.filter(leaders => leaders.featured)}
                            dish={datas.Dishes.filter(dishes => dishes.featured)}
                        />} />
                <Route exact path="/menu" element={<Menu dishSelect={dishSelect} dishes={datas.Dishes} />} />
                <Route path="/menu/:DishID"
                    element=
                    {select && <DishDetail select={select} HandelSubmit={HandelSubmit}
                        comments={datas.Comments.filter(comments => comments.dishId === select.id)}
                    />} />
                <Route exact path="/contactus" element={<Conact />} />
            </Routes>

            <Footer />
        </div>
    )
}
export default MainComponent