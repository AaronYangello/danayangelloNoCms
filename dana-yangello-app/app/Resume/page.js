import '@/styles/globals.css'; 
import Header from '@/components/Header';

export default function Home() {

    return (
        <html lang="en">
            <body>
                <Header
                    pageName="Resume"
                    title="Dana Yangello"
                    subtitle=""
                    backgroundImgPath="/img/resume-header-bg.jpg"
                />
                <div className="w-[90%] mx-auto max-w-[1200px] flex flex-col items-center">
                    <h1 className="text-3xl font-bold mt-8">Resume</h1>
                    <p className="mt-4">Download my resume as a PDF:</p>
                    <a href="/files/dana-yangello-resume.pdf" className="text-blue-500 underline mt-2">Download Resume</a>
                </div>
            </body>
        </html>
    );
}