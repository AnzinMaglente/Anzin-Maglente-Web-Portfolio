import { motion } from "framer-motion";
import Navbar from "../../components/partials/Navbar";
import AdminContent from "../../components/adminpage/AdminContent";
import Footer from "../../components/partials/Footer";

export default function Admin() {
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <AdminContent />
      <Footer />
    </motion.div>
  );
}
