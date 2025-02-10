import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuhtContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "../assets/CSS/style.css";
import bgImg from "../assets/IMG/bg.jpg";
import logoImg from "../assets/IMG/logo.png";

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmits = handleSubmit((data) => {
    signin(data);
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="container">
      {/* Columna izquierda */}
      <div className="left">
        <img src={bgImg} alt="Fondo" />
      </div>

      {/* Columna derecha con formulario */}
      <div className="right">
        {/* Mensajes de error */}
        {signinErrors.map((error, i) => (
          <div className="msg__error" key={i}>{error}</div>
        ))}

        {/* Título */}
        <h1 className="login__title">Inicio Sesión</h1>
        <p className="login__subtitle">Por favor ingresa los datos requeridos</p>

        {/* Formulario */}
        <form onSubmit={onSubmits}>
          {/* Campo de correo */}
          {errors.email && <p className="msg__error">Se requiere un correo electrónico</p>}
          <input type="email" {...register("email", { required: true })} className="login__input" placeholder="Correo electrónico" />
          
          {/* Campo de contraseña */}
          {errors.password && <p className="msg__error">Se requiere una contraseña</p>}
          <div className="input-container">
            <input type={showPassword ? "text" : "password"} {...register("password", { required: true })} className="login__input" placeholder="Contraseña" />
            <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} pass-icon`} onClick={togglePasswordVisibility}></i>
          </div>

          <input className="login__check" type="checkbox" name="logued" id="logued" defaultChecked />
          <label className="login__subtitle" htmlFor="logued">Mantenerse logueado</label>

          {/* Opciones adicionales */}
          <p className="login__subtitle login__subtitle--act">¿Olvidaste tu contraseña?</p>

          {/* Botón de envío */}
          <button className="login__button" type="submit">Iniciar Sesión</button>
        </form>

        {/* Registro */}
        <p className="login__subtitle">¿No tienes cuenta? <Link to="/register" className="login__subtitle--act"><b>Regístrate</b></Link></p>
      </div>

      {/* Logo */}
      <img className="logo" src={logoImg} alt="Logo" />
    </main>
  );
}

export default LoginPage;
