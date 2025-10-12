import { footerLinks } from "../Data/Data";

const Footer = () => {
    return (
        <footer className="bg-mine-shaft-900 text-mine-shaft-100 mt-14">
            <div className="px-6 py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand / Description */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src="/Career-nest-logo.svg"
                                            alt="CareerNest logo"
                                            className="h-7 w-7 object-contain"
                                        />
                                        <div className="text-2xl font-semibold text-cerise-400">CareerNest</div>
                                    </div>
                        <p className="text-mine-shaft-300 text-sm leading-relaxed">
                            Job portal with user profiles, skill updates, certifications,
                            work experience and admin job postings.
                        </p>
                    </div>

                    {/* Link Columns */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <div className="text-lg font-semibold mb-3 text-cerise-400">
                                {section.title}
                            </div>
                            <ul className="space-y-2">
                                {section.links.map((label) => (
                                    <li key={label}>
                                        <a
                                            href="#"
                                            className="text-mine-shaft-300 hover:text-cerise-400 transition-colors"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-mine-shaft-800 px-6 py-4 text-sm text-mine-shaft-300 flex flex-col md:flex-row items-center justify-between">
                <div>&copy; {new Date().getFullYear()} CareerNest. All rights reserved.</div>
                <div>
                    Designed &amp; Developed By <span className="text-cerise-400 font-semibold">Garv Sharma</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;