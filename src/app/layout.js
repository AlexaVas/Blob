
import "./globals.css";


export const metadata = {
  title: "Blob by Morphio",
  description: "Developed by Morphio Templates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}
      </body>
    </html>
  );
}
