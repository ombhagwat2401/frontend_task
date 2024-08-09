import React, { useState } from 'react'

import { Card, CardBody, Typography, Avatar, Button } from "@material-tailwind/react";
import PeoplesToFollowData from '../../../data/PeoplesToFollowData';


function PeopleToFollow({ title }) {

    const [count, setCount] = useState(3);
    return (
        <>
            <Card className="mt-6 w-full border border-grey-500">
                <CardBody>
                    <div className="mb-4 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="">
                            {title}
                        </Typography>

                    </div>
                    <div className="divide-y divide-gray-200">
                        {
                            PeoplesToFollowData.slice(0, count).map((e) => {
                                return (
                                    <div

                                        className="flex items-center justify-between pb-3 pt-3 last:pb-0"
                                    >
                                        <div className="flex items-center gap-x-3">
                                            <Avatar size="sm" src={e.image} alt={e.name} />
                                            <div>
                                                <Typography color="blue-gray" variant="h6">
                                                    {e.name}
                                                </Typography>
                                                <Typography variant="small" color="gray">
                                                    Talks about {e.description}
                                                </Typography>
                                            </div>
                                        </div>
                                        <Typography color="blue-gray" variant="h6">
                                            <Button variant="outlined" size="sm" className="rounded-full">
                                                Follow
                                            </Button>
                                        </Typography>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <Typography className="mt-2 text-[#fd6b56] font-bold cursor-pointer" onClick={() => setCount(PeoplesToFollowData.length)}>
                        See more suggesstion
                    </Typography>
                </CardBody>
            </Card>
        </>
    )
}

export default PeopleToFollow