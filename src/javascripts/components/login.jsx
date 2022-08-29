import React from 'react';

const Login = ({ setLoggedIn, setNome, nome }) => {
  return (
    <>
            <form className="loginPage__form" onSubmit={(event) => {
                event.preventDefault();
                setLoggedIn(true);
              }}>

                <div className="loginPage__contentInput">
                  <label for="name" className="loginPage__contentInput-label">Digite seu Nome:</label>
                  <input
                    id="name"
                    name="name"
                    className="loginPage__contentInput-input"
                    type="text"
                    required
                    placeholder="Nome"
                    value={nome}
                    onChange={(event) => {
                      setNome(event.target.value);
                    }}
                  />
                  
                  <button type="submit" className="loginPage__contentInput-button">Ver Cartas</button>
                </div>

              </form>
    </>
  )
}

export default Login;