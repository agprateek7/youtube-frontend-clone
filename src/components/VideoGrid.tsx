import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title:"Reacting to Your Projects",
    author:"Manu Arora",
    thumbnail:"./thumbnail1.jpg",
    profileImage:"channels4_profile.jpg",
    views:"122K",
    timestamp:"2 days ago"
}, {
    title:"Top FREE Resources to get better at Coding in 2024",
    author:"Harkirat Singh",
    thumbnail:"./thumbnail2.jpg",
    profileImage:"channels4_profile (2).jpg",
    views:"178K",
    timestamp:"1 year ago"
}, {
    title:"Reacting to Your Projects",
    author:"Manu Arora",
    thumbnail:"./thumbnail1.jpg",
    profileImage:"channels4_profile.jpg",
    views:"122K",
    timestamp:"2 days ago"
}, {
    title:"Top FREE Resources to get better at Coding in 2024",
    author:"Harkirat Singh",
    thumbnail:"./thumbnail2.jpg",
    profileImage:"channels4_profile (2).jpg",
    views:"178K",
    timestamp:"1 year ago"
}]

export function VideoGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map(video => (
                <div>
                    <VideoCard
                        title={video.title} 
                        author={video.author} 
                        thumbnail={video.thumbnail} 
                        profileImage={video.profileImage} 
                        views={video.views} 
                        timestamp={video.timestamp} 
                    ></VideoCard>
                </div>
            ))}
        </div>
    )
}~