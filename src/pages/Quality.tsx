import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Leaf,
  Globe,
  CheckCircle2,
  Microscope,
  Recycle,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import AnimatedSection, { AnimatedHeading, AnimatedText } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const qualityPillars = [
  {
    icon: Leaf,
    title: "Chemical-Free Processes",
    description:
      "Our vermicompost is produced without any synthetic chemicals, pesticides, or additives. We maintain strict organic standards throughout the production cycle.",
  },
  {
    icon: Globe,
    title: "Export-Grade Consistency",
    description:
      "Every batch meets rigorous international quality standards. We ensure consistent nutrient profiles and physical characteristics for global markets.",
  },
  {
    icon: Recycle,
    title: "Sustainable Production",
    description:
      "From sourcing organic waste to final packaging, our processes minimize environmental impact while maximizing product quality and effectiveness.",
  },
  {
    icon: Microscope,
    title: "Rigorous Quality Checks",
    description:
      "Each batch undergoes comprehensive testing for nutrient content, moisture levels, and microbial activity before certification for export.",
  },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "Organic Certification Standards",
  "Export Quality Assurance",
  "Environmental Compliance",
];

const Quality = () => {
  return (
    <Layout>
      <Helmet>
        <title>Quality Assurance | Prana Organic Farms</title>
        <meta
          name="description"
          content="Our commitment to quality: eco-friendly, chemical-free processes with export-grade consistency. Rigorous quality checks for international markets."
        />
        <meta property="og:title" content="Quality Assurance | Prana Organic Farms" />
        <meta property="og:description" content="Eco-friendly, chemical-free production with export-grade consistency and rigorous quality checks." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        
        <motion.div 
          className="absolute top-20 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-8"
            >
              <Shield className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Quality <span className="text-primary">Assurance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              At Prana Organic Farms, quality isn't just a standard—it's our
              foundation. We maintain rigorous quality control throughout our
              production process to deliver consistent, export-ready organic
              vermicompost.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quality Pillars */}
      <AnimatedSection className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        
        <div className="container relative z-10">
          <AnimatedHeading className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Quality Pillars
            </h2>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityPillars.map((pillar, index) => (
              <GlassCard key={index} delay={index * 0.15} className="p-8">
                <div className="flex items-start gap-5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <pillar.icon className="h-7 w-7 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <GlassCard hover={false} className="max-w-3xl mx-auto text-center p-12">
            <AnimatedHeading>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
                Standards & Compliance
              </h2>
            </AnimatedHeading>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 bg-primary/5 backdrop-blur-sm px-5 py-4 rounded-xl border border-primary/10"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Trust in Quality, Grow with Confidence
            </h2>
          </AnimatedHeading>
          <AnimatedText delay={0.2} className="text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg">
            Partner with Prana Organic Farms for premium organic vermicompost
            that meets the highest international standards.
          </AnimatedText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 shadow-2xl hover:scale-105 transition-all group"
            >
              <Link to="/contact">
                Request Quality Documentation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Quality;