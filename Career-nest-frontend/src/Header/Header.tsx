import { Avatar } from "@mantine/core";
import {IconCircleDottedLetterC, IconBell, IconSettings } from "@tabler/icons-react";

const Header = () => {
    return <div className="w-full bg-mine-shaft-950 px-6 text-white h-28 flex justify-between items-center">

        <div className="flex gap-3 items-center">
            <IconCircleDottedLetterC className="h-10 w-10" />
            <div className="text-3xl font-semibold">Career Nest</div>
        </div>

        <div className="flex gap-3">
            <a href="">Find Job</a>
            <a href="">Find Talent</a>
            <a href="">Upload Jobs</a>
            <a href="">About Us</a>
        </div>

        <div className="flex gap-4 items-center">
            <IconBell/>
            <div className="flex items-center gap-2">
                <div>Radha</div>
                <Avatar src="avatar.png" alt="it's me" />
            </div>
            <IconSettings/>
        </div>
    </div>;
}
export default Header;