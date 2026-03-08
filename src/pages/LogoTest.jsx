import logoDark from '../assets/images/logo_blue.png';
import logoLight from '../assets/images/logo_light.png';
import logoBlue from '../assets/images/logo_blue.png';

export default function LogoTest() {
    return (
        <div className="p-20 space-y-20 bg-gray-500">
            <div className="bg-white p-10">
                <h2 className="text-black mb-4">On White Background:</h2>
                <div className="flex gap-10">
                    <div><img src={logoDark} className="h-20" /> <p className="text-black">logo_dark</p></div>
                    <div><img src={logoLight} className="h-20" /> <p className="text-black">logo_light</p></div>
                    <div><img src={logoBlue} className="h-20" /> <p className="text-black">logo_blue</p></div>
                </div>
            </div>
            <div className="bg-black p-10">
                <h2 className="text-white mb-4">On Black Background:</h2>
                <div className="flex gap-10">
                    <div><img src={logoDark} className="h-20" /> <p className="text-white">logo_dark</p></div>
                    <div><img src={logoLight} className="h-20" /> <p className="text-white">logo_light</p></div>
                    <div><img src={logoBlue} className="h-20" /> <p className="text-white">logo_blue</p></div>
                </div>
            </div>
        </div>
    )
}
