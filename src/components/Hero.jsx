import { motion } from 'framer-motion';
import { ArrowRight, Globe, Zap } from 'lucide-react';

const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    "Hola, estoy interesado en crear mi presencia web profesional. ¿Podemos conversar?"
  );
  const whatsappNumber = "5492915705322";

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-dark-bg/95 z-0" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent-primary/20 bg-dark-card/50 backdrop-blur-sm"
          >
            <Zap className="w-4 h-4 text-accent-primary" />
            <span className="text-sm text-text-secondary">Sitios web para profesionales independientes</span>
          </motion.div>

          {/* Main headline - SEO optimized H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Tu presencia digital
            <br />
            <span className="text-gradient">con criterio</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Mostrá tu trabajo con una web profesional que inspire confianza.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent-primary text-dark-bg font-semibold rounded-lg hover:bg-accent-primaryHover transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/25"
            >
              <span>Comenzar proyecto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-2 text-text-secondary">
              <Globe className="w-5 h-5" />
              <span className="text-sm">Sitios 100% originales</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-primary mb-2">100%</div>
              <div className="text-sm text-text-secondary">Responsive</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-primary mb-2">Ágil</div>
              <div className="text-sm text-text-secondary">Plazos optimizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-primary mb-2">∞</div>
              <div className="text-sm text-text-secondary">Soporte</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
