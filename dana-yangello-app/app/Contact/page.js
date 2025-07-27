'use client'
import { useState, useEffect } from 'react';
import { getPageHeaderDetails } from '@/app/actions'
import { getContactDetails } from '@/app/actions'
import { getSocials } from '@/app/actions'
import { getTheNews } from '@/app/actions'

import '@/styles/globals.css';
import Head from '@/components/Head';
import ContactHeader from '@/app/Contact/ContactHeader';
import Socials from '@/app/Contact/Socials';
import News from '@/app/Contact/News';
import ContactInfo from '@/app/Contact/ContactInfo';

export default function Contact() {
    const pageName = "Contact";
    const [headerDetails, setHeaderDetails] = useState([]);
    const [contactDetails, setContactDetails] = useState([]);
    const [socials, setSocials] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        getPageHeaderDetails(pageName).then(setHeaderDetails).catch(console.error);
        getContactDetails().then(setContactDetails).catch(console.error);
        getSocials().then(setSocials).catch(console.error);
        getTheNews().then(setNews).catch(console.error);
    }, []);
      
    const {portrait, ...contactInfo} = contactDetails;
    return (
        <html lang="en">
            <Head pageName={pageName}/>
            <body className="bg-dark-gray">
                <ContactHeader
                    pageName={headerDetails.pageName}
                    title={headerDetails.title}
                    subtitle={headerDetails.subtitle}
                    backgroundImgPath={headerDetails.backgroundImgPath}
                />
                <div className="w-[90%] flex flex-col md:flex-row justify-between mx-auto my-16 items-start">
                    <div className="flex flex-col items-start justify-between w-full">
                        <div className="flex flex-col-reverse md:flex-row items-center justify w-full">
                            <Socials
                                socials={socials}
                                />
                            <ContactInfo
                                className="mx-auto"
                                contactInfo={contactInfo}
                            />
                        </div>
                        <News
                            className="w-full"
                            news={news}
                        />
                    </div>
                    <img className="w-[90%] md:w-[25%] object-contain rounded-lg shadow-lg mt-16 md:mt-0"
                        src={portrait}
                    />
                </div>
            </body>
        </html>
    );
}
