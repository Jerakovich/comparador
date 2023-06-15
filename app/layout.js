import "./globals.css";

import Image from 'next/image';
import Search from "./components/Search";
import Head from 'next/head';
import Link from 'next/link';


<Head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
</Head>


export const metadata = {
    title: "MonKeys",
    description: "a",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
          <body>
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh"
            }}>
            <h1 style={{
                fontSize: "3rem",
                backgroundImage: "linear-gradient(to right, blue, purple)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
                margin: "0",
                fontFamily: "Gótica, 'Old English', serif" // Cambia esta línea con el tipo de letra que desees
            }}>
                MonKeys
            </h1>
              <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem"
              }}>
                <Image src="/image/mon.png" width={300} height={50} />
              </div>
              <br />
              <h1 style={{
                fontSize: "2rem",
                backgroundImage: "linear-gradient(to right, blue, purple)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
                margin: "0",
                fontFamily: "Gótica, 'Old English', serif" 
              }}>
                 Comparador de keys a tu disposición
              </h1>
            </div>
            {/*<Search />*/}
            <Link href="../page">
            </Link>
            {children}
          </body>
        </html>
      );
      
}
