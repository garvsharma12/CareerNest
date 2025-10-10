import { TextInput, Avatar } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
const Job = () => {
    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] gap-3">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100">
                    Find your <span className="text-cerise-400">dream job</span> with us
                </div>
                <div className="text-lg text-mine-shaft-200">
                    Good life begins with a good company. Start explore thousands of jobs in one place.
                </div>
                    <div className="flex gap-3 mt-5 items-end">
                    <TextInput className="bg-mine-shaft-800 rounded-md p-1 px-6 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                        variant="unstyled"
                        label="Job Title"
                        placeholder="Software Engineer"
                        />
                    <TextInput className="bg-mine-shaft-800 rounded-md p-1 px-10 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                        variant="unstyled"
                        label="Job Type"
                        placeholder="Full-time"
                        />
                    <button className="h-17 w-13 flex items-center justify-center rounded-md bg-cerise-500 text-white hover:bg-cerise-400 transition cursor-pointer"
                        type="button"
                        aria-label="Search jobs"
                    >
                        <IconSearch size={40} stroke={2} />
                    </button>
                </div>
                
            </div>

            <div className="w-[55%] flex justify-center items-center">
                <div className="w-[40rem] transform translate-x-14">
                    <img src="boy.png" alt="boy" className="mx-auto mt-10" />
                    <div className="absolute top-[39%] w-fit border-2 border-cerise-400 rounded-lg p-2 backdrop-blur-md bg-transparent">
                        <div className="text-center text-mine-shaft-200">10K+ got jobs</div>
                        <Avatar.Group>
                            <Avatar src="image.png" />
                            <Avatar src="image.png" />
                            <Avatar src="image.png" />
                            <Avatar>+9</Avatar>
                        </Avatar.Group>
                    </div>
                    <div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Job;