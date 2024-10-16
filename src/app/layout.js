
import "./globals.css";


export const metadata = {
  title: "Blob by Morphio",
  description: "Developed by Morphio Templates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/png"
        href="favicon/favicon-48x48.png"
        sizes="48x48"
      />
      <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="Blob" />
      <link rel="manifest" href="favicon/site.webmanifest" />

      <meta name="apple-mobile-web-app-title" content="Blob" />
      <link rel="manifest" href="favicon/site.webmanifest" />
      <body>{children}</body>
    </html>
  );
}
