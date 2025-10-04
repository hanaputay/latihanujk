import axios from 'axios';

const API_BASE = 'http://localhost:3000/api/product';

const productService = {
  getAll: async () => {
    const res = await axios.get(API_BASE);
    return res.data;
  },
  getById: async (id) => {
    const res = await axios.get(`${API_BASE}/${id}`);
    return res.data;
  },
  create: async (payload) => {
    const res = await axios.post(API_BASE, payload);
    return res.data;
  },
  update: async (id, payload) => {
    const res = await axios.put(`${API_BASE}/${id}`, payload);
    return res.data;
  },
  remove: async (id) => {
    const res = await axios.delete(`${API_BASE}/${id}`);
    return res.data;
  }
};

export default productService;
