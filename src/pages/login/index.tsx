import { motion } from "framer-motion";
import Navbar from "../../components/partials/Navbar";
import AuthContent from "../../components/loginpage/LoginContent";
import Footer from "../../components/partials/Footer";

export default function Login() {
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <AuthContent />
      <Footer />
    </motion.div>
  );
}
