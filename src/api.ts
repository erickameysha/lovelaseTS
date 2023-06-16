import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:5555/api/healthCheck', //сюда добавлять url
    withCredentials: true,
    headers: {
        // сюда добавляем аппи кей (если есть)
        'API-KEY': '',//
    },
})


export const api = {
    testFetch() {
        return instance.get('/')

    }
}