import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    Typography,
    IconButton,
    Textarea,
    Input,
} from "@material-tailwind/react";

import { IoSearch, IoCloseSharp } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";

export default function CommunityHeader({ title }) {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="rounded-none border-b border-grey/10"
            >
                <div className="flex justify-between items-center">
                    <Typography variant="h5" color="blue-gray" className="mb-6 flex items-center">
                        <IconButton className="mr-4 bg-[#fd6b5630] text-[#fd6b56]">
                            <HiMiniUserGroup className="text-[25px]" />
                        </IconButton>
                        {title}
                    </Typography>
                    <div className="flex items-center">

                        {showSearch && (
                            <>
                                <div className="w-72">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="ml-8 rounded-full w-60 p-2 border-2 outline-none"
                                        autoFocus
                                    />
                                </div>

                            </>
                        )}
                        <IconButton
                            variant="outlined"
                            className="rounded-full mr-2"
                            onClick={() => setShowSearch(true)}
                        >
                            <IoSearch className='text-[15px]' />
                        </IconButton>
                        <IconButton
                            className="rounded-full mr-2 bg-[#fd6b56]"
                            onClick={() => setShowSearch(false)}
                        >
                            <IoCloseSharp className='text-[15px]' />
                        </IconButton>
                    </div>
                </div>
            </CardHeader>
        </>
    );
}
