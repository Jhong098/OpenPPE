import Card from "components/requestCard";

export default function BrowseGrid({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {data.map((item, i) => (
        <Card key={i} data={item} />
      ))}
    </div>
  );
}
