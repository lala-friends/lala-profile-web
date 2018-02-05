import axios from 'axios';
import {baseURL} from '../config';

class Service {
    constructor() {
        const service = axios.create({
            baseURL: baseURL
        });
        this.service = service;
    }

    get(path, callback) {
        return this.service.get(path).then(
            (response) => callback(response.status, response.data)
        );
    }

    post(path, payload, callback) {
        return this.service.post(path, payload).then(
            (response) => callback(response.status, response.data)
        );
    }

    put(path, payload, callback) {
        return this.service.put(path, payload).then(
            (response) => callback(response.status, response.data)
        );
    }

    delete(path, callback) {
        return this.service.delete(path).then(
            (response) => callback(response.status, response.data)
        );
    }
}

export default Service;