import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2021',
    title: 'INITIAL CONTACT',
    description: 'First transmission intercepted. Underground recognition established.',
  },
  {
    year: '2022',
    title: 'ESCALATION',
    description: 'Multiple high-impact releases. Regional threat level increased.',
  },
  {
    year: '2023',
    title: 'TACTICAL EXPANSION',
    description: 'Viral disruption via visual intel. Operations scaled nationally.',
  },
  {
    year: '2024',
    title: 'CRITICAL MASS',
    description: 'Major platform infiltration. Millions of compromised audio systems.',
  },
  {
    year: '2025',
    title: '████████ REDACTED',
    description: 'Current operation active. Full spectrum dominance in progress.',
  },
];

export const Timeline = () => {
  return (
    <section className="relative w-full py-24 bg-black z-20 border-t border-primary/20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white">
            <span className="glitch" data-text="OPERATION DOSSIER">OPERATION DOSSIER</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-primary/30 ml-4 md:ml-0 md:left-1/2 md:-translate-x-[0.5px]">
          {timelineEvents.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`relative mb-12 flex flex-col md:flex-row ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              } group`}
            >
              {/* Pulse Dot */}
              <div className="absolute left-[-5px] md:left-1/2 top-0 md:-translate-x-1/2 w-3 h-3 bg-black border-2 border-primary rounded-full group-hover:bg-primary transition-colors z-10 shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
              
              <div className="ml-8 md:ml-0 md:w-1/2 px-6">
                <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} bg-card border border-primary/10 p-6 hover:border-primary/50 transition-colors relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rotate-45 translate-x-8 -translate-y-8" />
                  
                  <span className="font-sans text-primary font-bold text-xl mb-2 tracking-widest bg-black/50 px-2 py-1 inline-block">
                    {item.year === '2025' ? <span className="bg-primary text-black px-1">2025</span> : item.year}
                  </span>
                  
                  <h3 className="font-display text-2xl text-white mb-2 tracking-wide uppercase">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-muted-foreground text-sm uppercase leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
