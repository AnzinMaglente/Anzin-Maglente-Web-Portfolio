import { motion } from "framer-motion";
import Navbar from "../../components/partials/Navbar";
import ProfileContent from "../../components/profilepage/ProfileContent";
import Footer from "../../components/partials/Footer";

export default function Profile() {
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <ProfileContent />
      <Footer />
    </motion.div>
  );
}
