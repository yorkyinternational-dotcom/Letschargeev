import Hero from '../components/sections/Hero';
import BusinessModel from '../components/sections/BusinessModel';
import SolutionsSection from '../components/sections/SolutionsSection';
import HardwareSection from '../components/sections/HardwareSection';
import CMSPreview from '../components/sections/CMSPreview';
import SavingsCalculator from '../components/sections/SavingsCalculator';
import SustainabilitySection from '../components/sections/SustainabilitySection';
import MapSection from '../components/sections/MapSection';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <div className="flex flex-col">
            <Hero />

            <div id="business-model">
                <BusinessModel />
            </div>

            <div id="solutions">
                <SolutionsSection />
            </div>

            <div id="hardware">
                <HardwareSection />
            </div>

            <div id="cms">
                <CMSPreview />
            </div>

            <div id="calculator">
                <SavingsCalculator />
            </div>

            <div id="sustainability">
                <SustainabilitySection />
            </div>

            <div id="locate">
                <MapSection />
            </div>

            <div id="contact">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
