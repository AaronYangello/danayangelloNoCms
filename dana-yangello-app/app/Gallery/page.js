'use client'
import { useState, useEffect } from 'react';
import { getPageHeaderDetails } from '@/app/actions'
import { getGalleryVideos } from '@/app/actions'

import '@/styles/globals.css';
import Head from '@/app/Head';
import GalleryHeader from '@/app/Gallery/GalleryHeader';
import VideoSection from '@/app/Gallery/VideoSection';

export default function Gallery() {
    const pageName = "Gallery";
    const reelsSectionTitle = "Reels";
    const parodiesSectionTitle = "Parodies";

    const [headerDetails, setHeaderDetails] = useState([]);
    const [reels, setReels] = useState([]);
    const [parodies, setParodies] = useState([]);

    useEffect(() => {
        getPageHeaderDetails(pageName).then(setHeaderDetails).catch(console.error);
        getGalleryVideos(reelsSectionTitle).then(setReels).catch(console.error);
        getGalleryVideos(parodiesSectionTitle).then(setParodies).catch(console.error);
    }, []);

    return (
        <html lang="en">
            <Head pageName={pageName}/>
            <body className="bg-dark-gray">
                <GalleryHeader
                    pageName={headerDetails.pageName}
                    portraitPaths={headerDetails.portraitPaths}
                />
                <VideoSection
                    sectionTitle={reelsSectionTitle}
                    videos={reels}
                />
                <VideoSection
                    sectionTitle={parodiesSectionTitle}
                    videos={parodies}
                />
            </body>
        </html>
    );
}
