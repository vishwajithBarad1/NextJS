export function VideoCard(props:any){
    return (
        <div className="h-full w-fit m-2">
            <img className="h-48 rounded-xl" src={props.image} alt="video-Thumbnail"/>
            <div className="grid grid-cols-6 pt-2">
                <div className="col-span-1">
                    <img className="rounded-full h-8 m-2" src="channels4_profile.jpg" alt="" />
                </div>
                <div className="col-span-5 w-fit">
                    <div className="font-bold">{props.title}</div>
                    <div className="text-gray-400 ">{props.channel}</div>
                    <div className="font-thin text-gray-400">{props.views} views - {props.time}</div>
                </div>
            </div>
        </div>
    )
}