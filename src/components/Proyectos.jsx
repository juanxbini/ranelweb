import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import proyectosData from '../data/proyectos.json';

const Proyectos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    // Usar las rutas directamente desde el JSON
    // Las imágenes deben estar en public/projects/
    setProyectos(proyectosData);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === proyectos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? proyectos.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="proyectos" className="py-24 px-6 relative">
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
            Proyectos
            <span className="text-gradient"> Destacados</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Algunos de los trabajos recientes donde he ayudado a profesionales y empresas a tener una presencia digital sólida.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {proyectos.map((proyecto, index) => (
                <div key={proyecto.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-dark-card border border-border rounded-2xl overflow-hidden group hover:border-accent-primary/30 transition-all duration-300"
                  >
                    {/* Project Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      {proyecto.imagen ? (
                        <>
                          <img 
                            src={proyecto.imagen} 
                            alt={proyecto.nombre}
                            className="w-full h-full object-cover object-top"
                          />
                          {/* Overlay on hover */}
                          <a 
                            href={proyecto.enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 bg-dark-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                          >
                            <span className="text-accent-primary font-medium">Ver proyecto</span>
                          </a>
                        </>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="w-16 h-16 rounded-lg bg-accent-primary/20 flex items-center justify-center mx-auto">
                              <ExternalLink className="w-8 h-8 text-accent-primary" />
                            </div>
                            <p className="text-text-secondary text-sm">Imagen del proyecto</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300">
                        {proyecto.nombre}
                      </h3>
                      
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {proyecto.descripcion}
                      </p>

                      {/* CTA Button */}
                      <motion.a
                        href={proyecto.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary/10 border border-accent-primary/20 rounded-lg hover:bg-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300 group"
                      >
                        <span className="text-sm font-medium text-accent-primary">Ver proyecto</span>
                        <ExternalLink className="w-4 h-4 text-accent-primary group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-dark-card border border-accent-primary/20 rounded-full flex items-center justify-center hover:bg-accent-primary/10 hover:border-accent-primary/40 transition-all duration-300 z-10"
            aria-label="Anterior proyecto"
          >
            <ChevronLeft className="w-5 h-5 text-accent-primary" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-dark-card border border-accent-primary/20 rounded-full flex items-center justify-center hover:bg-accent-primary/10 hover:border-accent-primary/40 transition-all duration-300 z-10"
            aria-label="Siguiente proyecto"
          >
            <ChevronRight className="w-5 h-5 text-accent-primary" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {proyectos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent-primary w-8' 
                  : 'bg-accent-primary/30 hover:bg-accent-primary/50'
              }`}
              aria-label={`Ir al proyecto ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-6">
            ¿Tienes un proyecto en mente? 
            <span className="text-accent-primary font-medium"> Hablemos sobre cómo puedo ayudarte.</span>
          </p>
          <motion.a
            href="https://wa.me/5492915705322?text=Hola,%20vengo%20desde%20la%20web%20y%20quiero%20consultar%20sobre%20un%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-dark-bg rounded-lg hover:bg-accent-primary/90 transition-all duration-300 shadow-lg shadow-accent-primary/30 hover:shadow-xl hover:shadow-accent-primary/40"
          >
            <span className="font-medium">Consultar por mi proyecto</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Proyectos;
