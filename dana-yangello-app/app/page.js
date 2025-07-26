'use client'
import { useState, useEffect } from 'react';
import { getPageHeaderDetails } from '@/app/actions'
import { getHomePageSections } from '@/app/actions'

import '@/styles/globals.css'; 
import HomePageHeader from '@/app/HomePageHeader';
import HomePageSection from '@/app/HomePageSection';

export default function Home() {
  const pageName = "Home";
  const [headerDetails, setHeaderDetails] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    getPageHeaderDetails(pageName).then(setHeaderDetails).catch(console.error);
    getHomePageSections().then(setSections).catch(console.error);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/img/favicon.ico'/>
      </head>
      <body>
        <HomePageHeader
          pageName={headerDetails.pageName}
          title={headerDetails.title}
          subtitle={headerDetails.subtitle}
          backgroundImgPath={headerDetails.backgroundImgPath}
        />
        {sections.map((section, idx) => (
          <HomePageSection
            key={section.title}
            title={section.title}
            darkTheme={idx % 2 === 0}
            heroImagePath={section.heroImagePath}
            reelLink={section.reelLink}
            reelLabel={section.reelLabel}
            seeMore={section.seeMore}
          />
        ))}
      </body>
    </html>
  );
}
