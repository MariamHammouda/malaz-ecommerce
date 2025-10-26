import "./globals.css";
import Providers from "./providers.js";

export const metadata = {
  title: "Malaz E-commerce Admin",
  description: "Admin panel for Malaz E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}