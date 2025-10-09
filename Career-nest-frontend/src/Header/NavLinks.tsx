import { Link } from "react-router-dom";

const NavLinks = () => {
    const links = [
        { name: "Find Job", url: "/find-jobs" },
        { name: "Find Talent", url: "/find-talent" },
        { name: "Upload Jobs", url: "/upload-jobs" },
        { name: "About Us", url: "/about-us" }
    ]
    return (
        <div className="flex gap-5">
            {
            links.map((link, index) =>
                <Link key={index} to={link.url}>{link.name}</Link>
            )}
        </div>
    );
};

export default NavLinks;