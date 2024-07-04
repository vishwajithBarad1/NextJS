import { VideoCard } from "./VideoCard"
const videos = [{
    title:"why indian roads are never safe",
    views:"4.6M",
    time:"2 years ago",
    image:"/photo.jpg",
    channel: "Anurag Salgaonkar"
},{
    title:"why indian roads are never safe",
    views:"4.6M",
    time:"2 years ago",
    image:"/photo.jpg",
    channel: "Anurag Salgaonkar"
},{
    title:"why indian roads are never safe",
    views:"4.6M",
    time:"2 years ago",
    image:"/photo.jpg",
    channel: "Anurag Salgaonkar"
},{
    title:"why indian roads are never safe",
    views:"4.6M",
    time:"2 years ago",
    image:"/photo.jpg",
    channel: "Anurag Salgaonkar"
},{
    title:"why indian roads are never safe",
    views:"4.6M",
    time:"2 years ago",
    image:"/photo.jpg",
    channel: "Anurag Salgaonkar"
},{
    title:"why indian roads are never safe",
    views:"4.6M",
    time:"2 years ago",
    image:"/photo.jpg",
    channel: "Anurag Salgaonkar"
},{
    title:"why indian roads are never safe",
    views:"4.6M",
    time:"2 years ago",
    image:"/photo.jpg",
    channel: "Anurag Salgaonkar"
},{
    title:"why indian roads are never safe",
    views:"4.6M",
    time:"2 years ago",
    image:"/photo.jpg",
    channel: "Anurag Salgaonkar"
},{
    title:"why indian roads are never safe",
    views:"4.6M",
    time:"2 years ago",
    image:"/photo.jpg",
    channel: "Anurag Salgaonkar"
},{
    title:"why indian roads are never safe",
    views:"4.6M",
    time:"2 years ago",
    image:"/photo.jpg",
    channel: "Anurag Salgaonkar"
},{
    title:"why indian roads are never safe",
    views:"4.6M",
    time:"2 years ago",
    image:"/photo.jpg",
    channel: "Anurag Salgaonkar"
},{
    title:"why indian roads are never safe",
    views:"4.6M",
    time:"2 years ago",
    image:"/photo.jpg",
    channel: "Anurag Salgaonkar"
}]
export function Contents(){
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {videos.map((props:any)=>{return <div>
            <VideoCard
                title={props.title}
                views={props.views}
                time={props.time}
                image={props.image}
                channel={props.channel}>
            </VideoCard>
        </div>})}
    </div>
}