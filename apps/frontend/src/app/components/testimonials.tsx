'use client';
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "StellarPay Rails reduced our cross-border settlement time from 3 days to under 5 seconds. The developer experience is exceptional—we integrated in under a week.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Remittly Global",
    image: "SC",
  },
  {
    quote: "We evaluated Stripe, Circle, and others. StellarPay's transparent on-chain settlement and compliance tooling made it the only viable choice for institutional clients.",
    author: "Marcus Rodriguez",
    role: "Head of Engineering",
    company: "Fortress Capital",
    image: "MR",
  },
  {
    quote: "The API design is pristine. Clear error handling, predictable webhooks, and comprehensive SDKs. This is infrastructure built by engineers who understand payments.",
    author: "Priya Sharma",
    role: "Lead Architect",
    company: "NexPay Solutions",
    image: "PS",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
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
            Trusted by infrastructure teams
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Engineering teams building the future of global payments choose StellarPay Rails
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <motion.div
                className="h-full p-8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl relative overflow-hidden"
                animate={{
                  borderColor: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.15)', 'rgba(255,255,255,0.1)'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.8,
                }}
              >
                {/* Quote icon */}
                <motion.div 
                  className="mb-6 text-white/20"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <Quote className="size-8" />
                </motion.div>

                {/* Quote text */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center font-medium text-sm border border-white/10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {testimonial.image}
                  </motion.div>
                  <div>
                    <div className="font-medium text-white">{testimonial.author}</div>
                    <div className="text-sm text-neutral-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trusted by section */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-sm text-neutral-500 mb-8">Powering payments for</div>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {["TechCorp", "GlobalPay", "FinanceIO", "PayStream", "VaultSys"].map((company, index) => (
              <motion.div
                key={company}
                className="px-6 py-3 bg-white/[0.03] border border-white/5 rounded-lg font-mono text-sm text-neutral-400"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
                whileHover={{
                  opacity: 1,
                  borderColor: 'rgba(255,255,255,0.2)',
                  transition: { duration: 0.2 }
                }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
