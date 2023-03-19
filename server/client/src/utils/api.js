import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
axios.defaults.headers.post['Content-Type'] = 'application/json';
const API = {
    getAllProducts: async () => {
        return await api.get('/api/products');
    },
    getOneProduct: async (productID) => {
        return await api.get(`/api/products/${productID}`);
    },
};

export default API;
