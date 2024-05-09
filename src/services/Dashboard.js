import ServiceBase from './ServiceBase';

class Dashboard extends ServiceBase {
    constructor() {
        super(process.env.REACT_APP_API_ENDPOINT);
    }

    async getList() {
        try {
            let res = await this.request.get(`${this.API_ENDPOINT}/dashboard`);

            return res.data;
        } catch (error) {
            throw new Error(this.security.getErrorMessage(error));
        }
    }
}

export default Dashboard;