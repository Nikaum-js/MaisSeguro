import Car from '../../assets/car.svg'

import './styles.scss';

export function Presentation() {
  return (
    <main>
      <section>
        <h1>Tenha seus <span>benefícios</span> na palma de sua mão!</h1>
        <p>Tenha seus benefícios na palma de sua mão! A Mais Proteção é uma associação que preza pela assistência transparente, eficaz e ágil garantindo benefícios, maior segurança e conforto aos seus associados. Possuímos a pretensão de nos consolidarmos em todo território nordestino proporcionando o bem estar e a melhoria da qualidade de vida.</p>
      </section>
    
    <figure>
      <img id="home" src={Car} alt="imagem medico" />
    </figure>
  </main>
  );
}