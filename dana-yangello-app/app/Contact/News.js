export default function News({ className, news}) {
    return (
        <div className={`flex flex-col items-center w-[79%] mx-auto mt-16 p-10 border-2 border-solid rounded-xl ${className}`}>
            <h2 className="text-2xl text-open-sans md:text2xl text-white mb-8">In the News</h2>
            {news.map((item, index) => (
                <div key={index} className="mb-8">
                    <h3 className="text-white text-xl font-bold text-open-sans my-6">{item.title}</h3>
                    <div className="flex flex-col lg:flex-row">
                        <img className="w-full md:w-[20%] md:min-w-[140px] object-cover rounded-lg shadow-lg mb-4"
                            src={item.image}
                            alt={item.atl}  
                        />
                        <p className="text-white text-lg text-open-sans lg:ml-8 w-full">{item.preview}</p>
                    </div>
                    <p className="text-white text-sm hover:italic text-open-sans mt-2 text-center"><a className="text-white bold" href={item.url} target="_blank" rel="noopener noreferrer">Read more!</a></p>
                </div>
            ))}
        </div>
    );
}