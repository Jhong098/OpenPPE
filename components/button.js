export default function Button({onClick, children}) {
  return (
    <button onClick={onClick} className="bg-primary hover:bg-dark_primary text-primary_text py-2 px-4 mx-2 rounded">
        {children}
    </button>
  );
}
