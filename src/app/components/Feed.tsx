import {useEffect, useState} from "react";

type FeedProps = {
    id: string
    media_type: "IMAGE" | "VIDEO"
    media_url: string,
    permalink: string
}


export default function Feed() {

    const [feedList, setFeedList] = useState<FeedProps[]>([])

    async function getFeed() {
        const token = import.meta.env.TOKEN;
        const fields = "media_url,media_type,permalink";
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

        const { data } = await axios.get(url);
        setFeedList(data.data);
    }

    useEffect(() => {
        getFeed()
    }, []);


    return (
        <div>

        </div>
    );
}