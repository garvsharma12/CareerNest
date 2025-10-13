import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import Footer from "../LandingPage/Footer";
import Job from "../LandingPage/Job";
import JobCategory from "../LandingPage/JobCategory";
import Reviews from "../LandingPage/Reviews";
import Working from "../LandingPage/Working";
const HomePage = () => {
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-[poppins]">
            <Job/>
            <Companies/>
            <JobCategory/>
            <Working/>
            <Reviews/>
        </div>
    )
}
export default HomePage;