import React, { useEffect, useState } from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,

} from "@material-tailwind/react"
import RecommandedTopicsData from '../../../data/RecommandedTopicsData'




function RecommandedTopics({ title }) {

    const [count, setCount] = useState(6);
    const [showAll, setShowAll] = useState(false);


    const handleToggle = () => {
        if (showAll) {
            setCount(6);
        } else {
            setCount(RecommandedTopicsData.length);
        }
        setShowAll(!showAll);
    };




    return (
        <>
            <Card className="mt-6 w-full border border-grey-500">

                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                    <div class="flex ml-auto justify-between flex-wrap">

                        {

                            RecommandedTopicsData &&
                            RecommandedTopicsData.slice(0, count).map((e) => {
                                return (
                                    <div class="relative px-3 py-1 my-1 font-sans text-xs rounded-full select-none whitespace-nowrap bg-blue-gray-500/10 text-blue-gray-900">
                                        <span>{e.topic}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Typography className="mt-2 text-[#fd6b56] font-bold cursor-pointer" onClick={handleToggle}>
                        {showAll ? 'Show Less' : 'Show More'}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">

                </CardFooter>
            </Card>
        </>
    )
}

export default RecommandedTopics