import Head from "next/head";
import Nav from "../components/nav";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="container">
      <Head>
        <title>Open PPE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <div className="hero flex-center">
          <img src="/Logox2.png" alt="logo" />
          <h2 className="text-lg font-semibold">
            Share resources with those who need them the most
          </h2>
          <Link href="/browse">
            <a className="rounded bg-gray-800 text-white py-2 px-4 hover:opacity-75 mt-4">
              Browse Requests
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
