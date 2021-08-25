import { Navbar } from "./components/Navbar";
import { Presentation } from "./components/Presentation";
import { Services } from "./components/Services";
import ImageSlider from './components/Slider/ImageSlider';
import { SliderData } from './components/Slider/SliderData';

function App() {
  return (
  <>
    <Navbar />
    <ImageSlider slides={SliderData} />
    <Presentation />
    <Services />
  </>
  );
}

export default App;
