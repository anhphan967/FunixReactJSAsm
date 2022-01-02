import { Routes, Route, Navigate } from 'react-router-dom'

import { useState } from "react"
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Departments from './DeparmentsComponent'
import Salaries from './SalariesComponent'
import Staff from './Staff';
import StaffSelect from './StaffSelectComponent'
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
                <Route
                    path="/"
                    element={<Navigate replace to="/staff" />} />
                <Route
                    path='/staff'
                    element={<Staff />}

                />
                <Route
                    path='/deparment'
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