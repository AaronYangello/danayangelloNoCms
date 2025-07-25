import '@/styles/globals.css';
import GalleryHeader from '@/app/Gallery/GalleryHeader';
import VideoSection from '@/app/Gallery/VideoSection';

export default function Gallery() {
    const headerDetails = {
        pageName: "Gallery",
        portraitPaths: [
            "/img/Dana Yangello.jpg",
            "/img/Dyangello1.jpg",
            "/img/DanaYangello_Office.jpg",
            "/img/Theatrical.jpg"
        ]
    };

    const reels = [
            {
                thumbnail: "/img/thumbnails/dana_reel23_thumb.jpg",
                videoUrl: "https://www.youtube.com/embed/7lKeKHi2GpY",
                description: "2023 Reel"  
            },
            {
                thumbnail: "/img/thumbnails/dance2020-thumb.jpg",
                videoUrl: "https://www.youtube.com/embed/1v6ucs6HFoQ",
                description: "Dance Reel 2020"
            },
            {
                thumbnail: "/img/thumbnails/improv-at-ucb-thumb.jpg",
                videoUrl: "https://www.youtube.com/embed/zu4yT8zBbok",
                description: "Improv Reel"
            }
        ];
    
    const parodies = [
        {
            thumbnail: "/img/thumbnails/got-5-days-thumb.jpg",
            videoUrl: "https://www.youtube.com/embed/AyP0HWnMELY",
            description: "I've Got 5 Days"  
        },
        {
            thumbnail: "/img/thumbnails/presents-and-bows-thumb.jpg",
            videoUrl: "https://www.youtube.com/embed/MDwU5Nkro6M",
            description: "Presents and Bows"  
        },
        {
            thumbnail: "/img/thumbnails/all-i-want-thumb.jpg",
            videoUrl: "https://www.youtube.com/embed/a1TDFk5kMmE",
            description: "All I Want for Christmas"  
        },
        {
            thumbnail: "/img/thumbnails/study-buddy-thumb.jpg",
            videoUrl: "https://www.youtube.com/embed/J7bm4aPjbYI",
            description: "Study Buddy"  
        },
        {
            thumbnail: "/img/thumbnails/xmas-means-to-me-thumb.jpg",
            videoUrl: "https://www.youtube.com/embed/QdaPlN7CJJA",
            description: "Christmas Means to Me"  
        }
    ];

    return (
        <html lang="en">
            <head>
                <link rel="icon" href='/img/favicon.ico'/>
            </head>
            <body className="bg-dark-gray">
                <GalleryHeader
                    pageName={headerDetails.pageName}
                    portraitPaths={headerDetails.portraitPaths}
                />
                <VideoSection
                    sectionTitle="Reels"
                    videos={reels}
                />
                <VideoSection
                    sectionTitle="Parodies"
                    videos={parodies}
                />
            </body>
        </html>
    );
}
