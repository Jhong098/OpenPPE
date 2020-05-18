import Card from "components/requestCard";
import { useState, useRef } from "react";
import DetailsPanel from "./detailsPanel";
import { AnimatePresence } from "framer-motion";
import useOnClickOutside from "utils/hooks/useClickOutside";

export default function RequestGrid({
  data,
  canEdit = false,
  handleDelete = () => {},
}) {
  const [selectedCard, setSelectedCard] = useState(null);
  const ref = useRef();

  useOnClickOutside(ref, () => setSelectedCard(null));

  return (
    <>
      <AnimatePresence>
        {selectedCard !== null && (
          <div ref={ref}>
            <DetailsPanel>
              <Card
                isExpanded
                data={data[selectedCard]}
                canEdit={canEdit}
                handleDelete={handleDelete}
              />
            </DetailsPanel>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {data.map((item, i) => (
          <div key={i} onClick={() => setSelectedCard(i)}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </>
  );
}
