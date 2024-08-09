import React, { useState } from 'react'
import {
    Card,
    CardBody,
    Button,
    IconButton,
} from "@material-tailwind/react"
import { GrAttachment } from "react-icons/gr";
import { FaRegSmile } from "react-icons/fa";
import { HiOutlinePhoto } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa";


function CommunityCreatePost() {
    const [showSearch, setShowSearch] = useState(false);
    const [postContent, setPostContent] = useState("Hey everyone! 🎉\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit 🚀\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.📚💡\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit Lorem ipsum dolor sit amet Consectetur adipiscing elit  🌈✨")
    const [tags, setTags] = useState(['study-group', 'share-insights', 'share-insights', 'help-question']);

    const [inpTag, setInpTag] = useState('');
    const addTag = () => {
        if (inpTag != '') {
            setTags([...tags, inpTag]);
            setShowSearch(false);
            setInpTag('');
        }


    }

    return (
        <>

            <CardBody className='p-4'>
                <textarea
                    className="w-full h-[200px] border-0 bg-transparent p-2 outline-none resize-none scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                    placeholder="Type your text here..."
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                />

                <div class="flex ml-auto items-center justify-start space-x-2 mt-2" >
                    <p className="text-xm">Add tags:</p>

                    {
                        tags.map((e) => {
                            return (
                                <div class="relative px-2 py-1 font-sans text-xs rounded-full select-none whitespace-nowrap bg-blue-gray-500/10 text-blue-gray-900">
                                    <span>{e}</span>
                                </div>
                            )
                        })
                    }



                    {
                        showSearch && (
                            <div className="w-50">
                                <input
                                    type="text"
                                    placeholder="Add Tags"
                                    className="rounded-full p-0.5 px-2 text-[12px] border-2 outline-none"
                                    autoFocus
                                    onChange={(e) => setInpTag(e.target.value)}
                                />
                            </div>
                        )
                    }


                    <Button variant="outlined" onClick={() => {
                        setShowSearch(true)
                        addTag()

                    }} className="rounded-full capitalize px-2 py-1 border-[2px] border-[#fd6b56] text-[#fd6b56] flex">
                        <FaPlus className='pt-0.5 pr-0.5' /> <p> Add Tags</p>
                    </Button>
                </div>


            </CardBody>
            <div className="flex justify-between bg-[#f2f2f290] p-3 pr-6 pl-6 mb-0">
                <div className="flex">
                    <IconButton variant='text'>
                        <FaRegSmile className='text-[15px]' />
                    </IconButton>
                    <IconButton variant='text'>
                        <HiOutlinePhoto className='text-[15px]' />
                    </IconButton>
                    <IconButton variant='text'>
                        <GrAttachment className='text-[15px]' />
                    </IconButton>
                </div>
                <div>
                    <Button className="bg-[#fd6b56] capitalize" size="sm">Post</Button>
                </div>

            </div>

        </>
    )
}

export default CommunityCreatePost