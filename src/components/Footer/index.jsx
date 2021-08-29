import Logo from '../../assets/logo.svg'
import { TiSocialLinkedin, TiSocialInstagram } from "react-icons/ti";

import './styles.scss';

export function Footer() {
  return (
    <footer>
      <img src={Logo} />
      <div className="footer">
        <span>+55 11 27882-3232</span>
        <br/>
        <span>email@gmail.com</span>
      </div>
      <div className="links">
        <h2>Links</h2>
        <span><a href="#home">Home</a></span>
        <span><a>Aplicativo</a></span>
        <br/>
        <br/>
        <br/>
        <span><a>Login</a></span>
        <span><a>Cadastro</a></span>
        <div className="icon">
        </div>
      </div>
      <div className="line">
      </div>
    <div className="ending">
      <div className="social-icons">       
        <TiSocialLinkedin fontSize="24px" />
        <TiSocialInstagram fontSize="24px" />
      </div>
      <h2>© 2021 MaisSeguro. Todos direitos reservados</h2>
    </div>

    </footer>
  );
}