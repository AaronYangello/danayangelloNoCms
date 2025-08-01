'use client';

import { useState } from 'react';

export default function VideoItem({ thumbnail, alt, videoUrl, className = '' }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`relative ${className}`}>
            {/* Thumbnail + overlay button */}
            <button
                onClick={() => setOpen(true)}
                className="relative block w-full overflow-hidden rounded shadow-lg"
            >
                <img
                    src={thumbnail}
                    alt={alt}
                    className="w-full h-auto object-cover"
                />
                <div 
                    className="absolute inset-0 bg-black/40 hover:bg-black/60 transition"
                    style={{
                        backgroundImage: `url(/img/thumbnails/overlay-white.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
            </button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setOpen(false)}
                    /> 

                    {/* Modal container */}
                    <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4">
                        {/* 16:9 iframe */}
                        <div className="relative pb-[56.25%]">
                            <iframe
                                className="absolute inset-0 w-full h-full rounded-t-lg"
                                src={videoUrl}
                                title="Video replay"
                                allowFullScreen
                            />
                        </div>

                        {/* Footer with Close button */}
                        <div className="p-4 flex justify-center">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
