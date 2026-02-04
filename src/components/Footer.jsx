import { motion } from 'framer-motion';
import { Mail, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const whatsappMessage = encodeURIComponent("Hola, vengo desde la web y quiero consultar sobre sus servicios.");
  const whatsappNumber = "5492915705322"; // Reemplazar con número real
  const email = "ranelnotfound@gmail.com"; // Reemplazar con email real

  return (
    <footer className="py-16 px-6 border-t border-dark-border relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">Ranel Web</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Presencia web profesional para independientes. 
              Diseño, desarrollo y estrategia digital con criterio y claridad.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent-primary" />
              <span className="text-sm text-text-secondary">Disponible para proyectos</span>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-text-primary mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-text-secondary hover:text-accent-primary transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{email}</span>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-accent-primary transition-colors duration-300 group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Quick info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-text-primary mb-4">Información</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-secondary">
                <Globe className="w-4 h-4" />
                <span>Servicios globales</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-4 h-4 rounded-full bg-accent-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent-primary" />
                </div>
                <span>Tiempo de respuesta: 24h</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-text-secondary text-sm">
            © {currentYear} Ranel Web. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-text-secondary text-sm">
              Hecho con 
              <span className="text-accent-primary mx-1">♥</span> 
              para profesionales
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
