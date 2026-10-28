import { motion } from "framer-motion";
import Navbar from "../../components/partials/Navbar";
import SignInContent from "../../components/signinpage/SignInContent";
import Footer from "../../components/partials/Footer";

export default function SignIn() {
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <SignInContent />
      <Footer />
    </motion.div>
  );
}
