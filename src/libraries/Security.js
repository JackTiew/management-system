export default class Security {
    getErrorMessage(error) {
        if (error.response) {
            if (error.response.status === 400 || error.response.status === 401 || error.response.status === 403) {
                return error.response.data.error.message;
            } else {
                return '' + error;
            }
        } else {
            return '' + error;
        }
    }
}