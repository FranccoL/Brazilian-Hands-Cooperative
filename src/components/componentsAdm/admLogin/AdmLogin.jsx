import "./AdmLogin.css";
import Logo from "../../../assets/logobrazil.svg";

function AdmLogin() {
  return (
    <main className="containerLogin">
      <div className="contentLogo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="contentInput">
       <form className="form">
        <label htmlFor="login">Login</label>
        <input 
        type="email" 
        name="" 
        id="login"
        placeholder="E-mail"
         />
         <button>Enviar</button>
       </form>
      </div>
    </main>
  );
}

export default AdmLogin;
