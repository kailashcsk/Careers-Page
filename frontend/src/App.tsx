import HeroSection from "./components/HeroSection";
import "./App.css";


function App() {
  return (
    <div className="App">
      <HeroSection
        youtubeVideoId="huzEUnNiin0"
        innovationImage="https://media.licdn.com/dms/image/v2/D4D10AQHf4-IEkEkgcg/image-shrink_1280/image-shrink_1280/0/1719104419055?e=1753236000&v=beta&t=NBhHSEKncd1H_dy8clklSLYMR6OFrq9E-CbgMYcPapQ"
        smartCitiesImage="/assets/cities.jpg"
        engineeringImage="/assets/engineering.jpg"
      />

      {/* We'll add more sections here as we build them */}
    </div>
  );
}

export default App;