import axios from "axios"

axios.defaults.validateStatus = function () {
    return true;
}

export const postRequest = (url, data, headers = false) => {
    if(headers) {
        return axios.post(`${process.env.REACT_APP_API_URL}/v1${url}`, data, {
            headers
        })
    }
    else {
        return axios.post(`${process.env.REACT_APP_API_URL}/v1${url}`, data)
    }
}

export const patchRequest = (url, data, headers = false) => {
    if(headers) {
        return axios.patch(`${process.env.REACT_APP_API_URL}/v1${url}`, data, {
            headers
        })
    }
    else {
        return axios.patch(`${process.env.REACT_APP_API_URL}/v1${url}`, data)
    }
}

export const putRequest = (url, data, headers = false) => {
    if(headers) {
        return axios.put(`${process.env.REACT_APP_API_URL}/v1${url}`, data, {
            headers
        })
    }
    else {
        return axios.put(`${process.env.REACT_APP_API_URL}/v1${url}`, data)
    }
}

export const getRequest = (url, headers = false) => {
    if(headers) {
        return axios.get(`${process.env.REACT_APP_API_URL}/v1${url}`, {
            headers
        })
    }
    else {
        return axios.get(`${process.env.REACT_APP_API_URL}/v1${url}`)
    }
}

export const deleteRequest = (url, headers = {}) => {
    return axios.delete(`${process.env.REACT_APP_API_URL}/v1${url}`, {
        headers
    })
}