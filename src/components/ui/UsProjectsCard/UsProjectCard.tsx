import { useState } from "react";
import Title from "../title/Title";
import { motion } from "framer-motion";
export default function UsProjectCard({
  index,
  image,
  title,
  smallDescription,
}: {
  index: number;
  image: string;
  title: string;
  smallDescription: string;
}) {
  const [expandingIndex, setExpandingIndex] = useState(-1);
  const handleCardClick = (index: number) => {
    setExpandingIndex(index === expandingIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "210px",
    },
  };

  return (
    <motion.div
      className={`cursor-pointer h-[700px] bg-cover bg-center ${
        index === expandingIndex ? "expanded" : ""
      }`}
      variants={cardVariants}
      initial="collapsed"
      animate={index === expandingIndex ? "expanded" : "collapsed"}
      transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
      onClick={() => handleCardClick(index)}
      style={{ backgroundImage: `${image}` }}
    >
      <div className="card-content h-full flex flex-col justify-end">
        {index === expandingIndex && (
          <motion.div
            className="w-full h-full bg-gradient-to-t from-[#2F2E33] flex flex-col items-center justify-end "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.1 }}
          >
            <Title className="font-regular text-center text-5xl text-[#D5D6D2]">
              {title}
            </Title>
            <p className="font-light my-5 mx-12 text-center text-[18px] text-[#D5D6D2]">
              {smallDescription}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
