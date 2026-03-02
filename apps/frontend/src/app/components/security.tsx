'use client';
import { motion } from "motion/react";
import { Lock, Eye, FileText, ShieldCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Zero-trust security",
    description: "End-to-end encryption, hardware security modules, and multi-party computation.",
  },
  {
    icon: Eye,
    title: "Full auditability",
    description: "Immutable transaction history on public ledger. Real-time compliance dashboards.",
  },
  {
    icon: FileText,
    title: "Regulatory compliance",
    description: "SOC 2 Type II, ISO 27001, GDPR. Licensed MSB with FinCEN registration.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance & guarantees",
    description: "Up to $100M in custodial insurance. 99.99% uptime SLA with financial penalties.",
  },
];

export function Security() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Institutional-grade security
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Built to meet the highest standards for regulated financial institutions and enterprises.
          </motion.p>
        </div>

        {/* Security grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="flex gap-6 p-6 sm:p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl relative overflow-hidden group"
            >
              {/* Animated glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              
              <div className="flex-shrink-0">
                <motion.div 
                  className="p-3 bg-white/5 rounded-lg relative z-10"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(255,255,255,0)',
                      '0 0 20px 5px rgba(255,255,255,0.1)',
                      '0 0 0 0 rgba(255,255,255,0)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <feature.icon className="size-6 text-white" />
                </motion.div>
              </div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div 
          className="p-8 sm:p-10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Animated background pulse */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          
          <div className="text-center mb-8 relative z-10">
            <div className="text-sm text-neutral-500 mb-2">Certified & Compliant</div>
            <div className="text-neutral-400 flex items-center justify-center gap-2">
              Trusted by regulated institutions worldwide
              <span className="px-2 py-0.5 bg-white/10 border border-white/20 rounded text-xs text-white">
                Coming soon
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-12 relative z-10">
            {["SOC 2 Type II", "ISO 27001", "GDPR", "FinCEN MSB"].map((cert, index) => (
              <motion.div
                key={cert}
                className="px-4 sm:px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-mono text-xs sm:text-sm relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  borderColor: 'rgba(255,255,255,0.3)',
                  y: -4,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
                <span className="relative z-10">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
