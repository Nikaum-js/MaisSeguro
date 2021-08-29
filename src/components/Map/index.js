import './styles.scss'

export function Map() {
  return(
    <div className="map">
      <iframe allowfullscreen width="40%" height="400px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.0637717842774!2d-34.84403878478528!3d-7.118608594859486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd49b5901fb5%3A0x2bddbfee07f020d9!2sAv.%20Sen.%20Ruy%20Carneiro%2C%20201%20-%20Brisamar%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058086-100!5e0!3m2!1spt-BR!2sbr!4v1630196958420!5m2!1spt-BR!2sbr" />
    </div>
  );
}