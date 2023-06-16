import axios from "axios";

const instance = axios.create({
    baseURL: '', //сюда добавлять url
    withCredentials: true,
    headers: {
        // сюда добавляем аппи кей (если есть)
        'API-KEY': '',//
    },
})


const api = {
    testFetch() {
        return instance.get('/')
    }
}