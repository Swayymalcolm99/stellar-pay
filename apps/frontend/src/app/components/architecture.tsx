'use client';
import { motion } from "motion/react";
import { Zap, Database, Network, CheckCircle2 } from "lucide-react";

const flowData = [
  {
    stage: "Client Layer",
    icon: Zap,
    items: ["REST API Request", "WebSocket Connection", "SDK Integration"],
    color: "from-white/10 to-white/5",
  },
  {
    stage: "StellarPay Infrastructure",
    icon: Database,
    items: ["Authentication & Validation", "Transaction Assembly", "Smart Routing"],
    color: "from-white/[0.15] to-white/10",
  },
  {
    stage: "Stellar Network",
    icon: Network,
    items: ["Consensus Protocol", "Distributed Ledger", "Asset Anchoring"],
    color: "from-white/20 to-white/[0.15]",
  },
  {
    stage: "Settlement & Finality",
    icon: CheckCircle2,
    items: ["On-chain Confirmation", "Webhook Delivery", "Audit Logging"],
    color: "from-white/10 to-white/5",
  },
];

export function Architecture() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 border-t border-white/5 overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Built on open infrastructure
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transparent architecture with no black boxes. Every transaction is verifiable on-chain with full auditability.
          </motion.p>
        </div>

        {/* Enhanced flow visualization */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {flowData.map((flow, index) => (
            <motion.div
              key={flow.stage}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <motion.div
                className={`relative p-6 bg-gradient-to-br ${flow.color} border border-white/10 rounded-2xl h-full backdrop-blur-sm`}
                animate={{
                  borderColor: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                {/* Icon */}
                <motion.div 
                  className="inline-flex p-3 bg-white/10 rounded-xl mb-4 relative z-10"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                >
                  <flow.icon className="size-6 text-white" />
                </motion.div>

                {/* Stage title */}
                <h3 className="text-lg font-medium mb-4 relative z-10">{flow.stage}</h3>

                {/* Items */}
                <ul className="space-y-2 relative z-10">
                  {flow.items.map((item, i) => (
                    <motion.li
                      key={item}
                      className="text-sm text-neutral-400 flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.1 }}
                    >
                      <span className="inline-block w-1 h-1 rounded-full bg-white/50 mt-1.5 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Step number */}
                <div className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-white/10 rounded-full text-xs font-medium">
                  {index + 1}
                </div>
              </motion.div>

              {/* Connecting line (desktop only) */}
              {index < flowData.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-white/20 to-transparent z-20">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-white absolute top-1/2 -translate-y-1/2 -left-1"
                    animate={{
                      x: [0, 28],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Technical specs */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { label: "Network", value: "Stellar Mainnet", pulse: true },
            { label: "Consensus", value: "Federated Byzantine Agreement" },
            { label: "Finality", value: "3-5 seconds", pulse: true },
            { label: "Throughput", value: "~1000 ops/ledger" },
          ].map((spec, index) => (
            <motion.div
              key={spec.label}
              className="relative p-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/5 rounded-xl overflow-hidden"
              whileHover={{ 
                borderColor: 'rgba(255,255,255,0.2)',
                transition: { duration: 0.2 }
              }}
            >
              {spec.pulse && (
                <motion.div
                  className="absolute inset-0 bg-white/[0.02]"
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              )}
              <div className="text-xs sm:text-sm text-neutral-500 mb-2 relative z-10">{spec.label}</div>
              <div className="font-mono text-xs sm:text-sm relative z-10">{spec.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Latency visualization */}
        <motion.div
          className="mt-12 sm:mt-16 p-8 sm:p-10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 rounded-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <div className="text-sm text-neutral-500 mb-2">Average Transaction Latency</div>
            <motion.div 
              className="text-4xl sm:text-5xl font-medium"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              3.8s
            </motion.div>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-white/50 to-white rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '76%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between text-xs text-neutral-500 mt-2">
            <span>0s</span>
            <span>5s target</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
