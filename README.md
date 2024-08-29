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

### Passos para Rodar o Frontend

1. Clone o repositório:

   ```bash
   git clone https://github.com/agleicesousa/login-geracao-tech.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd login-cover
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Abra o navegador e acesse:

   ```
   http://localhost:3000
   ```

### Passos para Rodar o Backend PHP

1. **Instale um Servidor PHP:** Se ainda não tiver, instale um servidor local como [XAMPP](https://www.apachefriends.org/index.html), [MAMP](https://www.mamp.info/), ou [WAMP](https://www.wampserver.com/).

2. **Coloque o Código PHP no Diretório Correto:**
   - Para XAMPP, coloque o código PHP no diretório `htdocs` (por exemplo, `C:\xampp\htdocs\login-cover`).
   - Para MAMP, coloque o código PHP no diretório `htdocs` (por exemplo, `/Applications/MAMP/htdocs/login-geracao-tech`).
   - Para WAMP, coloque o código PHP na pasta `www` (por exemplo, `C:\wamp64\www\login-geracao-tech`).

3. **Inicie o Servidor PHP:**
   - Abra o painel de controle do servidor PHP (XAMPP, MAMP ou WAMP) e inicie o Apache.

4. **Configure a URL do Backend no Frontend:** Certifique-se de que o URL no formulário de login no frontend aponte para o endpoint correto do backend. Por exemplo, para XAMPP:

   ```html
   <form className="text-center" method="post" action="http://localhost/login-geracao-tech/moodle_login.php">
   ```

5. **Teste a Integração:** Acesse o frontend em `http://localhost:3000` e verifique se o formulário de login se comunica corretamente com o backend PHP.

### Modo de Produção (Opcional)

Para criar uma versão otimizada do aplicativo para produção, rode:

```bash
npm run build
```

Isso gerará uma pasta `build` com todos os arquivos otimizados. Você pode servir essa pasta usando um servidor web ou uma ferramenta como `serve`:

```bash
npm install -g serve
serve -s build
```

A aplicação estará disponível em um endereço como `http://localhost:5000`.

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
