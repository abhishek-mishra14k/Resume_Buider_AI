import { motion } from "framer-motion";

function Card({
  children,
  className = "",
  hover = true,
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
            }
          : {}
      }
      transition={{ duration: 0.25 }}
      className={`
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-lg
        p-8
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default Card;