import { motion } from "framer-motion";
import Navbar from "../../components/partials/Navbar";
import ArticleContent from "../../components/articlepage/articleContent";
import Footer from "../../components/partials/Footer";

export default function Article() {
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <ArticleContent />
      <Footer />
    </motion.div>
  );
}
