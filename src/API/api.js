import * as axios from "axios";
import React from 'react'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": '256471cd-5892-4bd3-800b-bd95c9c9c706'}
})

 export const getUsers = (pageNumber, pageSize) => {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    }

export const   getProfile = (userID) => {
    console.warn('Obsolete method: please use profileAPI object')
        return profileAPI.getProfile(userID)
    }

export const getUserData = () => {
        return instance.get(`auth/me`).then(response => response.data)
    }


export const  setFollow = (id) => {
        return instance.post(`follow/${id}`).then(response => response.data)
    }

export const setUnfollow = (id) =>  {
        return instance.delete(`follow/${id}`).then(response => response.data)

}

export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`).then(response => response.data)
    },
    getStatus(userID) {
        return instance.get(`/profile/status/${userID}`).then(response => response)
    },
    updateStatus(status) {
        let myStatus = {
            status: status
        }
        return instance.put(`/profile/status`, myStatus).then(response => response)
    }
}




