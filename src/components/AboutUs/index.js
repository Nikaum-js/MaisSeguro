import Team from '../../assets/team.svg'

import './styles.scss'

export function AboutUs() {
  return (
    <div className="content">
      <div className="Imagem">
        <img src={Team} alt="time" />
      </div>
    <div className="About-connect">
      <h1><span>A MAIS Proteção</span> é uma associação que preza pela assistência transparente, eficaz e ágil.</h1>
      <p>Possuímos a pretensão de nos consolidarmos em todo território nordestino garantindo o bem estar e a melhoria da qualidade de vida dos nossos associados.</p>
    </div>
  </div>
  );
}