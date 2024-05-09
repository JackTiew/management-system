import axios from "axios";
import Security from "./Security";

export default class HttpRequest {

    async get(url, params) {
        let headers = {
            'Content-Type': 'application/json',
        };

        return axios.get(url, {
            headers: headers,
            params
        });
    }

    async post(url, params) {
        if (this.isAAD) {
            await new Security().renewToken();
        }

        let headers = {
            'Content-Type': 'application/json',
        };

        return axios.post(url, params,
            { headers: headers });
    }

    async put(url, params) {
        if (this.isAAD) {
            await new Security().renewToken();
        }

        let headers = {
            'Content-Type': 'application/json',
        };

        return axios.put(url, params,
            { headers: headers });
    }
}
