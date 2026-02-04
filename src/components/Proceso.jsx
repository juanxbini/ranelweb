import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Palette, 
  Code2, 
  Rocket,
  CheckCircle
} from 'lucide-react';

const Proceso = () => {
  const pasos = [
    {
      numero: "01",
      icon: MessageCircle,
      title: "Conversación Inicial",
      description: "Conocemos tus objetivos y definimos juntos el alcance del proyecto.",
      duracion: "30 min"
    },
    {
      numero: "02", 
      icon: Palette,
      title: "Diseño Conceptual",
      description: "Diseño y prototipado hasta que estés completamente satisfecho con el resultado.",
      duracion: "2-3 días"
    },
    {
      numero: "03",
      icon: Code2,
      title: "Desarrollo",
      description: "Implementación del diseño con código limpio y todas las funcionalidades acordadas.",
      duracion: "3-5 días"
    },
    {
      numero: "04",
      icon: Rocket,
      title: "Lanzamiento",
      description: "Publicamos tu sitio y lo optimizamos para máximo rendimiento. Te entrego todo el control.",
      duracion: "1 día"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
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
            Proceso de
            <span className="text-gradient"> Trabajo</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Un método claro y transparente para llevar tu presencia web 
            desde la idea hasta el lanzamiento en tiempo récord.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {pasos.map((paso, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Step card */}
                <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-2xl p-8 hover:border-accent-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/10 group">
                  
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent-primary text-dark-bg font-bold flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                    {paso.numero}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent-primary/20 transition-colors duration-300">
                    <paso.icon className="w-7 h-7 text-accent-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-text-primary">
                    {paso.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-4 leading-relaxed text-sm">
                    {paso.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-accent-primary text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>{paso.duracion}</span>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-accent-primary/20 bg-accent-primary/5 backdrop-blur-sm">
            <div className="text-3xl font-bold text-accent-primary">7-10</div>
            <div className="text-left">
              <div className="text-text-primary font-medium">Días totales</div>
              <div className="text-text-secondary text-sm">De concepto a lanzamiento</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Proceso;
