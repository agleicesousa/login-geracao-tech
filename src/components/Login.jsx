import React, { useState, useRef } from 'react';
import logoPadrao from '../assets/images/logo-padrao.png';
import logoBranca from '../assets/images/logo-branca.png';
import loginbg from '../assets/images/loginbg.png';
import background from '../assets/videos/background.mp4';

const Login = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isRemembered, setIsRemembered] = useState(false);
    const videoRef = useRef(null);

    const handleMuteToggle = () => {
        setIsMuted(prev => {
            const newMutedState = !prev;
            if (videoRef.current) {
                videoRef.current.muted = newMutedState;
            }
            return newMutedState;
        });
    };

    const handleRememberToggle = () => {
        setIsRemembered(prev => !prev);
    };

    return (
        <div className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${loginbg})` }}>
            <div className="login-container flex bg-white bg-opacity-80 rounded-2xl shadow-lg overflow-hidden w-full max-w-[1000px] relative">
                {/* Seção Esquerda do Login */}
                <div className="login-left flex-1 p-6 sm:p-4 flex flex-col justify-center">
                    <img src={logoPadrao} alt="Logo Geração Tech" className="logo-preta w-3/4 sm:w-full mb-5 mx-auto" />
                    <h4 className="text-center text-lg font-semibold mb-5 sm:text-base">Acesso ao EAD do <strong>Geração Tech</strong></h4>
                    <p className="text-center text-base font-semibold mb-5 sm:text-sm">Preencha os seus dados abaixo.</p>
                    <form className="text-center" method="post" action="http://localhost/moodle_login.php">
                        <input type="text" id="cpf" placeholder="CPF" required maxLength="11" name="username"
                            className="w-full mb-4 p-3 border border-blue-400 rounded-full focus:outline-none focus:border-blue-600 focus:shadow-md h-12 sm:h-10"
                        />
                        <input type="password" placeholder="Senha" required maxLength="30" name="password"
                            className="w-full mb-4 p-3 border border-blue-400 rounded-full focus:outline-none focus:border-blue-600 focus:shadow-md h-12 sm:h-10"
                        />
                        <div className="mbu flex items-center justify-between mb-4">
                            <label htmlFor="rememberusername" className="flex items-center text-sm cursor-pointer">
                                <input type="checkbox" name="rememberusername" id="rememberusername" value="1" className="hidden" 
                                    checked={isRemembered}
                                    onChange={handleRememberToggle} 
                                />
                                <span className="custom-checkbox w-5 h-5 border-2 border-blue-400 rounded-full mr-2 bg-white flex items-center justify-center transition-colors">
                                    <div className={`w-3.5 h-3.5 rounded-full bg-blue-400 ${isRemembered ? 'block' : 'hidden'}`}></div>
                                </span>
                                Lembrar meu acesso
                            </label>
                            <a href="/" className="text-sm text-blue-600 underline">Esqueceu a senha?</a>
                        </div>
                        <button type="submit" 
                            className="w-full mb-5 p-3 bg-blue-600 text-white text-base font-semibold rounded-full cursor-pointer transition-colors hover:bg-blue-700">
                            Acessar
                        </button>
                    </form>
                </div>

                {/* Seção Direita do Login */}
                <div className="login-right relative hidden md:flex flex-1 items-center justify-center overflow-hidden">
                    <video ref={videoRef} autoPlay muted={isMuted} loop className="absolute inset-0 w-full h-full object-cover rounded-r-2xl opacity-60">
                        <source src={background} type="video/mp4" /> Seu navegador não suporta a tag de vídeo.
                    </video>
                    <div className="absolute inset-0 bg-blue-800 bg-opacity-50 rounded-r-2xl"></div>
                    <img src={logoBranca} alt="Logo Branca" className="logo-white absolute bottom-5 right-5" style={{ maxWidth: '170px' }}/>
                    <button
                        className="mute-button absolute bottom-5 left-5 text-2xl cursor-pointer z-10 text-white bg-transparent border-none rounded-full p-2"
                        onClick={handleMuteToggle}
                    >
                        <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;