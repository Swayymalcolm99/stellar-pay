'use client';
import { Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-lg sm:text-xl font-medium mb-4">StellarPay Rails</div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Infrastructure-grade payments on Stellar. Built for developers, trusted by enterprises.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-sm font-medium mb-4 text-neutral-400">Product</div>
            <ul className="space-y-3 text-sm text-neutral-500">
              {["Payments", "On-ramps", "Subscriptions", "Escrow", "Pricing"].map((item, index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 4, color: '#fff', transition: { duration: 0.2 } }}
                >
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Developers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-sm font-medium mb-4 text-neutral-400">Developers</div>
            <ul className="space-y-3 text-sm text-neutral-500">
              {["Documentation", "API Reference", "SDKs", "GitHub", "Status"].map((item, index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 4, color: '#fff', transition: { duration: 0.2 } }}
                >
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-sm font-medium mb-4 text-neutral-400">Company</div>
            <ul className="space-y-3 text-sm text-neutral-500">
              {["About", "Security", "Compliance", "Contact", "Careers"].map((item, index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 4, color: '#fff', transition: { duration: 0.2 } }}
                >
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-sm text-neutral-500">
            © 2026 StellarPay Rails. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            {[
              { Icon: Twitter, href: "#" },
              { Icon: Github, href: "#" },
              { Icon: Linkedin, href: "#" },
            ].map(({ Icon, href }, index) => (
              <motion.a 
                key={index}
                href={href} 
                className="text-neutral-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="size-5" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm text-neutral-500">
            {["Privacy", "Terms", "Legal"].map((item) => (
              <motion.a 
                key={item}
                href="#" 
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
