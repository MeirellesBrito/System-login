import React, { useState, useEffect } from "react";
import { requestWithToken } from "../../components/api"; // Agora usamos a função genérica

export const Home = () => {
  const [usuarios, setUsuarios] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para carregar os dados dos usuários
  const fetchUsuarios = async () => {
    setLoading(true);
    setError(null);

    try {
      // Usando a função genérica para buscar os dados com token
      const data = await requestWithToken('get', '/usuarios');
      setUsuarios(data);
    } catch (err) {
      console.error("Erro ao carregar os usuários:", err);
      setError("Erro ao carregar os usuários. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-semibold mb-6">Usuários Cadastrados</h1>

      {loading ? (
        <div className="text-lg text-blue-500">Carregando...</div>
      ) : error ? (
        <div className="text-lg text-red-500">{error}</div>
      ) : (
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {usuarios.map((usuario) => (
              <div
                key={usuario.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {usuario.nome} {usuario.sobreNome}
                </h2>
                <p className="text-gray-600 mt-2">
                  Status: {usuario.status ? "Ativo" : "Inativo"}
                </p>
                <p className="text-gray-600">
                  Criado em: {new Date(usuario.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-600">
                  Atualizado em:{" "}
                  {new Date(usuario.updatedAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
