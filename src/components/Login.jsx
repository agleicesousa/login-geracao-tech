import logoPadrao from '../assets/images/logo-padrao.png';
import logoBranca from '../assets/images/logo-branca.png';
import background from '../assets/videos/background.mp4';
import loginbg from '../assets/images/loginbg.png';

const Login = () => {

    return (
        <div className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${loginbg})` }}>
            <div className="login-container flex bg-white bg-opacity-80 rounded-2xl shadow-lg overflow-hidden w-4/5 max-w-[1000px] relative">
                {/* Seção Esquerda do Login */}
                <div className="login-left flex-1 p-10 lg:p-8 md:p-6 sm:p-4 flex flex-col justify-center">
                    <img src={logoPadrao} alt="Logo Geração Tech" className="logo-preta w-full mb-5" />
                    <h4 className="text-center text-xl font-semibold mb-5 md:text-lg">Acesso ao EAD do <strong>Geração Tech</strong></h4>
                    <p className="text-base font-semibold mb-5 md:text-sm">Preencha os seus dados abaixo.</p>
                    <form className="text-center" method="post" action="moodle_login.php">
                        <input type="text" id="cpf" placeholder="CPF" required maxLength="11" name="username"
                            className="w-full mb-5 p-3 border border-blue-400 rounded-full focus:outline-none focus:border-blue-600 focus:shadow-md h-12 md:h-10"
                        />
                        <input type="password" placeholder="Senha" required maxLength="30" name="password"
                            className="w-full mb-5 p-3 border border-blue-400 rounded-full focus:outline-none focus:border-blue-600 focus:shadow-md h-12 md:h-10"
                        />
                        <div className="mbu flex items-center justify-between mb-4">
                            <label htmlFor="rememberusername" className="flex items-center text-sm cursor-pointer">
                                <input type="checkbox" name="rememberusername" id="rememberusername" value="1" className="hidden" />
                                <span
                                    className="custom-checkbox w-5 h-5 border-2 border-blue-400 rounded-full mr-2 bg-white flex items-center justify-center transition-colors">
                                </span>
                                Lembrar meu acesso
                            </label>
                            <a href="/" className="text-sm text-blue-600 underline"> Esqueceu a senha?</a>
                        </div>
                        <button type="submit" className="w-full mb-5 p-3 bg-blue-600 text-white text-base font-semibold rounded-full cursor-pointer transition-colors hover:bg-blue-700">
                            Acessar
                        </button>
                    </form>
                </div>

                {/* Seção Direita do Login */}
                <div className="login-right relative flex-1 flex items-center justify-center overflow-hidden">
                    <video className="absolute inset-0 w-full h-full object-cover rounded-r-2xl opacity-60">
                        <source src={background} type="video/mp4" />
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                    <div className="absolute inset-0 bg-blue-800 bg-opacity-50 rounded-r-2xl"></div>
                    <img src={logoBranca} alt="Logo Branca" className="logo-white absolute bottom-5 right-5" style={{ maxWidth: '170px' }} />
                </div>
            </div>
        </div>
    );
};

export default Login;