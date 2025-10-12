import { testimonials } from "../Data/Data";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import Marquee from "react-fast-marquee";

const Reviews = () => {
    return (
        <div className="mt-10 md:mt-6 pb-5">
            <div className="text-4xl mb-3 font-semibold text-center text-mine-shaft-100">
                What Our <span className="text-cerise-400">CareerNest</span> Users Say
            </div>

            <div className="text-lg text-mine-shaft-300 text-center w-1/2 mx-auto mb-0">
                Hear from our satisfied users about their experience with CareerNest.
            </div>

            <div className="flex flex-col gap-8 md:gap-10 mt-10">
                <Marquee pauseOnHover={true} speed={35} gradient={false}>
                    {[...testimonials, ...testimonials].map((t, idx) => {
                        const avatarList = [
                            "avatar1.png",
                            "avatar2.png",
                            "avatar3.png",
                            "avatar.png",
                        ];
                        const avatarSrc = "/" + (avatarList[idx % avatarList.length] || "avatar.png");
                        const rating = Math.max(0, Math.min(5, Number(t.rating) || 0));
                        return (
                            <div
                                key={`${t.name}-${idx}`}
                                className="mx-4 w-72 sm:w-80 shrink-0 border border-cerise-400 rounded-xl p-4 backdrop-blur-md bg-transparent flex flex-col gap-3"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={avatarSrc}
                                        alt={t.name}
                                        className="h-12 w-12 rounded-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "/avatar.png";
                                        }}
                                    />
                                    <div className="text-mine-shaft-100 font-semibold text-base">
                                        {t.name}
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, i) =>
                                        i < rating ? (
                                            <IconStarFilled key={i} size={18} className="text-cerise-400" />
                                        ) : (
                                            <IconStar key={i} size={18} className="text-mine-shaft-600" />
                                        )
                                    )}
                                </div>
                                <div className="text-mine-shaft-300 text-sm leading-relaxed">
                                    {t.testimonial}
                                </div>
                            </div>
                        );
                    })}
                </Marquee>
            </div>
        </div>
    );
};

export default Reviews;
