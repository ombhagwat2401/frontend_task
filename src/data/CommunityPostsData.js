import PostsData from "./PostsData";
import { GrDocumentText } from "react-icons/gr";
import { GoCommentDiscussion } from "react-icons/go";
import { TfiAnnouncement } from "react-icons/tfi";
import { GrAttachment } from "react-icons/gr";

const CommunityPostsData = [
    {
        label: "Post",
        value: "post",
        icon: GrDocumentText,
        content: PostsData,
    },
    {
        label: "Discussion",
        value: "discussion",
        icon: GoCommentDiscussion,
        content: [],
    },
    {
        label: "Resources",
        value: "resources",
        icon: GrAttachment,
        content: []
    },
    {
        label: "Announcements",
        value: "announcements",
        icon: TfiAnnouncement,
        content: []
    },
];

export default CommunityPostsData;