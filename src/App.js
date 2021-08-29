import { AboutUs } from "./components/AboutUs";
import { Navbar } from "./components/Navbar";
import { Presentation } from "./components/Presentation";
import { Services } from "./components/Services";

import ImageSlider from './components/Slider/ImageSlider';
import { SliderData } from './components/Slider/SliderData';

import { Footer } from "./components/Footer";
import { Benefits } from "./components/Benefits";
import { Map } from "./components/Map";

function App() {
  return (
  <>
    <Navbar />
    <ImageSlider slides={SliderData} />
    <Presentation />
    <Services />
    <Benefits />
    <Map />
    <AboutUs />
    <Footer />
  </>
  );
}

export default App;
