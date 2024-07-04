import axios from "axios";
import { BASE_URL } from "./constants.js";

export const getAll = (endpoint) => {
    return axios.get(BASE_URL + `${endpoint}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
};

export const getOne = async (endpoint, id, token) => {
    return axios.get(BASE_URL + endpoint + `?token=${token}&id=${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
};


export const postOne = (endpoint, payload) => {
    return axios.post(BASE_URL + endpoint, payload)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
};

export const delOne = (id) => {
    return axios.delete(BASE_URL + `/${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
};
