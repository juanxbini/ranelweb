import { motion } from 'framer-motion';
import { Code, User, Target, Award } from 'lucide-react';

const SobreMi = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre
            <span className="text-gradient"> Mí</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            El profesional detrás de Ranel Web
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-text-primary">
                Juan Cruz Bini
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Trabajo creando presencia web clara y profesional para personas que necesitan mostrarse bien en internet y transmitir confianza desde el primer contacto.
              </p>

              <p className="text-text-secondary leading-relaxed">
                Desde 2019 construyo proyectos digitales con una mirada integral: sitios que no solo se ven bien, sino que funcionan, son claros y tienen sentido para quien los usa.
              </p>

              <p className="text-text-secondary leading-relaxed">
                Me involucro en cada proyecto entendiendo el contexto, el objetivo y el valor real de cada profesional. A partir de ahí diseño y desarrollo una web que represente eso de forma simple, ordenada y profesional.
              </p>

              <p className="text-text-secondary leading-relaxed">
                No trabajo con soluciones genéricas ni plantillas sin criterio. Cada sitio está pensado para durar, adaptarse y acompañar el crecimiento del negocio.
              </p>

              <p className="text-text-secondary leading-relaxed font-medium">
                Mi rol es ayudarte a tener una presencia digital sólida, que comunique quién sos y genere confianza real.
              </p>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent-primary" />
                  </div>
                  <span className="text-text-primary font-medium">Enfoque Humano</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                    <Code className="w-5 h-5 text-accent-primary" />
                  </div>
                  <span className="text-text-primary font-medium">Código Limpio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-accent-primary" />
                  </div>
                  <span className="text-text-primary font-medium">Diseño Intuitivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent-primary" />
                  </div>
                  <span className="text-text-primary font-medium">Calidad Garantizada</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Avatar/Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Placeholder for avatar */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 border border-accent-primary/30 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-accent-primary/20 flex items-center justify-center mx-auto overflow-hidden border-2 border-accent-primary/50">
                    <img 
                      src="/src/assets/perfil.png" 
                      alt="Juan Cruz Bini - Ranel Web"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-text-primary font-semibold">Juan Cruz Bini</p>
                    <p className="text-text-secondary text-sm">Desarrollador Web & Diseñador</p>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary/10 to-transparent blur-xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Experience highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl border border-accent-primary/20 bg-accent-primary/5 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-primary">2019</div>
              <div className="text-sm text-text-secondary">Experiencia desde</div>
            </div>
            <div className="w-px h-12 bg-accent-primary/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-primary">100%</div>
              <div className="text-sm text-text-secondary">Proyectos personalizados</div>
            </div>
            <div className="w-px h-12 bg-accent-primary/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-primary">∞</div>
              <div className="text-sm text-text-secondary">Acompañamiento</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SobreMi;
