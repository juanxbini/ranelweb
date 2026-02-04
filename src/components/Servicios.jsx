import { motion } from 'framer-motion';
import { 
  Palette, 
  Code, 
  Zap, 
  Smartphone,
  ArrowRight
} from 'lucide-react';

const Servicios = () => {
  const whatsappNumber = "5492915705322"; // Reemplazar con número real
  const servicios = [
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Interfaces que reflejan tu identidad profesional y conectan con tu audiencia.",
      features: ["Diseño minimalista", "Experiencia intuitiva", "Identidad visual única"]
    },
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Desarrollo con código limpio y tecnologías actuales para resultados duraderos.",
      features: ["React & Next.js", "Tailwind CSS", "Optimización SEO"]
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Sitios optimizados para ofrecer una experiencia excepcional a tus visitantes.",
      features: ["Puntuación 100+", "Core Web Vitals", "Hosting optimizado"]
    },
    {
      icon: Smartphone,
      title: "Responsive Total",
      description: "Diseño adaptado perfectamente a todos los dispositivos, desde móviles hasta desktop.",
      features: ["Mobile-first", "Tablets", "Desktop"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios
            <span className="text-gradient"> Profesionales</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es una oportunidad para crear algo único y memorable.
            Combino diseño, tecnología y estrategia para resultados excepcionales.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full p-8 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-green-400/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-400/10">
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-green-400/10 flex items-center justify-center mb-6 group-hover:bg-green-400/20 transition-colors duration-300">
                  <servicio.icon className="w-8 h-8 text-green-400" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {servicio.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {servicio.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {servicio.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-text-secondary text-lg mb-8">
            ¿Listo para transformar tu presencia digital?
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accent-primary/30 bg-accent-primary/5">
            <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-sm text-accent-primary">Proyectos disponibles este mes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicios;
