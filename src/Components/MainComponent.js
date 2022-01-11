import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Menu from './MenuComponent';
import DishDetail from "./DishDetail"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Conact from './Contact'
import { fetchDishes, postComment, fetchPromos, fetchComments } from '../reducer/Action'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
// container component
function MainComponent() {
    useEffect(() => {
        fetchDishes(dispatch)
        fetchPromos(dispatch)
        fetchComments(dispatch)
    }, [])
  
    const datas = useSelector(state => state)
    const location=useLocation()
    const [select, setSelect] = useState(null)
    const dispatch = useDispatch()
    const dishSelect = data => {
        setSelect(data)
    }
    console.log(location)
    const HandelSubmit = (newComment, e, setModal, setNewComment) => {

        if (newComment.comment == '' || newComment.author == '') {
            alert('Please give us Your Name and Your Feedback')
        } else {
            const { dishId, rating, author, comment } = newComment
            postComment(dishId, rating, author, comment, dispatch)
            setModal(false)

        }
        e.preventDefault();

    }
    return (
        <div >
            <Header />
            <TransitionGroup>
                <CSSTransition key={location.key} timeout={300} classNames="page">
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/home" />} />
                        <Route exact path="/home"
                            element={
                                <Home
                                    loadingPromos={datas.Promotions.isLoading}
                                    errMessPromos={datas.Promotions.errMess}
                                    promotion={datas.Promotions.promos}
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
                                comments={datas.Comments.comments}
                                errMessComments={datas.Comments.errMess}
                                loading={datas.Dishes.isLoading}
                                errMess={datas.Dishes.errMess}
                            />} />
                        <Route exact path="/contactus" element={<Conact />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </div>
    )
}
export default MainComponent