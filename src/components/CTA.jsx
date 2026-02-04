import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Star } from 'lucide-react';

const CTA = () => {
  const whatsappMessage = encodeURIComponent(
    "Hola, quiero comenzar mi proyecto de presencia web profesional. ¿Cuáles son los siguientes pasos?"
  );
  const whatsappNumber = "5492915705322"; // Reemplazar con número real

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-1"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-accent-primary text-accent-primary" />
            ))}
            <span className="ml-2 text-text-secondary">5.0/5.0 satisfacción garantizada</span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Comencemos tu
            <br />
            <span className="text-gradient">presencia digital</span>
            <br />
            juntos
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary leading-relaxed"
          >
            Tu sitio profesional está listo para comenzar. 
            <br className="hidden md:block" />
            Hablemos sobre tu proyecto.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-4"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-accent-primary text-dark-bg font-semibold text-lg rounded-xl hover:bg-accent-primaryHover transition-all duration-300 hover:shadow-2xl hover:shadow-accent-primary/30 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Iniciar conversación</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 pt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-primary mb-2">24h</div>
              <div className="text-sm text-text-secondary">Primera respuesta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-primary mb-2">100%</div>
              <div className="text-sm text-text-secondary">Personalizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-primary mb-2">∞</div>
              <div className="text-sm text-text-secondary">Soporte</div>
            </div>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-8"
          >
            <p className="text-text-secondary text-sm">
              Sin compromiso. Conversamos sobre tu proyecto y vemos cómo podemos ayudarte.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
