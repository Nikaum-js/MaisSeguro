import { Navbar } from "./components/Navbar";
import { Presentation } from "./components/Presentation";
import ImageSlider from './components/Slider/ImageSlider';
import { SliderData } from './components/Slider/SliderData';

function App() {
  return (
  <>
    <Navbar />
    <ImageSlider slides={SliderData} />
    <Presentation />
  </>
  );
}

export default App;
