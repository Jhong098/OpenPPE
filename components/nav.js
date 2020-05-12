import Link from "next/link";
import Button from "components/button"

const links = [
  { href: "/", label: "Home" },
  { href: "/browse", label: "Browse" },
  { href: "/requests", label: "Requests" },
];

export default function Nav() {
  return (
    <nav className="flex flex-wrap justify-between items-center text-white bg-dark_primary px-8 h-16">
      <ul className="flex items-center">
        {links.map((link)=>(
            <li key={link.label} className="px-4">
                <Link href={link.href}>
                    <a>{link.label}</a>
                </Link>
            </li>
        ))}
      </ul>
      <div>
        <Button href='#'>Signup</Button>
        <Button href='#'>Login</Button>
      </div>
    </nav>
  );
}
