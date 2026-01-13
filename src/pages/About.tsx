import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Target, Eye, Heart, ArrowRight, Users, Award } from "lucide-react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import AnimatedSection, { AnimatedHeading, AnimatedText } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Environmental responsibility in every step of our production process.",
  },
  {
    icon: Target,
    title: "Quality",
    description: "Unwavering commitment to producing the finest organic vermicompost.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparent practices and honest relationships with all stakeholders.",
  },
];

const stats = [
  { value: "100%", label: "Organic & Natural", icon: Leaf },
  { value: "Export", label: "Ready Quality", icon: Award },
  { value: "Global", label: "Partners", icon: Users },
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Prana Organic Farms</title>
        <meta
          name="description"
          content="Learn about Prana Organic Farms - premium organic vermicompost producer focused on sustainable agriculture and international quality standards."
        />
        <meta property="og:title" content="About Us | Prana Organic Farms" />
        <meta property="og:description" content="Premium organic vermicompost producer focused on sustainable agriculture and international quality standards." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              About <span className="text-primary">Prana Organic Farms</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Prana Organic Farms produces premium-grade organic vermicompost
              using eco-friendly, chemical-free processes. Our focus is
              delivering consistent quality to international markets, ensuring
              healthier soil and better crop yield worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <AnimatedSection className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a vision to transform agricultural practices,
                    Prana Organic Farms has grown from a small organic farm to a
                    trusted exporter of premium vermicompost.
                  </p>
                  <p>
                    We believe that healthy soil is the foundation of sustainable
                    agriculture. Our vermicompost enriches the earth naturally,
                    helping farmers worldwide grow healthier crops while
                    protecting the environment.
                  </p>
                  <p>
                    Today, we serve growers across continents, delivering
                    consistent, export-grade quality that meets the highest
                    international standards.
                  </p>
                </div>
              </motion.div>

              <GlassCard hover={false} className="p-10">
                <div className="space-y-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="flex items-center gap-5"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-accent'
                        }`}
                      >
                        <stat.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <div>
                        <div className={`text-3xl font-bold ${
                          index === 0 ? 'text-primary' : index === 1 ? 'text-secondary' : 'text-accent'
                        }`}>
                          {stat.value}
                        </div>
                        <div className="text-muted-foreground">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Vision & Mission */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassCard delay={0} className="p-8 border-primary/20">
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-primary/10 rounded-xl"
                  >
                    <Eye className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in organic soil enrichment, fostering
                  sustainable agriculture practices that benefit farmers,
                  communities, and the planet.
                </p>
              </GlassCard>

              <GlassCard delay={0.15} className="p-8 border-secondary/20">
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-secondary/10 rounded-xl"
                  >
                    <Target className="h-6 w-6 text-secondary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To produce and deliver premium organic vermicompost that
                  enhances soil health, increases crop yields, and supports
                  sustainable farming worldwide.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
        
        <div className="container relative z-10">
          <AnimatedHeading className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <GlassCard key={index} delay={index * 0.15} className="p-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-5"
                >
                  <value.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Let's Grow Together
            </h2>
          </AnimatedHeading>
          <AnimatedText delay={0.2} className="text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg">
            Partner with Prana Organic Farms and join our mission to create
            healthier soil and sustainable agriculture worldwide.
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
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default About;