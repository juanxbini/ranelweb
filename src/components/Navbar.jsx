import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Navbar = () => {
  const whatsappMessage = encodeURIComponent(
    "Hola, vengo desde la web y quiero consultar sobre sus servicios."
  );
  const whatsappNumber = "5492915705322";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <span className="text-xl font-bold text-gradient">Ranel Web</span>
          </motion.div>

          {/* Nav Links */}
          <div className="flex items-center gap-4">
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              href="#proyectos"
              className="text-text-secondary hover:text-accent-primary transition-colors duration-300 text-sm font-medium"
            >
              Proyectos
            </motion.a>

            {/* CTA Button */}
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent-primary/10 border border-accent-primary/20 rounded-lg hover:bg-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4 text-accent-primary" />
              <span className="text-sm font-medium text-accent-primary">WhatsApp</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
