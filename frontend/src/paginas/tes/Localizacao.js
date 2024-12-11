import React, { useState } from 'react';

const Localizacao = () => {
  const [erro, setErro] = useState(null);
  const [localizacao, setLocalizacao] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [ip, setIp] = useState(null);

  // Função para obter o endereço IP
  const obterIp = () => {
    fetch('https://ipinfo.io/widget/demo/189.13.165.123') // API pública do ipinfo.io sem token
      .then((res) => res.json())
      .then((dados) => {
        setIp(dados.ip); // Armazena o IP
        console.log(`IP do usuário: ${dados.ip}`); // Exibe o IP no console
      })
      .catch((erro) => console.error('Erro ao obter o IP:', erro));
  };

  // Função para obter a localização
  const obterLocalizacao = () => {
    setCarregando(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (posicao) => {
          const { latitude, longitude } = posicao.coords;
          setErro(null);
          setLocalizacao({ latitude, longitude });

          // Exibe no console a localização
          console.log(`Localização do usuário: Latitude: ${latitude}, Longitude: ${longitude}`);

          setTimeout(() => {
            setCarregando(false);
          }, 1000);
        },
        (erro) => {
          setCarregando(false);
          setErro(erro.message);
        }
      );
    } else {
      setErro('Geolocation não é suportado neste navegador.');
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">Descubra sua Localização!</h1>
        <p className="mb-6 text-lg">Clique no botão abaixo para ver sua localização e o IP.</p>

        <button
          onClick={() => { obterIp(); obterLocalizacao(); }}
          className="py-2 px-6 bg-indigo-700 hover:bg-indigo-800 rounded-full text-xl font-semibold shadow-lg transition duration-300"
        >
          {carregando ? 'Carregando...' : 'Obter Localização'}
        </button>

        {erro && (
          <div className="mt-6 text-red-500">
            <p>{erro}</p>
          </div>
        )}

        {localizacao && !carregando && (
          <div className="mt-8 text-lg">
            <h2 className="text-2xl font-semibold mb-4">Localização Atual:</h2>
            <p>Latitude: {localizacao.latitude}</p>
            <p>Longitude: {localizacao.longitude}</p>
            <a
              href={`https://www.google.com/maps?q=${localizacao.latitude},${localizacao.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Veja sua localização no Google Maps
            </a>
          </div>
        )}

        {ip && (
          <div className="mt-6 text-lg text-white">
            <h2 className="text-2xl font-semibold mb-4">Seu IP:</h2>
            <p>IP: {ip}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Localizacao;
