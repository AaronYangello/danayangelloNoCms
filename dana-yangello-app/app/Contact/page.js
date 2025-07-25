import '@/styles/globals.css';
import ContactHeader from '@/app/Contact/ContactHeader';
import Socials from '@/app/Contact/Socials';
import News from '@/app/Contact/News';
import ContactInfo from '@/app/Contact/ContactInfo';

export default function Contact() {
    const headerDetails = {
        pageName: "Contact",
        title: "Contact",
        subtitle: "",
        backgroundImgPath: "/img/contact-header-bg.jpg"
    };

    const portrait = "/img/hand-in-hair.jpg";

    const socials = [
        {
            site: "Casting Networks",
            url: "https://app.castingnetworks.com/talent/public-profile/ae921fb6-9157-11ea-9bfa-0291f623b406",
            icon: "/img/socials/casting-networks.jpg"
        },
        {
            site: "Instagram",
            url: "https://www.instagram.com/danayangello",
            icon: "/img/socials/instagram.jpg"
        }
    ];

    const news = [
        {
            image: "/img/over-the-shoulder-square.jpg",
            title: "VoyageLA: ",
            atl: "Meet Dana Yangello of Dancing with Dana in Burbank",
            preview: 
`
Dana, can you briefly walk us through your story – how you started and how you got to where you are today.
I am an actor, improviser, and ballroom dancer, located in Burbank, CA. I was born and raised in South Jersey, where my love for performing and connecting with others through dance began. I grew up in a family that was always the first on the dance floor and the last to leave. My family will always be my greatest influence and support system....
`
        }
    ];
    
    const contactInfo = [
        {
            type: "Email",
            value: "dyangello@gmail.com"
        },
        {  
            type: "Phone",
            value: "856.469.5515"
        }
    ];

    return (
        <html lang="en">
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
