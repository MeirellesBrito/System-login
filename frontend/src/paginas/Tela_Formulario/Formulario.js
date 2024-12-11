import React, { useState } from 'react';
import { requestWithToken } from "../../components/api"; // Agora usamos a função genérica

const Formulario = () => {
  // Estado para formulário de cadastro de usuário
  const [cadastroData, setCadastroData] = useState({
    nome: '',
    sobreNome: '',
    status: true
  });

  // Estado para formulário de login
  const [loginData, setLoginData] = useState({
    login: '',
    senha: '',
    usuario_id: ''
  });

  // Estado para controlar qual formulário está sendo exibido
  const [formulario, setFormulario] = useState('cadastro'); // 'cadastro' ou 'login'

  // Estado para controle de carregamento e erro
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para mudanças no formulário de cadastro
  const handleCadastroChange = (e) => {
    const { name, value } = e.target;
    setCadastroData({
      ...cadastroData,
      [name]: value
    });
  };

  // Função para submissão do cadastro de usuário
  const handleCadastroSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await requestWithToken("POST", "/usuarios", cadastroData);
      console.log("Resposta do cadastro:", response); 
      alert("Usuário cadastrado com sucesso!");
      // Após cadastrar, preenche o usuario_id do login e exibe o formulário de login
      setLoginData({ ...loginData, usuario_id: response.id });
      setFormulario('login'); // Muda para o formulário de login
    } catch (err) {
      setError("Erro ao cadastrar o usuário. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Função para mudanças no formulário de login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  // Função para submissão do login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await requestWithToken("POST", "/login", loginData);
      alert("Login realizado com sucesso!");
      localStorage.setItem("token", response.token);
      // Redireciona para a página inicial após o login
      window.location.replace('/'); // Redireciona para a home page
    } catch (err) {
      setError("Erro ao realizar login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
      {/* Exibe mensagem de erro */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Formulário de Cadastro */}
      {formulario === 'cadastro' && (
        <>
          <h2 className="text-2xl font-semibold text-center mb-6">Cadastro de Usuário</h2>
          <form onSubmit={handleCadastroSubmit}>
            <div className="mb-4">
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={cadastroData.nome}
                onChange={handleCadastroChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="sobreNome" className="block text-sm font-medium text-gray-700">Sobrenome</label>
              <input
                type="text"
                id="sobreNome"
                name="sobreNome"
                value={cadastroData.sobreNome}
                onChange={handleCadastroChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
              >
                {loading ? "Cadastrando..." : "Próximo"}
              </button>
            </div>
          </form>
        </>
      )}

      {/* Formulário de Login */}
      {formulario === 'login' && (
        <>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label htmlFor="login" className="block text-sm font-medium text-gray-700">Login</label>
              <input
                type="text"
                id="login"
                name="login"
                value={loginData.login}
                onChange={handleLoginChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={loginData.senha}
                onChange={handleLoginChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
              >
                {loading ? "Entrando..." : "Finalizar"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Formulario;
