import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Globe,
  Award,
  Recycle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import AnimatedSection, {
  AnimatedHeading,
  AnimatedText,
} from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Recycle,
    title: "Sustainable Production",
    description:
      "Eco-friendly processes that protect our environment while producing premium quality vermicompost.",
  },
  {
    icon: Award,
    title: "Export-Ready Quality",
    description:
      "Meeting international standards with consistent quality control for global markets.",
  },
  {
    icon: Globe,
    title: "Trusted Worldwide",
    description:
      "Partnering with growers across continents to deliver healthier soil and better yields.",
  },
];

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>
          Prana Organic Farms | Premium Organic Vermicompost Exporter
        </title>
        <meta
          name="description"
          content="Premium organic vermicompost producer and exporter. 100% natural, export-ready quality trusted by growers worldwide."
        />
        <meta
          property="og:title"
          content="Prana Organic Farms | Premium Organic Vermicompost"
        />
        <meta
          property="og:description"
          content="Premium organic vermicompost producer and exporter. 100% natural, export-ready quality trusted by growers worldwide."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* scenic organic farm landscape */}
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2940&auto=format&fit=crop"
            alt="Lush green organic farm field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent" />
        </div>
        {/* Animated Background */}
        <div className="absolute inset-0 animated-gradient" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/15 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">
                Premium Organic Exports
              </span>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mb-8"
            ></motion.div>

            {/* Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Premium Fertility,{" "}
              <span className="relative">
                <span className="relative z-10 text-primary">Naturally</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute bottom-2 left-0 right-0 h-4 bg-primary/20 -z-10 origin-left rounded"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Export-grade organic products produced with sustainable farming
              techniques. Trusted by growers worldwide for healthier soil and
              better crop yields.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
              >
                <Link to="/product">
                  View Product
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 glass border-primary/30 text-primary hover:bg-primary/10 hover:scale-105 transition-all"
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-3 bg-muted-foreground/50 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Prana Section */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-transparent" />

        <div className="container relative z-10">
          <AnimatedHeading className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Prana?</span>
            </h2>
            <AnimatedText
              delay={0.2}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              We produce export-grade organic vermicompost using eco-friendly,
              chemical-free processes that deliver consistent quality for
              international agricultural markets.
            </AnimatedText>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <GlassCard key={index} delay={index * 0.15} className="p-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6"
                >
                  <item.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Enhance Your Soil Naturally?
            </h2>
          </AnimatedHeading>
          <AnimatedText
            delay={0.2}
            className="text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg"
          >
            Partner with Prana Organic Farms for premium organic vermicompost
            that meets international export standards.
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
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 shadow-2xl hover:shadow-accent/25 hover:scale-105 transition-all group"
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

export default Index;
