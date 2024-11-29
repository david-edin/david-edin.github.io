import "./globals.css";
import Navigation from "./components/navigation";

// Metadata
export const metadata = {
  title: "david-edin",
  description: "intro to webcoding",
};

export default function RootLayout({
  children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
