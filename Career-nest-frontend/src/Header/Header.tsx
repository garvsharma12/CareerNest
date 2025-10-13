import { Avatar, Indicator } from "@mantine/core";
import {IconCircleDottedLetterC, IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
    return <div className="w-full bg-mine-shaft-950 px-6 text-white h-28 flex justify-between items-center bg-mine-shaft-950 font-[poppins]">

        <div className="flex gap-3 items-center text-cerise-400">
            <IconCircleDottedLetterC className="h-10 w-10" />
            <div className="text-3xl font-semibold">Career Nest</div>
        </div>

    <NavLinks />

        <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
                <div>Radha</div>
                <Avatar src="avatar.png" alt="it's me" />
            </div>

            <div className="bg-mine-shaft-900 p-2 rounded-md hover:bg-mine-shaft-800 cursor-pointer">
            <Indicator color="cerise.2" withBorder position="top-end" size={10} offset={4} processing>
                <IconBell stroke={2.0} />
            </Indicator>
            </div>

            <div className="bg-mine-shaft-900 p-2 rounded-md hover:bg-mine-shaft-800 cursor-pointer">
                <IconSettings stroke={2.0} />
            </div>
        </div>
    </div>;
}
export default Header;