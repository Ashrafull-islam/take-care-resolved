import { Lexend,Castoro  } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Page";

export const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",    
  weight: ["300"],  
});

export const castoro = Castoro({
  subsets: ["latin"],          
  display: "swap",   
  weight: ["400"],  
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${castoro.className} ${lexend.className} antialiased`}
      >
        <div>
        <NavBar></NavBar>
        </div>
        <div>
        {children}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
