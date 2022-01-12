import { baseUrl } from "../Shared/baseUrl"
import * as ActionTypes from './ActionTypes';

// staff 
export const fetchStaffs = (dispatch) => {
    console.log('fetchStaffs')
    dispatch(isLoadingStaffs(true))
    fetch(baseUrl + 'staffs')
        .then(response => {
            if (response.ok) { return response }
            else {
                const error = new Error('Error:' + response.status + ':' + response.statusText)
                error.response = response
                throw error
            }
        },
            error => {
                const errMess = new Error(error.message)
                throw errMess
            })
        .then(response => response.json())
        .then(staffs => dispatch(staffsAdd(staffs)))
        .catch(error => dispatch(staffsFailed(error.message)))
}
export const isLoadingStaffs = () => ({
    type: ActionTypes.STAFFS_LOADING
})
export const staffsAdd = staffs => ({
    type: ActionTypes.STAFFS_ADD,
    payload: staffs
})
export const staffsFailed = error => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: error
})
//STAFFS_PLUS
export const fetchPlus = (newStaff, dispatch) => {
    console.log('fetchPlus')
    fetch(baseUrl + 'staffs', {
        method: 'POST',
        body: JSON.stringify(newStaff),
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) { return response }
            else {
                const error = new Error('Error:' + response.status + ':' + response.statusText)
                error.response = response
                throw error
            }
        },
            error => {
                const errMess = new Error(error.message)
                throw errMess
            })
        .then(response => response.json())
        .then(staff => dispatch(staffPlus(staff)))
        .catch(error => {
            console.log('STAFF PLUS:', error.message);
            alert('Thêm mới  nhân viên không thành công\nError: ' + error.message);
        })
}
export const staffPlus = staff => ({
    type: ActionTypes.STAFFS_PLUS,
    payload: staff
})
// STAFFS_DELETE
export const fetchDelete = (id, dispatch) => {
    console.log('fetchDelete')    
    fetch(baseUrl + `staffs/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "same-origin"
    })
        .then(() => dispatch(staffDelete(id)))

}
export const staffDelete = id => ({
    type: ActionTypes.STAFFS_DELETE,
    payload: id
})
//update 
export const fetchUpdate = (updateStaff,dispatch) => {
    console.log('fetchUpdate')
    fetch(baseUrl + 'staffs',{
        method: 'PATCH',
        body:JSON.stringify(updateStaff),
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) { return response }
            else {
                const error = new Error('Error:' + response.status + ':' + response.statusText)
                error.response = response
                throw error
            }
        },
            error => {
                const errMess = new Error(error.message)
                throw errMess
            })
        .then(response => response.json())
        .then(staff => dispatch(staffsUpdate(staff)))
        .catch(error =>  {console.log('STAFF UPDATE:', error.message)
        alert('Chỉnh sửa nhân viên không thành công\nError: ' + error.message)})
}
export const staffsUpdate = staff => ({
    type: ActionTypes.STAFFS_UPDATE,
    payload: staff
})

// deparmemts
export const fetchDepartments = (dispatch) => {
    dispatch(isLoadingDepartments(true))
    console.log('fetchDepartments')

    fetch(baseUrl + 'departments')
        .then(response => {
            if (response.ok) { return response }
            else {
                const error = new Error('Error:' + response.status + ':' + response.statusText)
                error.response = response
                throw error
            }
        },
            error => {
                const errMess = new Error(error.message)
                throw errMess
            })
        .then(response => response.json())
        .then(departments => dispatch(DepartmentsAdd(departments)))
        .catch(error => dispatch(departmentsFailed(error.message)))
}
export const isLoadingDepartments = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
})
export const DepartmentsAdd = departments => ({
    type: ActionTypes.DEPARTMENTS_ADD,
    payload: departments
})
export const departmentsFailed = error => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: error
})

//salaries
export const fetchSalaries = (dispatch) => {
    dispatch(isLoadingSalaries(true))
    console.log('fetchSalaries')
    fetch(baseUrl + 'staffsSalary')
        .then(response => {
            if (response.ok) { return response }
            else {
                const error = new Error('Error:' + response.status + ':' + response.statusText)
                error.response = response
                throw error
            }
        },
            error => {
                const errMess = new Error(error.message)
                throw errMess
            })
        .then(response => response.json())
        .then(salaries => dispatch(salariesAdd(salaries)))
        .catch(error => dispatch(salariesFailed(error.message)))
}
export const isLoadingSalaries = () => ({
    type: ActionTypes.SALARIES_LOADING
})
export const salariesAdd = salaries => ({
    type: ActionTypes.SALARIES_ADD,
    payload: salaries
})
export const salariesFailed = error => ({
    type: ActionTypes.SALARIES_FAILED,
    payload: error
})