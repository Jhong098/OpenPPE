import Link from "next/link";

export function StyledButton({ onClick, children, classNames }) {
  return (
    <button
      onClick={onClick}
      className={
        classNames +
        " bg-primary hover:bg-dark_primary text-primary_text py-2 px-4 mx-2 rounded"
      }
    >
      {children}
    </button>
  );
}

export function StyledLink({ href, children, classNames = "" }) {
  return (
    <Link href={href}>
      <a
        className={
          classNames +
          " bg-primary hover:bg-dark_primary text-primary_text py-2 px-4 mx-2 rounded"
        }
      >
        {children}
      </a>
    </Link>
  );
}
