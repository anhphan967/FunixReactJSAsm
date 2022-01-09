import { Routes, Route, Navigate , useParams} from 'react-router-dom'
import Menu from './MenuComponent';
import DishDetail from "./DishDetail"
import { useState,useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Conact from './Contact'
import { fetchDishes, addComment } from '../reducer/Action'
// container component
function MainComponent() {
    useEffect(()=>{ (fetchDishes(dispatch))
    }, [])         
    
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
                        <Home 
                            promotion={datas.Promotions}
                            leader={datas.Leaders.filter(leaders => leaders.featured)}
                            dish={datas.Dishes.dishes.filter(dishes => dishes.featured)}
                            loading={datas.Dishes.isLoading}
                            errMess={datas.Dishes.errMess}
                        />} />
                <Route exact path="/menu" element={
                    <Menu 
                        dishSelect={dishSelect} dishes={datas.Dishes.dishes} 
                        loading={datas.Dishes.isLoading}
                        errMess={datas.Dishes.errMess}
                    />} />
                <Route path="/menu/:DishID"
                    element=
                    {<DishDetail select={datas.Dishes.dishes} HandelSubmit={HandelSubmit}
                        comments={datas.Comments} 
                        loading={datas.Dishes.isLoading}
                        errMess={datas.Dishes.errMess}
                    />} />
                <Route exact path="/contactus" element={<Conact />} />
            </Routes>

            <Footer />
        </div>
    )
}
export default MainComponent