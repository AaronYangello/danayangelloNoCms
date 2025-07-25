export default function ContactInfo({className, contactInfo}) {

    return (
        <div className={`flex flex-col items-center ${className}`}>
            <h2 className="text-3xl text-open-sans md:text-5xl text-white mb-8">Let's Chat!</h2>
            {contactInfo.map((info, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-white text-2xl font-bold text-open-sans my-6">{info.value}</h3>
                </div>
            ))}
        </div>
    );
}