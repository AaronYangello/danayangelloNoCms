import NavBar from '@/components/NavBar';

export default function GalleryHeader({
    pageName,
    portraitPaths
}) {
    return (
        <header className='relative min-h-[350px] py-8 bg-dark-gray'>
            <div className="absolute top-0 right-0 z-10">
                <NavBar 
                    activeItem={pageName} 
                    textColor='text-white'
                    textHoverColor='text-gray-400'/>
            </div>
            <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-center md:items-start md:space-y-0 md:space-x-10 w-[90%] max-w-5xl mx-auto pt-12 px-8">

                {portraitPaths && portraitPaths.map((path, index) => (
                    <img
                        key={index}
                        src={path}
                        alt={`Portrait ${index + 1}`}
                        className="w-64 h-80 object-cover flex-shrink-0 rounded shadow-md" />
                ))}
            </div>
        </header>
    );
}