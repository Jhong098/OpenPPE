import { motion } from "framer-motion";

const DetailsPanel = ({ children }) => {
  return (
    <motion.div
      className="absolute z-20 right-0 top-0 h-full w-2/5"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default DetailsPanel;
