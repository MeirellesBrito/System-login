// src/paginas/Tela_Login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Substituímos 'useHistory' por 'useNavigate'
import {api} from '../../components/api'; // Ajuste o caminho da API, conforme necessário

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // 'useNavigate' substitui o 'useHistory'

  const handleLogin = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    setLoading(true); // Ativa o estado de carregamento
    setError(''); // Limpa o erro ao tentar novo login
  
    try {
      // Envia os dados de login para a API com as chaves 'login' e 'senha'
      const response = await api.post('/auth/login', { login: username, senha: password });
      
      // Verifica se a resposta contém o token
      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token); // Armazena o token no localStorage
        
  
        // Redireciona o usuário para a página inicial ou qualquer outra página
        navigate('/home'); // Substitua '/home' pela rota desejada
      } else {
        setError('Token não encontrado na resposta da API');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setError('Usuário ou senha incorretos. Tente novamente.');
    } finally {
      setLoading(false); // Desativa o estado de carregamento
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={loading}
          >
            {loading ? 'Carregando...' : 'Entrar'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Não tem uma conta? <a href="/formulario" className="text-blue-600 hover:text-blue-800">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
