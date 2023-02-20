import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

class API {
    async getAllProducts() {
        return await axios.get('/api/products');
    }

    async getOneProduct(productID) {
        return await axios.get(`/api/products/${productID}`);
    }
}

export default new API();
