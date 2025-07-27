'use client'
import { useState, useEffect } from 'react';
import { getPageHeaderDetails } from '@/app/actions'
import { getResumeDetails } from '@/app/actions'

import '@/styles/globals.css';
import Head from '@/app/Head';
import ResumeHeader from '@/app/Resume/ResumeHeader';

export default function Resume() {
    const pageName = "Resume"
    const [headerDetails, setHeaderDetails] = useState([]);
    const [resumeDetails, setResumeDetails] = useState([]);

    useEffect(() => {
        getPageHeaderDetails(pageName).then(setHeaderDetails).catch(console.error);
        getResumeDetails().then(setResumeDetails).catch(console.error);
    }, []);

    return (
        <html lang="en">
            <Head pageName={pageName}/>
            <body className="bg-dark-gray">
                <ResumeHeader
                    pageName={headerDetails.pageName}
                    title={headerDetails.title}
                    subtitle={headerDetails.subtitle}
                    backgroundImgPath={headerDetails.backgroundImgPath}
                />

                <div className="w-[90%] max-w-[1600px] mx-auto py-8">
                    <div
                        className="flex flex-col-reverse md:flex-row items-center md:items-stretch gap-8">
                        <div className="flex flex-col gap-8 md:w-[300px] flex-shrink-0">
                            <img
                                src={resumeDetails.headshot1}
                                alt="Headshot 1"
                                className="w-full h-auto object-cover rounded shadow-md"
                            />
                            <img
                                src={resumeDetails.headshot2}
                                alt="Headshot 2"
                                className="w-full h-auto object-cover rounded shadow-md"
                            />
                        </div>

                        <div className="flex-1">
                            <iframe
                                src={resumeDetails.pdfUrl}
                                className="w-full h-[400px] md:h-full rounded shadow-md"
                                title="Resume PDF"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
