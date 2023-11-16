import Header from "./Header";
import Hero from "./HeroSection";
import ServicesSection from "./CloudSolutions";
import AboutMeSection from "./AboutMeSection";
import CloudFeatures from "./CloudFeatures";
import CloudAdvantagesDisadvantages from "./CloudAdvantagesDisadvantages";
import CodeIaasExample from "./CodeIaasExample";

function App() {
    return (
        <div>
            <Header/>
            <Hero/>
            <AboutMeSection/>
            <ServicesSection/>
            <CloudFeatures/>
            <CloudAdvantagesDisadvantages/>
            <CodeIaasExample/>
        </div>
    );
}

export default App;
