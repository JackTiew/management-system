import HttpRequest from '../libraries/HttpRequest';
import Security from '../libraries/Security';

class ServiceBase {
    req = new HttpRequest();
    sec = new Security();

    constructor(endPoint) {
        this.API_ENDPOINT = endPoint;
    }

    get API_ENDPOINT() {
        return this.apiEndpoint;
    }

    set API_ENDPOINT(endPoint) {
        this.apiEndpoint = endPoint;
    }

    get request() {
        return this.req;
    }

    get security() {
        return this.sec;
    }
}

export default ServiceBase;