import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/1', //сюда добавлять url
    withCredentials: true,
    headers: {
        // сюда добавляем аппи кей (если есть)
        'API-KEY': '',//
    },
})


export const api = {
    testFetch() {
        return instance.get('')

    }
}