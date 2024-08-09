import React from 'react'
import {
    Card,

} from "@material-tailwind/react"

import CommunityHeader from '../../components/others/community-header/CommunityHeader';
import CommunityCreatePost from '../../components/others/community-create-post/CommunityCreatePost';
import TopDiscussion from '../../components/others/top-discussion/TopDiscussion';
import RecommandedTopics from '../../components/others/recommanded-topics/RecommandedTopics';
import CommunityPostsContainer from '../../components/others/community-posts-container/CommunityPostsContainer';
import PeopleToFollow from '../../components/others/people-to-follow/PeopleToFollow';


function Community() {
    return (
        <div className="community_container">
            <div className="container mx-auto mt-8">
                <div className="flex flex-col gap-0 lg:gap-2 lg:flex-row space-x-0">
                    <div className="w-full lg:w-[70%] p-2">
                        <Card className="mt-6 w-full border border-grey-500">
                            <CommunityHeader title="Community" />
                            <CommunityCreatePost />
                            <CommunityPostsContainer />
                        </Card>
                    </div>

                    <div className="w-full lg:w-[30%] p-2">
                        <TopDiscussion title="Top Discussion this week 🔥" />
                        <RecommandedTopics title="Recommanded Topics" />
                        <PeopleToFollow title="People to Follow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community