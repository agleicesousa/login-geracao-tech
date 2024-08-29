# Login | Geração Tech

Este projeto é uma página de login estilizada usando React, Tailwind CSS e FontAwesome. A página de login inclui um vídeo de fundo, campos de entrada personalizados e um botão para lembrar o usuário.

## Visão Geral

A página de login foi projetada para fornecer uma experiência de usuário envolvente e moderna. Ela utiliza um vídeo de fundo e permite que os usuários alternem o áudio do vídeo. Além disso, há um formulário de login que permite ao usuário inserir o CPF e a senha, e uma opção para lembrar as credenciais do usuário.

## Funcionalidades

- **Vídeo de Fundo:** Um vídeo de fundo que cobre a seção direita da página.
- **Controle de Áudio:** Botão para alternar o som do vídeo de fundo.
- **Formulário de Login:** Campos para CPF e senha, com validação de entrada.
- **Lembrar Credenciais:** Checkbox para lembrar as credenciais do usuário.
- **Responsivo:** Layout responsivo que se adapta a diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construir interfaces de usuário.
- **Tailwind CSS:** Framework CSS utilitário para estilização rápida.
- **FontAwesome:** Biblioteca de ícones para o botão de controle de áudio.
- **PHP:** Utilizado para a lógica de login simulada no servidor.

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn
- Servidor PHP (opcional para a simulação de login)

### Passos para Rodar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/login-cover.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd login-cover
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

   ou

   ```bash
   yarn start
   ```

5. Abra o navegador e acesse:

   ```
   http://localhost:3000
   ```

6. Para rodar a simulação de login com PHP, certifique-se de ter um servidor PHP rodando e aponte o formulário para o script `moodle_login.php`.

## Estrutura do Projeto

- `src/`: Contém o código-fonte do projeto.
  - `components/`: Componentes React utilizados na página.
  - `assets/`: Imagens, vídeos e outros recursos estáticos.
- `public/`: Arquivos públicos que não são processados pelo Webpack.
- `index.css`: Arquivo principal de estilos que inclui Tailwind CSS.

## Personalização

- **Estilos:** Modifique o arquivo `index.css` para personalizar os estilos.
- **Vídeo de Fundo:** Substitua o arquivo `background.mp4` na pasta `assets/videos` para alterar o vídeo de fundo.
- **Logo:** Troque as imagens `logo-padrao.png` e `logo-branca.png` na pasta `assets/images` para alterar as logos exibidas.

## Licença

Este projeto é licenciado sob os termos da [Licença MIT](./LICENSE).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um PR ou relatar problemas no repositório.

## Autor

- **Agleice Sousa:** [LinkedIn](https://www.linkedin.com/in/agleice-sousa/)