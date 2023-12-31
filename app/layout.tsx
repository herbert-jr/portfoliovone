import Footer from "./components/footer";
import Header from "./components/header";
import { AppProvider } from "./context";
import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herbert Junior | Desenvolvedor Front-End React",
  description: "Desenvolvedor Front-End, apaixonado por tecnologia e inovação.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
