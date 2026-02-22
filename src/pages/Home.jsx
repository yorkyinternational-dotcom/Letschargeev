import Hero from '../components/sections/Hero';
import StatsSection from '../components/sections/StatsSection';
import SustainabilitySection from '../components/sections/SustainabilitySection';
import SolutionsSection from '../components/sections/SolutionsSection';
import HardwareSection from '../components/sections/HardwareSection';
import SavingsCalculator from '../components/sections/SavingsCalculator';
import MapSection from '../components/sections/MapSection';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <StatsSection />
            <div id="solutions">
                <SolutionsSection />
            </div>
            <SustainabilitySection />
            <div id="products">
                <HardwareSection />
            </div>
            <div id="calculator">
                <SavingsCalculator />
            </div>
            <MapSection />
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
