import ServiceBase from './ServiceBase';

class Post extends ServiceBase {
    constructor() {
        super(process.env.REACT_APP_API_ENDPOINT);
    }

    async getList(pageNumber, pageSize) {
        try {
            let res = await this.request.get(`${this.API_ENDPOINT}/posts`, { "_page": pageNumber, "_limit": pageSize});

            return res.data;
        } catch (error) {
            throw new Error(this.security.getErrorMessage(error));
        }
    }

    async get(id) {
        try {
            let res = await this.request.get(`${this.API_ENDPOINT}/posts/${id}`);

            return res.data;
        } catch (error) {
            throw new Error(this.security.getErrorMessage(error));
        }
    }
}

export default Post;