import Head from "next/head";
import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <div className="container">
      <Head>
        <title>Open PPE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <div className="hero">
          <h1 className="title">Next.js + Tailwind CSS</h1>
        </div>
      </main>
    </div>
  );
}
