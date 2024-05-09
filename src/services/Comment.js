import ServiceBase from './ServiceBase';

class Comment extends ServiceBase {
    constructor() {
        super(process.env.REACT_APP_API_ENDPOINT);
    }

    async getList(pageNumber, pageSize) {
        try {
            let res = await this.request.get(`${this.API_ENDPOINT}/comments`, { "_page": pageNumber, "_limit": pageSize});

            return res.data;
        } catch (error) {
            throw new Error(this.security.getErrorMessage(error));
        }
    }

    async get(id) {
        try {
            let res = await this.request.get(`${this.API_ENDPOINT}/comments/${id}`);

            return res.data;
        } catch (error) {
            throw new Error(this.security.getErrorMessage(error));
        }
    }

    async getByPostId(postId) {
        try {
            let res = await this.request.get(`${this.API_ENDPOINT}/comments`, { postId } );

            return res.data;
        } catch (error) {
            throw new Error(this.security.getErrorMessage(error));
        }
    }
}

export default Comment;