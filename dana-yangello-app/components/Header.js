import NavBar from './NavBar';

const Header = ({pageName, title, subtitle, backgroundImgPath}) => {
    return (
        <header className='relative min-h-[20vh] py-8'>
            <div 
                className="w-full h-full bg-no-repeat bg-cover absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${backgroundImgPath})`,
                }}
            ></div>
            <div className="absolute top-0 right-0 z-10">
                <NavBar activeItem={pageName} />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-dark-primary mt-[150px]">
                <h1 className="pb-0 font-oswald text-[60pt] uppercase">{title}</h1>
                <div className="h-3 w-[90%] max-w-[1200px] bg-dark-gray mb-4" />
                {subtitle && <p className="font-open-sans text-base">{subtitle}</p>}
            </div>
        </header>
    );
}
export default Header;