import Header from "./Header";
import Hero from "./HeroSection";
import ServicesSection from "./CloudSolutions";
import AboutMeSection from "./AboutMeSection";
import CloudFeatures from "./CloudFeatures";
import CloudAdvantagesDisadvantages from "./CloudAdvantagesDisadvantages";

function App() {
    return (
        <div>
            <Header/>
            <Hero/>
            <AboutMeSection/>
            <ServicesSection/>
            <CloudFeatures/>
            <CloudAdvantagesDisadvantages/>
        </div>
    );
}

export default App;
