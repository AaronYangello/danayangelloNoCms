import '@/styles/globals.css';
import ResumeHeader from '@/app/Resume/ResumeHeader';

export default function Resume() {
    const headerDetails = {
        pageName: "Resume",
        title: "Resume",
        subtitle: "",
        backgroundImgPath: "/img/resume-header-bg.jpg"
    };

    const pdfUrl = "https://drive.google.com/file/d/1M7Ou7mDQtVdrpJXuMfz1ItnHpkaFyHH4/preview";

    return (
        <html lang="en">
            <body className="bg-dark-gray">
                <ResumeHeader
                    pageName={headerDetails.pageName}
                    title={headerDetails.title}
                    subtitle={headerDetails.subtitle}
                    backgroundImgPath={headerDetails.backgroundImgPath}
                />

                <div className="w-[90%] max-w-[1600px] mx-auto py-8">
  <div
    className="
      flex flex-col-reverse            /* column by default */
      md:flex-row             /* row from md up */
      items-center            /* center items horizontally on mobile */
      md:items-stretch        /* stretch items vertically on md+ */
      gap-8
    "
  >
    {/* ── Left Column ── */}
    <div className="flex flex-col gap-8 md:w-[300px] flex-shrink-0">
      <img
        src="/img/Resume1.jpg"
        alt="Headshot 1"
        className="w-full h-auto object-cover rounded shadow-md"
      />
      <img
        src="/img/Resume2.jpg"
        alt="Headshot 2"
        className="w-full h-auto object-cover rounded shadow-md"
      />
    </div>

    {/* ── Right Column ── */}
    <div className="flex-1">
      <iframe
        src={pdfUrl}
        className="w-full h-[400px] md:h-full rounded shadow-md"
        title="Resume PDF"
        loading="lazy"
      />
    </div>
  </div>
</div>


            </body>
        </html>
    );
}
