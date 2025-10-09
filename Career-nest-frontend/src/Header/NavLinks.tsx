import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
        { name: "Find Job", url: "/find-jobs" },
        { name: "Find Talent", url: "/find-talent" },
        { name: "Upload Jobs", url: "/upload-jobs" },
        { name: "About Us", url: "/about-us" }
    ]
    const location = useLocation();
    return (
        <div className="flex gap-5 items-center h-full text-mine-shaft-300">
            {
                            links.map((link) => (
                                <div
                                    key={link.url}
                                    className={`h-full flex items-center border-t-[3px] ${
                                        location.pathname === link.url
                                            ? "border-cerise-400 text-cerise-400"
                                            : "border-transparent"
                                    }`}
                                                >
                                                    <Link
                                                        to={link.url}
                                                        className="link-scan transition-colors duration-300 hover:cerise-400"
                                                    >
                                                        {link.name}
                                                    </Link>
                                </div>
                            ))
                        }

        </div>
    );
};

export default NavLinks;