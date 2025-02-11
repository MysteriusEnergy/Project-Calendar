import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuhtContext";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../assets/CSS/style.css";

import bgImg from "../assets/IMG/bg.jpg";
import logoImg from "../assets/IMG/logo.png";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/Matches");
  }, [isAuthenticated]);

  const onSubmits = handleSubmit(async (values) => {
    signup(values);
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="container">
      {/*Columna izquierda*/}
      <div className="left">
        <img src={bgImg} alt="Fondo" />
      </div>

      {/* Columna derecha con formulario */}
      <div className="right">
        {/* Mensajes de error */}
        {registerErrors.map((error, i) => (
          <div className="msg__error" key={i}>
            {error}
          </div>
        ))}

        {/* Título */}
        <h1 className="login__title">Registrarse</h1>
        <p className="login__subtitle">Por favor ingresa los datos requeridos</p>

        {/* Formulario */}
        <form onSubmit={onSubmits}>
          {/* Campo de nombre de usuario */}
          {errors.username && (
            <p className="msg__error">Se requiere un nombre de usuario</p>
          )}
          <input
            type="text"
            {...register("username", { required: true })}
            className="login__input"
            placeholder="Nombre de usuario"
          />

          {/* Campo de correo */}
          {errors.email && (
            <p className="msg__error">Se requiere un correo electrónico</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="login__input"
            placeholder="Correo electrónico"
          />

          {/* Campo de contraseña */}
          {errors.password && (
            <p className="msg__error">Se requiere una contraseña</p>
          )}
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              className="login__input"
              placeholder="Contraseña"
            />
            <i
              className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} pass-icon`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>

          {/* Botón de registro */}
          <button className="login__button" type="submit">
            Registrarse
          </button>
        </form>

        {/* Redirección a login */}
        <p className="login__subtitle">
          ¿Ya tienes cuenta? {" "}
          <Link to="/login" className="login__subtitle--act">
            <b>Iniciar sesión</b>
          </Link>
        </p>
      </div>

      {/* Logo */}
      <img className="logo" src={logoImg} alt="Logo" />
    </main>
  );
}

export default RegisterPage;
