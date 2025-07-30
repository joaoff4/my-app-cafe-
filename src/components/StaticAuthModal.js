import React, { useState } from "react";

const StaticAuthModal = ({ onClose, showMessage }) => {
  const [isLogin, setIsLogin] = useState(true); // Controla se é login ou cadastro
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [segundoNome, setSegundoNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //Controla a visibilidade das senhas
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  // Esta função simula o envio do formulário, mas sem lógica real de autenticação
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o recarregamento da página

    if (isLogin) {
      showMessage(`Tentativa de Login para: ${email}`);
      console.log("Login Estático:", { email, password });
    } else {
      // Lógica para o cadastro
      if (password !== passwordConfirm) {
        showMessage("As senhas não coincidem!", "error"); // Exibe mensagem de erro
        console.log("Erro de Cadastro Estático: Senhas não coincidem");
        return; // Impede o envio se as senhas não coincidirem
      }
      showMessage(`Tentativa de Cadastro para: ${email}`);
      console.log("Cadastro Estático:", {
        primeiroNome,
        segundoNome,
        email,
        password,
        passwordConfirm,
      });
    }
    // Aqui você poderia adicionar lógica para fechar o modal ou limpar os campos
    // onClose(); // Descomente para fechar o modal após simular o envio
    setPrimeiroNome(""); // Limpa o campo de primeiro nome
    setSegundoNome(""); // Limpa o campo de segundo nome
    setEmail("");
    setPassword("");
    setPasswordConfirm(""); // Limpa o campo de confirmação também
    setShowPassword(false); // Reseta a visibilidade da senha
    setShowPasswordConfirm(false); // Reseta a visibilidade da confirmação de senha
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal-content">
        {/* Botão para fechar o modal */}
        <button onClick={onClose} className="auth-modal-close-button">
          &times;
        </button>

        {/* Título do modal, alternando entre Login e Cadastro */}
        <h2 className="auth-modal-title">
          {isLogin ? "Login" : "Cadastre-se"}
        </h2>

        {/* Formulário de autenticação estático */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Campos de primeiro e segundo nome, exibidos apenas se NÃO for login */}
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="primeiroNome">Primeiro Nome:</label>
                <input
                  type="text"
                  id="primeiroNome"
                  value={primeiroNome}
                  onChange={(e) => setPrimeiroNome(e.target.value)}
                  required
                  className="auth-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="segundoNome">Segundo Nome:</label>
                <input
                  type="text"
                  id="segundoNome"
                  value={segundoNome}
                  onChange={(e) => setSegundoNome(e.target.value)}
                  required
                  className="auth-input"
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="auth-input"
            />
          </div>

          {/* CAMPO DE SENHA: Adicionado ícone de olho */}
          <div className="form-group password-group">
            {" "}
            {/* Adicionada classe 'password-group' para estilização */}
            <label htmlFor="password">Senha:</label>
            <input
              type={showPassword ? "text" : "password"} // Alterna o tipo do input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="auth-input"
            />
            <button
              type="button" // Importante: para não submeter o formulário
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-password-visibility"
              title={showPassword ? "Esconder senha" : "Mostrar senha"}
            >
              {showPassword ? (
                // Ícone de olho aberto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="eye-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                // Ícone de olho fechado
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="eye-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12c0 2.923 1.354 5.686 3.725 7.473M9.5 12c0 1.5.5 3 2.5 3s2.5-1.5 2.5-3-1.5-3-2.5-3-2.5 1.5-2.5 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.02 8.223A10.477 10.477 0 0122.066 12c0 2.923-1.354 5.686-3.725 7.473M12 15a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* CAMPO DE CONFIRMAÇÃO DE SENHA: Adicionado ícone de olho */}
          {!isLogin && (
            <div className="form-group password-group">
              {" "}
              {/* Adicionada classe 'password-group' para estilização */}
              <label htmlFor="passwordConfirm">Confirmar Senha:</label>
              <input
                type={showPasswordConfirm ? "text" : "password"} // Alterna o tipo do input
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
                className="auth-input"
              />
              <button
                type="button" // Importante: para não submeter o formulário
                onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                className="toggle-password-visibility"
                title={showPasswordConfirm ? "Esconder senha" : "Mostrar senha"}
              >
                {showPasswordConfirm ? (
                  // Ícone de olho aberto
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="eye-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  // Ícone de olho fechado
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="eye-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12c0 2.923 1.354 5.686 3.725 7.473M9.5 12c0 1.5.5 3 2.5 3s2.5-1.5 2.5-3-1.5-3-2.5-3-2.5 1.5-2.5 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.02 8.223A10.477 10.477 0 0122.066 12c0 2.923-1.354 5.686-3.725 7.473M12 15a3 3 0 100-6 3 3 0 000 6z"
                    />
                  </svg>
                )}
              </button>
            </div>
          )}

          <button type="submit" className="auth-submit-button">
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>
        </form>

        {/* Botão para alternar entre Login e Cadastro */}
        <p className="auth-toggle-text">
          {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setPrimeiroNome(""); // Limpa o primeiro nome ao alternar
              setSegundoNome(""); // Limpa o segundo nome ao alternar
              setEmail(""); // Limpa os campos ao alternar
              setPassword("");
              setPasswordConfirm(""); // Limpa a confirmação de senha
              setShowPassword(false); // Reseta a visibilidade da senha
              setShowPasswordConfirm(false); // Reseta a visibilidade da confirmação de senha
            }}
            className="auth-toggle-button"
          >
            {isLogin ? "Cadastre-se" : "Faça Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default StaticAuthModal;
