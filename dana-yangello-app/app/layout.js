export const metadata = {
  title: "Dana Yangello",
  description: "A description for SEO",
  icons: {
    icon: '/img/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}