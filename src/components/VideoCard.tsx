export function VideoCard(props: any) {
    return (
        <div className="p-3">
            <img src={props.thumbnail} alt="thumbnail1" className="rounded-xl w-full"/>
            <div className="grid grid-cols-12 pt-2">  
                <div className="col-span-1">
                    <img className={"rounded-full w-15 h-15"} src={props.profileImage} alt="thumbnail1" />
                </div>
                <div className="col-span-11">
                    <div className="">
                        {props.title}
                    </div>
                    <div className="text-gray-400 text-base">
                        {props.author}
                    </div>
                    <div className="text-gray-400 text-base">
                        {props.views} | {props.timestamp}
                    </div>
                </div>
            </div>
        </div>
    )
}