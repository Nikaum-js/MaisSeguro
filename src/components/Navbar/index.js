import Logo from '../../assets/logo.svg'

import './styles.css'

export function Navbar() {
  return (
    <nav>
      <img src={Logo} />  
      <ul>
        <li id="Home">Home</li>
        <li>Para você</li>
        <li>Para negócios</li>
        <li>Benefícios</li>
        <li>Quem somos</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
}