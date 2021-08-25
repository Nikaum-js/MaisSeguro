import { AboutUs } from "./components/AboutUs";
import { Navbar } from "./components/Navbar";
import { Presentation } from "./components/Presentation";
import { Services } from "./components/Services";

import ImageSlider from './components/Slider/ImageSlider';
import { SliderData } from './components/Slider/SliderData';

import { SliderDataBeneficio } from './components/Slider/SliderDataBeneficio';
import ImageSliderBeneficio from './components/Slider/ImageSliderBeneficio';

function App() {
  return (
  <>
    <Navbar />
    <ImageSlider slides={SliderData} />
    <Presentation />
    <Services />
    <AboutUs />
    <ImageSliderBeneficio slides={SliderDataBeneficio} />
  </>
  );
}

export default App;
