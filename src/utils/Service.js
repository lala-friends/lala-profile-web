import HTTP from '../utils/http-common';

class Service {
    get(path, callback) {
        return HTTP.get(path).then(
            (response) => callback(response.status, response.data)
        );
    }

    post(path, payload, callback) {
        return HTTP.post(path, payload).then(
            (response) => callback(response.status, response.data)
        );
    }

    put(path, payload, callback) {
        return HTTP.put(path, payload).then(
            (response) => callback(response.status, response.data)
        );
    }

    delete(path, callback) {
        return HTTP.delete(path).then(
            (response) => callback(response.status, response.data)
        );
    }
}

export default Service;