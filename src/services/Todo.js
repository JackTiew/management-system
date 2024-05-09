import ServiceBase from './ServiceBase';

class Todo extends ServiceBase {
    constructor() {
        super(process.env.REACT_APP_API_ENDPOINT);
    }

    async getList() {
        try {
            let res = await this.request.get(`${this.API_ENDPOINT}/todos`);

            return res.data;
        } catch (error) {
            throw new Error(this.security.getErrorMessage(error));
        }
    }
}

export default Todo;