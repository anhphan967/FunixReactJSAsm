import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Departments from './DeparmentsComponent'
import Salaries from './SalariesComponent'
import Staff from './Staff';
import StaffSelect from './StaffSelectComponent'
import { STAFFS } from '../Shared/Staffs'
import {useState} from 'react'
// container component
function MainComponent() {
    const[data, setData]= useState(STAFFS)
    const HandelSubmit = ( newStaff,e,setModal) => {
        
        e.preventDefault()
        if (newStaff.name=='' || newStaff.doB==='' || newStaff.starDate==='') {           
            alert('Vui lòng điền thông tin')
        } else {
             let oldid = newStaff.id
            let newid = oldid + 1;
            newStaff.id = newid
            setData(data=>[...data, newStaff])
            setModal(false)
            
            
        }
        
    }
    console.log(data)
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
                                data={data}
                            />}

                />
                <Route
                    path='/deparments'
                    element={<Departments />}
                />
                <Route
                    path='/salaries'
                    element={<Salaries data={data}/>}
                />
                <Route
                    path='/staff/:id'
                    element={<StaffSelect data={data} />}
                />
            </Routes>
            <Footer />
        </div>
    )
}
export default MainComponent