
import Header from "./components/header/Header";
import "./globals.css";

export const metadata = {
  title: "jcros-web",
  description: "developpeur web freelance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  );
}
