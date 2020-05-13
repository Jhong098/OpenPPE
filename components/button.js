import Link from "next/link";

export function StyledButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-primary hover:bg-dark_primary text-primary_text py-2 px-4 mx-2 rounded"
    >
      {children}
    </button>
  );
}

export function StyledLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="bg-primary hover:bg-dark_primary text-primary_text py-2 px-4 mx-2 rounded">
        {children}
      </a>
    </Link>
  );
}
