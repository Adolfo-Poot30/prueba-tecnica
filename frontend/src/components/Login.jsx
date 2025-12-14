import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import "./Login.css"; 

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  // Estado inicial con datos de prueba
  const [formData, setFormData] = useState({
    username: "emilys",
    password: "emilyspass",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        <div className="login-header">
          <h2>Bienvenido</h2>
          <p>Ingresa tus credenciales para continuar</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Usuario</label>
            <input
              id="username"
              name="username"
              type="text"
              className="form-input"
              placeholder="Nombre de usuario"
              value={username}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-input"
              placeholder="Contraseña"
              value={password}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>

          {error && (
            <div className="error-message">
              <strong>Error:</strong> {error}
            </div>
          )}

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? (
              <>
                <div className="spinner"></div>
                Cargando...
              </>
            ) : (
              "Iniciar sesión"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
