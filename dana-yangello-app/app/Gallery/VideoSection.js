import VideoItem from '@/app/Gallery/VideoItem';
//videos is a list of objects that contain video details: 
// {
//   thumbnail: string,
//   videoUrl: string,
//   description: string
// }
export default function VideoSection({ sectionTitle, videos }) {
    const maxVideosPerRow = 3;
    const letters = sectionTitle.split('');
    return (
        <div className="bg-peach relative min-h-[400px] py-8 flex items-center">
            <div className="absolute absolute top-0 bottom-0 left-1/2 -translate-x-1/2 md:left-8 md:-translate-x-0 flex flex-row md:flex-col justify-center md:justify-between pointer-events-none py-16 w-[80%] mx-auto mb-16 md:mb-0">
                {letters.map((char, i) => (
                    <span
                        key={i}
                        className="text-open-sans text-black text-4xl md:text-5xl font-bold uppercase leading-none"
                    >
                        {char}
                    </span>
                ))}
            </div>
            <div className="mx-auto my-16 m:my-0 w-[80%] h-full flex flex-col items-center">
                {videos.map((video, index) => (
                    index % maxVideosPerRow === 0 && (
                        <div
                            key={index}
                            className="w-full flex flex-col md:flex-row gap-4 md:gap-16 items-center"
                        >
                            {videos.slice(index, index + maxVideosPerRow).map((video, subIndex) => (
                                <VideoItem
                                    key={subIndex}
                                    thumbnail={video.thumbnail}
                                    alt={video.description}
                                    videoUrl={video.videoUrl}
                                    className="flex-1 aspect-video"
                                />
                            ))}
                        </div>
                    )     
                ))}
            </div>
        </div>
    )
}