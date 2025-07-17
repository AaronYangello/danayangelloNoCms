import '@/styles/globals.css'; 
import Header from '@/components/Header';
import HomePageSection from '@/components/HomePageSection';

export default function Home() {
  const headerDetails = {
    pageName: "Home",
    title: "Dana Yangello",
    subtitle: "Actor | Dancer | Improviser",
    backgroundImgPath: "/img/home-header-bg.jpg"
  }
  const sections = [
    {
      title: "Actor",
      theme: "dark",
      heroImagePath: "/img/quirky-cute-techie.jpg",
      reelLink: "https://www.youtube.com/embed/DSwA93tVi3s?si=EddokwM7KRJs6z7w",
      reelLabel: "YouTube Video, Dana Yangello",
      seeMore: `Grew up in the Musical Theatre world in, small town, Pennsville,NJ. In 2017, moved to LA and the film journey began! Recent bookings include Intel print, "Geisting" (film), & the short "New Year's Eve Kiss" from the Flighthouse content creators.

Had the pleasure of training with Jenny Steadman for Killian's Commercial Workshop. Currently studying with Howard Fine for On-Camera & Audition Technique - LOVING IT!`
    },
    {
      title: "Improviser",
      theme: "light",
      heroImagePath: "/img/improv.jpg",
      reelLink: "https://www.youtube.com/embed/zu4yT8zBbok",
      reelLabel: "YouTube Video, Dana Yangello Improv at UCB",
      seeMore: `Upright Citizen's Brigade - A home away from home! Currently enrolled in level 401 Improv. Very grateful to have trained with Joel Spence (301 & On-going Improv Bootcamp), Susannah Becket (201), and Sarah Claspbell (101).`
    },
    {
      title: "Dancer",
      theme: "dark",
      heroImagePath: "/img/sassy-bff-dance-site.jpg",
      reelLink: "https://www.youtube.com/embed/1v6ucs6HFoQ",
      reelLabel: "YouTube Video, DanaYangello Dance2020",
      seeMore: `The love for Ballroom sparked in 2016 while at Rowan University (double majored in Theatre & Psychology) Competed collegiately for 3 years before moving to LA where I am a Ballroom Dance instructor and performer. Beyond thankful for my amazing coaches! I'm now doing what I can to share my love of dancing with the younger generation. Learn more about how at SisterSomething.com`
    }
  ];

  return (
    <html lang="en">
      <body>
        <Header
          pageName={headerDetails.pageName}
          title={headerDetails.title}
          subtitle={headerDetails.subtitle}
          backgroundImgPath={headerDetails.backgroundImgPath}
        />
        {sections.map((section, idx) => (
          <HomePageSection
            key={section.title}
            title={section.title}
            theme={section.theme}
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
