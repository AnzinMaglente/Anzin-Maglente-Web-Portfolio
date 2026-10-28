import { motion } from "framer-motion";
import NavBar from "../../components/partials/Navbar";
import IndexContent from "../../components/homepage/IndexContent";
import Footer from "../../components/partials/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <IndexContent />
      <Footer />
    </motion.div>
  );
}
