import NavBar from '@/components/NavBar';

export default function HomePageHeader ({
    pageName, 
    title, 
    subtitle, 
    backgroundImgPath
}) {
    return (
        <header className='relative min-h-[350px] py-8'>
            <div 
                className="w-full h-full bg-no-repeat bg-cover absolute inset-0 z-0 justify-right"
                style={{
                    backgroundImage: `url(${backgroundImgPath})`,
                    backgroundPosition: "center center"
                }}
            ></div>
            <div className="absolute top-0 right-0 z-50">
                <NavBar activeItem={pageName} />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center mt-[150px] h-full text-dark-primary">
                <h1 className="pb-0 font-oswald text-[60pt] uppercase">{title}</h1>
                <div className="h-3 w-[90%] max-w-[1200px] bg-dark-gray mb-4" />
                {subtitle && <p className="font-open-sans text-base">{subtitle}</p>}
            </div>
        </header>
    );
}