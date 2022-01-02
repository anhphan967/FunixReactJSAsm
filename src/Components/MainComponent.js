import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Departments from './DeparmentsComponent'
import Salaries from './SalariesComponent'
import Staff from './Staff';
import StaffSelect from './StaffSelectComponent'
// container component
function MainComponent() {
   
    return (
        <div >
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Navigate replace to="/staffs" />} />
                <Route
                    path='/staffs'
                    element={<Staff />}

                />
                <Route
                    path='/deparments'
                    element={<Departments />}
                />
                <Route
                    path='/salaries'
                    element={<Salaries />}
                />
                <Route
                    path='/staff/:id'
                    element={<StaffSelect />}
                />
            </Routes>
            <Footer />
        </div>
    )
}
export default MainComponent