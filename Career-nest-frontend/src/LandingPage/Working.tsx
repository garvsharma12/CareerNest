import { Avatar } from "@mantine/core";
import { work } from "../Data/Data";

const Working = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl mb-3 font-semibold text-center text-mine-shaft-100">
        How <span className="text-cerise-400 font-semibold">CareerNest</span> Works
      </div>

      <div className="text-lg text-mine-shaft-300 text-center w-1/2 mx-auto mb-0">
        Discover how CareerNest connects job seekers with their dream jobs and employers with top talent.
      </div>

  <div className="flex gap-5 px-3 justify-between items-center -mt-6 md:-mt-10 relative">
        <img
          className="w-[50rem]"
          src="Working/girl.png"
          alt="A girl working on a laptop"
        />
    <div className="w-36 flex flex-col items-center gap-2 border border-cerise-400 rounded-xl p-3 backdrop-blur-md bg-transparent absolute top-[30%] left-[7%] text-center">
      <Avatar className="!h-12 !w-12" src="avatar3.png" alt="avatar3" />
      <div className="text-mine-shaft-100 font-semibold text-sm">Complete Your Profile</div>
      <div className="text-mine-shaft-200 text-sm">80% completed</div>
    </div>
  <div className="flex flex-col gap-8 md:gap-10">
          {work.map((item) => (
            <div key={item.name} className="flex items-center gap-4">
              <div className="p-3 bg-cerise-400 rounded-full flex items-center justify-center">
                <img
                  src={`Working/${item.name}.png`}
                  alt={item.name}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="flex flex-col gap-1 text-mine-shaft-200 text-left">
                <div className="text-mine-shaft-100 font-semibold text-xl">
                  {item.name}
                </div>
                <div className="text-mine-shaft-300">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
