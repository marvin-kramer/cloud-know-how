import Header from "./Header";
import Hero from "./HeroSection";
import ServicesSection from "./CloudSolutions";
import AboutMeSection from "./AboutMeSection";
import CloudFeatures from "./CloudFeatures";

function App() {
    return (
        <div>
            <Header/>
            <Hero/>
            <AboutMeSection/>
            <ServicesSection/>
            <CloudFeatures/>
        </div>
    );
}

export default App;
