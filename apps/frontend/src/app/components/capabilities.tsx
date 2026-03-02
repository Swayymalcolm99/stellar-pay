'use client';
import { motion } from "motion/react";
import { Send, ArrowLeftRight, RefreshCw, Shield, FileCheck, Webhook } from "lucide-react";

const capabilities = [
  {
    icon: Send,
    title: "Instant Payments",
    description: "Cross-border settlements in 3-5 seconds with finality. Support for 180+ fiat corridors and digital assets.",
  },
  {
    icon: ArrowLeftRight,
    title: "On/Off Ramps",
    description: "Seamless fiat-to-crypto conversion with regulated banking partners. Instant liquidity for your users.",
  },
  {
    icon: RefreshCw,
    title: "Subscriptions",
    description: "Programmable recurring payments with built-in retry logic and dunning management. Full lifecycle control.",
  },
  {
    icon: Shield,
    title: "Escrow & Custody",
    description: "Multi-signature escrow accounts with time locks and conditional releases. Non-custodial by default.",
  },
  {
    icon: FileCheck,
    title: "Compliance Engine",
    description: "Real-time AML/KYC screening, transaction monitoring, and reporting. SOC 2 Type II certified.",
  },
  {
    icon: Webhook,
    title: "Webhooks & Events",
    description: "Real-time event streaming with guaranteed delivery. Idempotent API design with automatic retries.",
  },
];

export function Capabilities() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            End-to-end payment infrastructure
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Every primitive you need to build global payment systems. 
            Production-ready APIs, predictable pricing, zero vendor lock-in.
          </motion.p>
        </div>

        {/* Capabilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 sm:p-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-2xl hover:border-white/10 transition-colors relative overflow-hidden"
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <motion.div 
                className="inline-flex p-3 bg-white/5 rounded-lg mb-5 group-hover:bg-white/10 transition-colors relative z-10"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                <capability.icon className="size-6 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-medium mb-3 relative z-10">{capability.title}</h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed relative z-10">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
