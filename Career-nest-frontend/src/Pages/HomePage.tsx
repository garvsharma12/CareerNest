import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import Job from "../LandingPage/Job";
import JobCategory from "../LandingPage/JobCategory";
import Working from "../LandingPage/Working";
const HomePage = () => {
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-[poppins]">
            <Header/>
            <Job/>
            <Companies/>
            <JobCategory/>
            <Working/>
        </div>
    )
}
export default HomePage;