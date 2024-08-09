import React from 'react'
import {
    Avatar,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react"
import { LuMessagesSquare } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import CommunityPostsData from '../../../data/CommunityPostsData';

function CommunityPostsContainer() {

    const [activeTab, setActiveTab] = React.useState("post");

    return (


        <>


            <Tabs value={activeTab} className="p-4">
                <TabsHeader
                    className="w-[50%] rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                        style: {
                            borderColor: "#fd6b56",
                        },
                    }}
                >
                    {CommunityPostsData.map(({ label, icon, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-[#fd6b56]" : ""}
                        >
                            <div className="flex">
                                {React.createElement(icon, { className: "m-2 mt-1" })}
                                <p className="">{label}</p>
                            </div>

                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {CommunityPostsData.map(({ value, content }) => (
                        <TabPanel key={value} value={value}>
                            {
                                content.length <= 0 ?
                                    (
                                        <Typography className="mt-6 mb-6 text-center cursor-pointer">
                                            No Content
                                        </Typography>
                                    ) : ''
                            }
                            {content.map((e) => {
                                return (
                                    <Card className="-ml-6 -mr-6 p-0 w-full border-b-2 shadow-none rounded-none">
                                        <CardBody>
                                            <Avatar
                                                variant="circular"
                                                size="xs"
                                                alt="tania andrew"
                                                className="border border-gray-900 p-0.5"
                                                src={e.userAvatar}
                                            />
                                            <span className="ml-2 text-xs">By: {e.userName} </span>
                                            <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                                                {e.postTitle}
                                            </Typography>
                                            <Typography>
                                                {e.postDescription}
                                            </Typography>
                                            <div className="flex ml-auto mt-4 flex-wrap border-b-2 pb-4">
                                                {e.postTags.map((tags) => {
                                                    return (
                                                        <div class="relative px-3 py-1 my-1 font-sans text-xs rounded-full select-none whitespace-nowrap bg-blue-gray-500/10 text-blue-gray-900">
                                                            <span>{tags}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </CardBody>
                                        <CardFooter className="pt-0">
                                            <div className="flex"><div className="flex text-[#000]"><LuMessagesSquare className="m-1" />{e.postReplies} Replies</div> <div className="flex text-grey-500"><FiEye className="m-1 ml-6" /> {e.postViews} Views</div></div>
                                        </CardFooter>
                                    </Card>

                                )
                            })}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>

        </>
    )
}

export default CommunityPostsContainer