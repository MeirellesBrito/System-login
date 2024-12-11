import axios from 'axios';

// Base da URL da API
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Pega a URL do .env
});

// Função para realizar requisições com o token automaticamente
const requestWithToken = async (method, url, data = null) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Você não está autenticado.');

  try {
    const headers = { Authorization: `Bearer ${token}` };
    const response = await api({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

// Interceptador para adicionar token nas requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
  }
);

// Interceptador para tratar erro na resposta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Sessão expirada. Realize login novamente.');
    }
    console.error('Erro na resposta da API:', error.response || error.message);
    return Promise.reject(error);
  }
);

export { api, requestWithToken };
