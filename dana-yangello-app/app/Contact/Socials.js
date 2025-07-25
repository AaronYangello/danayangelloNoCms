export default function Socials({ className, socials }) {

    return (
        <div className={`${className} flex flex-col items-center`}>
            {socials.map((social, index) => (
                <a  className="m-4"
                    key={index} 
                    href={social.url}
                >
                    <img className="size-[150px] object-contain"
                        src={social.icon} 
                        alt={social.site} 
                    />
                </a>
            ))}
        </div>
    );
}