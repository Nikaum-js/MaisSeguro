import Img1 from '../../assets/list1.svg'
import Img2 from '../../assets/list2.svg'
import Img3 from '../../assets/list3.svg'

import './styles.scss'

export function Services() {
  return(
  <>
  <article>
    <div className="container">
      <div className="box">
        <img src={Img3} alt="beneficio" />
        <h2>Assistência</h2>
        <p>Temos assistência 24 horas em toda a João Pessoa.</p>
      </div>
    </div>
    <div className="container">
      <div className="box">
        <img src={Img2} alt="beneficio" />
        <h2> Tenha tudo na palma das suas mãos</h2>
        <p>Tenha tudo que você precisa no nosso app.</p>
      </div>
    </div>
    <div className="container">
      <div className="box">
        <img id="aaa" src={Img1} alt="beneficio" />
        <h2>Cobertura simples</h2>
        <p>Assistência 24 horas, carro reserva, vidros, pneus.</p>
      </div>
    </div>
  </article>
  </>
  );
}