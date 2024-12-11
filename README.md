# Guia de Configuração do Projeto com Sequelize e Node.js

![Imagem do Diagrama de Banco de Dados](image.png)

## Visão Geral do Projeto

Este projeto foi desenvolvido com o objetivo de treinar e demonstrar minhas habilidades no **backend** utilizando **Node.js** com **Express**, além de utilizar **Sequelize** para o gerenciamento de um banco de dados **MySQL**. O foco principal deste projeto é a criação de uma aplicação robusta que envolva a manipulação de dados no banco e a integração com um sistema backend eficiente.

## Tecnologias e Dependências

O projeto foi desenvolvido utilizando uma combinação de **Node.js**, **React.js**, e **MySQL** com a ajuda de diversas bibliotecas para facilitar o desenvolvimento e garantir a segurança e eficiência do sistema. A seguir estão as principais dependências utilizadas no **backend** e no **frontend**:

### Backend

O backend foi desenvolvido utilizando **Node.js** com o framework **Express**. Para gerenciar o banco de dados e garantir a segurança das informações, foram usadas as seguintes dependências:

- **bcryptjs**: Usado para **criptografar senhas** de usuários antes de armazená-las no banco de dados, garantindo segurança.
- **cors**: Configura o **CORS (Cross-Origin Resource Sharing)** para permitir que o frontend acesse o backend de diferentes origens.
- **dotenv**: Permite o uso de variáveis de ambiente, mantendo credenciais e configurações sensíveis de forma segura.
- **express**: O framework **Express** foi utilizado para estruturar o servidor e as rotas do backend.
- **jsonwebtoken**: Usado para a criação e verificação de **tokens JWT**, que são fundamentais para autenticação de usuários.
- **mysql2**: Cliente para se comunicar com o banco de dados **MySQL**.
- **sequelize**: ORM utilizado para facilitar a comunicação com o banco de dados MySQL e para gerenciar migrações, associações e consultas de forma mais eficiente.
- **nodemon**: Utilizado para reiniciar automaticamente o servidor durante o desenvolvimento, permitindo uma experiência de desenvolvimento mais fluida.
- **uuid**: Gerador de **IDs únicos**, útil para criar identificadores exclusivos para registros no banco de dados.

### Frontend

O frontend foi desenvolvido utilizando **React.js** com o **TailwindCSS** para uma estilização rápida e eficiente. As principais dependências incluem:

- **react**: A principal biblioteca para construção da interface de usuário.
- **react-router-dom**: Utilizado para gerenciar a navegação e o roteamento entre diferentes páginas no React.
- **tailwindcss**: Framework CSS que fornece classes utilitárias para estilização rápida e responsiva.
- **axios**: Cliente HTTP para realizar requisições ao backend, como login e registro de usuários.
- **dotenv**: Utilizado também no frontend para lidar com variáveis de ambiente, facilitando a configuração da aplicação.
- **jwt-decode**: Usado para decodificar os **tokens JWT** recebidos do backend, permitindo verificar se o usuário está autenticado.
- **@heroicons/react** e **@headlessui/react**: Bibliotecas de **componentes de UI** que oferecem ícones e componentes acessíveis, como modais e menus, para a construção de interfaces interativas e de fácil usabilidade.

Essas dependências garantem uma boa estrutura de desenvolvimento tanto no **backend** quanto no **frontend**, proporcionando segurança, eficiência e uma boa experiência para o usuário final.


Além disso, o projeto implementa **criptografia de senhas** para garantir a segurança dos dados sensíveis no banco de dados. A senha é armazenada de forma segura utilizando **bcryptjs**, garantindo que, mesmo em caso de acesso indevido ao banco, as senhas não possam ser lidas diretamente.

### Exemplo de Banco de Dados com Senha Criptografada

O projeto implementa a criptografia de senhas utilizando a biblioteca **bcryptjs**. Ao registrar um usuário, a senha é criptografada antes de ser armazenada no banco de dados. Aqui está um exemplo de como a senha é armazenada de forma segura:

![Imagem da Criptografia da Senha no Banco de Dados](image-1.png)

Esse método garante que, mesmo se alguém acessar o banco de dados, as senhas estarão em formato criptografado e não poderão ser lidas diretamente.

---

## Iniciando o Backend (Node.js com Express)

O backend foi desenvolvido utilizando **Node.js** com o framework **Express**. Para iniciar o servidor:

1. Inicie o servidor, que estará rodando na porta configurada (geralmente `3000`).
2. O **Nodemon** foi configurado para reiniciar automaticamente o servidor durante o desenvolvimento, permitindo que você veja as alterações imediatamente sem a necessidade de reiniciar o servidor manualmente.

---

## Iniciando o Frontend (React.js com TailwindCSS)

O frontend foi desenvolvido utilizando **React.js** e estilizado com **TailwindCSS**. Para iniciar o servidor de desenvolvimento:

1. Inicie o frontend, que será acessível no navegador em `http://localhost:3001`.
2. O **TailwindCSS** foi integrado ao projeto para permitir um estilo rápido e eficiente dos componentes utilizando classes utilitárias.

---

## Iniciando o Banco de Dados (MySQL com Sequelize)

O banco de dados utilizado é o **MySQL**, e o **Sequelize** é o ORM utilizado para gerenciar a comunicação entre o backend e o banco de dados. Para iniciar o banco de dados:

1. Inicie o MySQL na sua máquina local ou em um servidor. Certifique-se de que o serviço MySQL esteja ativo.
2. Configure a conexão com o banco em `config/config.js`. Ajuste as credenciais de acesso conforme necessário.
3. Execute as migrações para criar as tabelas no banco de dados.
4. (Opcional) Popule o banco de dados com dados iniciais utilizando **seeders**.

---

## Conclusão

Este projeto utiliza uma combinação de **Node.js**, **Express**, **Sequelize**, **React.js** e **TailwindCSS** para criar uma aplicação robusta com um backend eficiente e um frontend responsivo. A utilização de **bcryptjs** para criptografia de senhas é uma medida importante para garantir a segurança dos dados sensíveis no banco.

Esse projeto serve como uma demonstração das minhas habilidades no desenvolvimento backend, gerenciamento de banco de dados e integração de tecnologias modernas para construção de aplicações web.
