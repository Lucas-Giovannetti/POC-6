import Head from "next/head";
import localFont from "next/font/local";
import AppHome from "../components/AppHome/AppHome";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export default function Home() {
  return (
    <>
      <Head>
        <title>Mack Film</title>
        <meta name="description" content="Projeto Mack film" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <AppHome/>
      </div>
    </>
  );
}
