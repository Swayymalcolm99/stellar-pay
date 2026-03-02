'use client';
import { motion } from "motion/react";
import { Terminal, BookOpen, Github, Blocks } from "lucide-react";

const sdks = [
  { name: "Node.js", status: "Production" },
  { name: "Python", status: "Production" },
  { name: "Go", status: "Production" },
  { name: "Rust", status: "Beta" },
];

export function Developer() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 border-t border-white/5 overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-6 tracking-tight">
              Developer-first APIs
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 mb-8 leading-relaxed">
              RESTful APIs with comprehensive SDKs. Clear documentation, predictable errors, 
              and a testing environment that mirrors production.
            </p>

            {/* SDK list */}
            <div className="space-y-3 mb-8">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={sdk.name}
                  className="flex items-center justify-between p-4 bg-white/[0.03] border border-white/5 rounded-lg relative overflow-hidden group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    borderColor: 'rgba(255,255,255,0.15)',
                    x: 4,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/[0.02]"
                    animate={{
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                  />
                  <span className="font-medium relative z-10">{sdk.name} SDK</span>
                  <span className="text-xs px-2 py-1 bg-white/10 rounded text-neutral-400 relative z-10">
                    {sdk.status}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Resources */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: BookOpen, label: "Documentation" },
                { icon: Github, label: "GitHub" },
                { icon: Blocks, label: "API Reference" },
              ].map((resource, index) => (
                <motion.button
                  key={resource.label}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <resource.icon className="size-4" />
                  {resource.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right: Code example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
              animate={{
                boxShadow: [
                  '0 20px 60px rgba(0,0,0,0.5)',
                  '0 20px 80px rgba(255,255,255,0.1)',
                  '0 20px 60px rgba(0,0,0,0.5)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                <Terminal className="size-4 text-neutral-500" />
                <span className="text-sm text-neutral-500 font-mono">payment.js</span>
                <div className="flex-1" />
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <div className="space-y-1">
                  <motion.div 
                    className="text-neutral-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    // Initialize StellarPay client
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-white">stellarpay</span>{" "}
                    <span className="text-neutral-500">=</span>{" "}
                    <span className="text-blue-400">require</span>
                    <span className="text-neutral-500">(</span>
                    <span className="text-green-400">'@stellarpay/node'</span>
                    <span className="text-neutral-500">);</span>
                  </motion.div>
                  <div className="h-4" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-white">client</span>{" "}
                    <span className="text-neutral-500">=</span>{" "}
                    <span className="text-blue-400">new</span>{" "}
                    <span className="text-yellow-400">stellarpay.Client</span>
                    <span className="text-neutral-500">(&#123;</span>
                  </motion.div>
                  <motion.div 
                    className="pl-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <span className="text-cyan-400">apiKey</span>
                    <span className="text-neutral-500">:</span>{" "}
                    <span className="text-white">process.env.STELLARPAY_KEY</span>
                    <span className="text-neutral-500">,</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  >
                    <span className="text-neutral-500">&#125;);</span>
                  </motion.div>
                  <div className="h-4" />
                  <motion.div 
                    className="text-neutral-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                  >
                    // Create a payment
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                  >
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-white">payment</span>{" "}
                    <span className="text-neutral-500">=</span>{" "}
                    <span className="text-purple-400">await</span>{" "}
                    <span className="text-white">client.payments.</span>
                    <span className="text-yellow-400">create</span>
                    <span className="text-neutral-500">(&#123;</span>
                  </motion.div>
                  <motion.div 
                    className="pl-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                  >
                    <span className="text-cyan-400">amount</span>
                    <span className="text-neutral-500">:</span>{" "}
                    <span className="text-orange-400">100.00</span>
                    <span className="text-neutral-500">,</span>
                  </motion.div>
                  <motion.div 
                    className="pl-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3 }}
                  >
                    <span className="text-cyan-400">currency</span>
                    <span className="text-neutral-500">:</span>{" "}
                    <span className="text-green-400">'USD'</span>
                    <span className="text-neutral-500">,</span>
                  </motion.div>
                  <motion.div 
                    className="pl-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 }}
                  >
                    <span className="text-cyan-400">destination</span>
                    <span className="text-neutral-500">:</span>{" "}
                    <span className="text-green-400">'stellar:GXXX...'</span>
                    <span className="text-neutral-500">,</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                  >
                    <span className="text-neutral-500">&#125;);</span>
                  </motion.div>
                </div>
              </div>

              {/* Cursor blink */}
              <motion.div
                className="absolute bottom-6 left-6 w-2 h-4 bg-white"
                animate={{
                  opacity: [1, 1, 0, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 0,
                }}
              />
            </motion.div>

            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 via-transparent to-transparent blur-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
