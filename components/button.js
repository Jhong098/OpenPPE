export default function Button({href, children}) {
  return (
    <button href={href} className="bg-primary text-primary_text py-2 px-4 mx-2 rounded">
        {children}
    </button>
  );
}
