import "./globals.css";
import { FavoritesProvider } from "./context/FavoritesContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FavoritesProvider>{children}</FavoritesProvider>
      </body>
    </html>
  );
}
