const HomePageSection = ({
    title,
    theme,
    heroImagePath,
    reelLink,
    reelLabel,
    seeMore
}) => {
    let bgColor = "bg-dark-gray"
    let textColor = "text-white";
    let btnColor = "bg-white text-dark-primary";
    let borderColor = "border-white";
    if (theme === "light") {
        bgColor = "bg-light-gray"; 
        textColor = "text-dark-primary";
        btnColor = "bg-dark-gray text-white";
        borderColor = "border-dark-primary";
    }
    return (
        <section className={`w-full py-12 ${bgColor}`}>
            <div className="w-[90%] mx-auto max-w-[1200px]">
                <h2 className={`${textColor } font-oswald text-6xl mb-7 px-4 text-center lg:text-left uppercase`}>
                    {title}
                </h2>

                <div className="flex flex-col items-center lg:flex-row lg:items-start justify-center gap-12 px-4">
                    <div className="flex-shrink-0 flex flex-col items-center gap-4 w-64">
                        <img src={heroImagePath} alt={`${title} portrait`} className="w-64 h-auto object-cover rounded shadow-md"/>
                        <a href="Resume.html" className={`w-full text-center py-2 ${btnColor} font-open-sans rounded`}>Resume</a>
                        <a href="Contact.html" className={`w-full text-center py-2 ${btnColor} font-open-sans rounded`}>Contact</a>
                    </div>

                    <div className="flex-1 aspect-video shadow-lg rounded overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            src={reelLink}
                            aria-label={reelLabel}
                            sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox"
                            allowFullScreen
                        />
                    </div>
                </div>

                <div className="mt-12 px-4 flex flex-col items-center lg:items-start">
                    <h3 className={`${textColor} font-oswald text-4xl mb-2 uppercase`}>
                        See More!
                    </h3>
                    <div className={`w-full border-b ${borderColor} mb-4`} />
                    <span className={`${textColor} font-open-sans`}>
                        {seeMore && seeMore.split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                {i !== seeMore.split('\n').length - 1 && <br />}
                            </span>
                        ))}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default HomePageSection;
