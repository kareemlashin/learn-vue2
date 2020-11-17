import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
    all() {
        alert(API_URL)
    }
    getall() {
        return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    }
    getpost(data) {
        return axios.post('https://jsonplaceholder.typicode.com/todos/', data)
    }
    getdelete(data, id) {
        return axios.put('https://jsonplaceholder.typicode.com/todos/' + id, data)
    }
    getput(id) {
        return axios.delete('https://jsonplaceholder.typicode.com/todos/' + id)
    }
}

export default new AuthService();