import { motion } from "framer-motion";

export const MySkills = ({ n, x, y }) => {
  <motion.div
    className="flex items-center justify-center rounded-full bg-black text-white font-semibold absolute cursor-pointer py-3 px-6 shadow-black lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3"
    whileHover={{ scale: 1.06 }}
    initial={{ x: 0, y: 0 }}
    animate={{ x: x, y: y }}
    transition={{ duration: 1.5 }}
  >
    {n}
  </motion.div>;
};
