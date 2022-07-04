import "../styles/login.css"

import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="screen">

            <div className="content-login">
                <div className="img-logo"></div>
                <div className="form-login">
                    <div className="field">
                        <input type="email" placeholder=" " />
                        <label>Correo electrónico</label>
                    </div>
                    <div className="field">
                        <input type="password" placeholder=" " />
                        <label>Contraseña</label>
                    </div>
                </div>
                <button type="submit" onClick={() => {
                    navigate("/welcome")
                }}>Ingresar</button>
                <a href="#">Olvidé mi contraseña</a>
            </div>
        </div>
    )
}

export default Login