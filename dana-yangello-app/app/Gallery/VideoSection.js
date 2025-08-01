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
    const rows = [];
    for (let i = 0; i < videos.length; i += maxVideosPerRow) {
        rows.push(videos.slice(i, i + maxVideosPerRow));
    }
    return (
        <div className="bg-peach relative min-h-[400px] py-8 flex items-center">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 flex flex-row md:flex-col justify-center md:justify-between pointer-events-none py-16 mb-16 md:mb-0 items-center">
                {letters.map((char, i) => (
                    <span
                        key={i}
                        className="text-open-sans text-black text-4xl md:text-5xl font-bold uppercase leading-none"
                    >
                        {char}
                    </span>
                ))}
            </div>
            <div className="mx-auto mt-20 md:mt-0 w-[80%] flex flex-col items-center">
                {rows.map((row, index) => (
                    <div
                        key={index}
                        className={`w-full flex md:justify-evenly flex-col md:flex-row gap-4 md:gap-16 items-center ${index > 0 ? 'mt-4 md:mt-16' : ''}`}
                    >
                        {row.map((video, subIndex) => (
                            <VideoItem
                                key={subIndex}
                                thumbnail={video.thumbnail}
                                alt={video.description}
                                videoUrl={video.videoUrl}
                                className="w-[90%] md:w-[29%] aspect-video"
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}