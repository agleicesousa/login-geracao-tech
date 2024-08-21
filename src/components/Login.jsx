import logoPadrao from '../assets/images/logo-padrao.png';
import logoBranca from '../assets/images/logo-branca.png';
import background from '../assets/videos/background.mp4';

const Login = () => {

    return (
        <div>
            <div>
                {/* Seção Esquerda do Login */}
                <div>
                    <img src={logoPadrao} alt="Logo Geração Tech" />
                    <h4>Acesso ao EAD do <strong>Geração Tech</strong></h4>
                    <p>Preencha os seus dados abaixo.</p>
                    <form method="post" action="moodle_login.php">
                        <input type="text" id="cpf" placeholder="CPF" required maxLength="11" name="username"/>
                        <input type="password" placeholder="Senha" required maxLength="30" name="password"
                        />
                        <div>
                            <label htmlFor="rememberusername">
                                <input type="checkbox" name="rememberusername" id="rememberusername" value="1"/>
                                Lembrar meu acesso
                            </label>
                            <a href="/"> Esqueceu a senha? </a>
                        </div>
                        <button type="submit"> Acessar </button>
                    </form>
                </div>

                {/* Seção Direita do Login */}
                <div>
                    <video>
                        <source src={background} type="video/mp4" />
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                    <div></div>
                    <img src={logoBranca} alt="Logo Branca"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;