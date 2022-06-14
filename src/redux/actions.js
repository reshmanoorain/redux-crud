import * as types from './actionType';
import axios from 'axios';


const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userDeleted = () => ({
    type: types.DELETE_USER, 
})

const userAdded = () => ({
    type: types.ADD_USER, 
})
const userEdited = (user) => ({
    type: types.EDIT_USER, 
    payload: user,
})

const userUpdated = () => ({
    type: types.UPDATE_USER, 
})

export const loadUsers = () => {
    return function (dispatch) {
       axios.get(`${process.env.REACT_APP_API}`)
        .then(response => {
            console.log("response",response);
            dispatch(getUsers(response.data))
        }).catch(error => console.log(error));
    }
}

export const deleteUser = (id) => {
    return function (dispatch) {
       axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then(response => {
            console.log("response",response);
            dispatch(userDeleted());
            dispatch(loadUsers());
        }).catch(error => console.log(error));
    }
}


export const addUser = (user) => {
    return function (dispatch) {
       axios.post(`${process.env.REACT_APP_API}`, user)
        .then(response => {
            console.log("response",response);
            dispatch(userAdded());
            dispatch(loadUsers());
        }).catch(error => console.log(error));
    }
}

export const editUser = (id) => {
    return function (dispatch) {
       axios.get(`${process.env.REACT_APP_API}/${id}`)
        .then(response => {
            console.log("response",response);
            dispatch(userEdited(response.data));
            // dispatch(loadUsers());
        }).catch(error => console.log(error));
    }
}

export const updateUser = (user, id) => {
    return function (dispatch) {
       axios.put(`${process.env.REACT_APP_API}/${id}`, user)
        .then(response => {
            console.log("response",response);
            dispatch(userUpdated());
            // dispatch(loadUsers());
        }).catch(error => console.log(error));
    }
}