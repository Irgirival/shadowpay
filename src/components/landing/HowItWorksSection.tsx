import { motion } from "framer-motion";
import { Link2, Share2, Wallet, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Link2,
    step: "01",
    title: "Create a link",
    description: "Set your preferred amount and token. We generate a unique private payment link just for you.",
  },
  {
    icon: Share2,
    step: "02",
    title: "Share with anyone",
    description: "Send the link to clients, friends, or post it anywhere. No wallet addresses exposed.",
  },
  {
    icon: Wallet,
    step: "03",
    title: "Withdraw privately",
    description: "Funds route through Privacy Cash. Withdraw to any wallet with no transaction trail.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-3"
          >
            Simple & Private
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            Three simple steps to receive payments without compromising your privacy.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-60px)] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="relative p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-glow transition-all duration-300 group-hover:border-primary/30">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground shadow-glow">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/create"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Get started now
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
