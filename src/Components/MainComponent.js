import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Departments from './DeparmentsComponent'
import Salaries from './SalariesComponent'
import Staff from './Staff';
import StaffSelect from './StaffSelectComponent'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchStaffs, fetchDepartments, fetchSalaries, fetchPlus } from '../reducer/Action'
import DepartDetail from './DepartDetail';

// container component
function MainComponent() {
    const dispatch = useDispatch()
    useEffect(() => {
        fetchStaffs(dispatch)
        fetchDepartments(dispatch)
        fetchSalaries(dispatch)
    }, [])
    const datas = useSelector(state => state)


    const HandelSubmit = (newStaff, e, setModal) => {

        e.preventDefault()
        if (newStaff.name == '' || newStaff.doB === '' || newStaff.starDate === '') {
            alert('Vui lòng điền thông tin')
        } else {          
           
            console.log(newStaff)
            fetchPlus(newStaff,dispatch)
            setModal(false)
        }
    }


    return (
        <div >
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Navigate replace to="/staffs" />} />
                <Route
                    path='/staffs'
                    element={<Staff
                        HandelSubmit={HandelSubmit}
                        data={datas.staffs.staffs}
                        loading={datas.staffs.isLoading}
                        errMess={datas.staffs.errMess}
                    />}

                />
                <Route
                    path='/deparments'
                    element={<Departments data={datas.departments.departments} />}
                />
                <Route
                    path='/departments/:id'
                    element={<DepartDetail
                        data={datas.staffs.staffs}
                        loading={datas.staffs.isLoading}
                        errMess={datas.staffs.errMess}
                    />}
                />
                <Route
                    path='/salaries'
                    element={<Salaries data={datas.salaries.salaries} />}
                />
                <Route
                    path='/staff/:id'
                    element={<StaffSelect 
                        data={datas.staffs.staffs}
                        loading={datas.staffs.isLoading}
                        errMess={datas.staffs.errMess} />}
                />
            </Routes>
            <Footer />
        </div>
    )
}
export default MainComponent