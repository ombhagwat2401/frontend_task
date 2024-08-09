import React from 'react'
import {
    Card,
    Button,
    CardBody,
    Typography,

} from "@material-tailwind/react"
import { GrLinkNext } from "react-icons/gr";
import TopDisscussionData from '../../../data/TopDisscussionData'

function TopDiscussion({ title }) {
    return (
        <>
            <Card className="mt-6 w-full border border-grey-500">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                    {
                        TopDisscussionData.map((e) => {
                            return (
                                <div className="border-b-2 border-grey-500 mb-4">
                                    <Typography>
                                        {e.desc}

                                    </Typography>
                                    <Button size="sm" variant="text" className="-ml-1 flex capitalize p-1 mt-2 mb-2">Details <GrLinkNext className="m-0.5" /></Button>
                                </div>
                            )
                        })
                    }
                </CardBody>
            </Card>

        </>
    )
}

export default TopDiscussion