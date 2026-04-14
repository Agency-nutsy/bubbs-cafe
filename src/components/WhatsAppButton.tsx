import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import whatsappLogo from "@/assets/whatsapp-logo.jpeg";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
    {/* Get Directions Button */}
    <motion.a
      href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwi4y5zGje2TAxUAAAAAHQAAAAAQCQ..i&sca_esv=829b6725c1213f11&pvq=Cg0vZy8xMXoydGZyYm1mIhAKCmJ1YmJzIGNhZmUQAhgD&lqi=ChhidWJicyBjYWZlIHNhdHlhIG5pa2V0YW5I7dTulou-gIAIWi4QABABGAAYARgCGAMiGGJ1YmJzIGNhZmUgc2F0eWEgbmlrZXRhbioGCAIQABABkgELY29mZmVlX3Nob3A&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x390d1d007e857947:0xe6aa3c93d75f1a0e"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Directions"
      className="rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-shadow flex items-center justify-center bg-blue-600 text-white w-14 h-14 sm:w-16 sm:h-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MapPin size={28} />
    </motion.a>

    {/* WhatsApp Button */}
    <motion.a
      href="https://wa.me/919990613558"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Us"
      className="rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow overflow-hidden w-14 h-14 sm:w-16 sm:h-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={whatsappLogo} alt="WhatsApp" className="w-full h-full object-cover rounded-full" />
    </motion.a>
  </div>
);

export default FloatingButtons;