import { motion } from 'framer-motion';
import { 
  Gauge, 
  Eye, 
  Headphones, 
  Sparkles,
  Shield,
  Clock
} from 'lucide-react';

const Beneficios = () => {
  const beneficios = [
    {
      icon: Gauge,
      title: "Performance Extrema",
      description: "Sitios que cargan en menos de 2 segundos con puntuación perfecta en Google PageSpeed.",
      metric: "100+",
      metricLabel: "Puntuación Lighthouse"
    },
    {
      icon: Eye,
      title: "Diseño Impactante",
      description: "Interfaces memorables que destacan tu profesionalismo y generan confianza instantánea.",
      metric: "100%",
      metricLabel: "Diseño original"
    },
    {
      icon: Headphones,
      title: "Soporte Continuo",
      description: "Asistencia técnica permanente y actualizaciones para mantener tu sitio siempre óptimo.",
      metric: "24/7",
      metricLabel: "Disponibilidad"
    },
    {
      icon: Sparkles,
      title: "Código Premium",
      description: "Desarrollo con estándares internacionales, limpio, modular y fácil de mantener.",
      metric: "0",
      metricLabel: "Deudas técnicas"
    },
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "Protección contra vulnerabilidades y cumplimiento de las mejores prácticas de seguridad web.",
      metric: "SSL",
      metricLabel: "Certificado incluido"
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Proyectos completados en tiempo récord sin sacrificar la calidad del resultado final.",
      metric: "48h",
      metricLabel: "Tiempo promedio"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Beneficios
            <span className="text-gradient"> Exclusivos</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Más que un sitio web, una inversión en tu crecimiento profesional 
            con resultados medibles y soporte de primer nivel.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl border border-dark-border bg-dark-card/30 backdrop-blur-sm hover:border-accent-primary/30 transition-all duration-300 hover:bg-dark-card/50">
                
                {/* Icon container */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 flex items-center justify-center mb-6 group-hover:from-accent-primary/30 group-hover:to-accent-primary/20 transition-all duration-300">
                  <beneficio.icon className="w-7 h-7 text-accent-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-text-primary">
                  {beneficio.title}
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed text-sm">
                  Sitios optimizados para ofrecer la mejor experiencia a tus visitantes.
                </p>

                {/* Metric */}
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-bold text-accent-primary">
                    {beneficio.metric}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {beneficio.metricLabel}
                  </div>
                </div>
              </div>

              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-text-primary font-medium">
              Garantía de satisfacción: ajustes incluidos hasta estar conforme
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Beneficios;
