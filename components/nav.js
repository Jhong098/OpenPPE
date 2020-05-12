import Link from "next/link";

const links = [
  { href: "https://github.com/zeit/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex flex-wrap justify-between items-center text-white bg-primary p-2 h-16">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/browse">
            <a className="text-blue-500 no-underline">Browse</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
