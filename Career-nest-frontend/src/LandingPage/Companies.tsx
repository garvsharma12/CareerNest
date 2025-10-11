import Marquee from "react-fast-marquee";
import Header from "../Header/Header";
import Job from "./Job";
import { companies } from "../Data/Data";

const Companies = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl mb-10 font-semibold text-center text-mine-shaft-100">
                Trusted By <span className="text-cerise-400 font-semibold">1000+</span> Companies
            </div>
            <Marquee>
                {
                    companies.map((company, index) =><div key={index} className="mx-8 px-2 py-1 hover:scale-110 transition-transform">
                        <img className="h-14 " src={`/Companies/${company}.png`} alt={company} />
                    </div>)
                }
                
            </Marquee>
        </div>
    );
}
export default Companies;