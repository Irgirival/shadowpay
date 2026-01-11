import { motion } from "framer-motion";
import { Briefcase, Heart, Gamepad2, Gift, Lock } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Freelancers",
    description: "Accept client payments without exposing your financial history or wallet balance.",
  },
  {
    icon: Heart,
    title: "Donations",
    description: "Receive donations privately. Supporters give without seeing your other transactions.",
  },
  {
    icon: Gamepad2,
    title: "Gaming & NFTs",
    description: "Trade and receive in-game assets without revealing your main wallet.",
  },
  {
    icon: Gift,
    title: "Rewards & Tips",
    description: "Share a tip link anywhere. Collect rewards without compromising privacy.",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-3"
          >
            Use Cases
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Privacy for everyone
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            From creators to businesses, anyone can benefit from private payments.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-glow hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Privacy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 p-8 sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
            
            <div className="relative flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 animate-pulse-glow">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Your financial privacy matters
                </h3>
                <p className="text-muted-foreground">
                  Every payment link you create is fully private. No one can trace the connection between sender and receiver on the blockchain.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
