import Head from "next/head";
import Nav from "components/nav";
import Link from "next/link";
import RightSidebar, {useToolbar} from "components/rightSidebar";

export default function IndexPage() {
  const toolbarOptions = useToolbar();
  return (
    <>
      <Head>
        <title>Open PPE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav toolbarOptions={toolbarOptions}/>
      <RightSidebar toolbarOptions={toolbarOptions}/>
      <main>
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
    </>
  );
}
