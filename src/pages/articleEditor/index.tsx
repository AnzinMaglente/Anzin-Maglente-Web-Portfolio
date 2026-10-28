import { motion } from "framer-motion";
import Navbar from "../../components/partials/Navbar";
import ArticleEditorContent from "../../components/articleeditorpage/ArticleEditorContent";
import Footer from "../../components/partials/Footer";

export default function ArticleEditor() {
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <ArticleEditorContent />
      <Footer />
    </motion.div>
  );
}
