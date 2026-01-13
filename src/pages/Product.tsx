import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Droplets,
  Sprout,
  Check,
  Download,
  Package,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import AnimatedSection, { AnimatedHeading, AnimatedText } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const features = [
  { icon: Leaf, text: "100% natural and chemical-free" },
  { icon: Sprout, text: "High NPK nutrient profile" },
  { icon: Droplets, text: "Improves soil structure and water retention" },
  { icon: Sprout, text: "Boosts microbial activity" },
  { icon: Check, text: "Odorless and easy to apply" },
  { icon: Leaf, text: "Suitable for all crops and landscaping" },
];

const packagingOptions = ["5 kg", "10 kg", "25 kg", "50 kg"];

const Product = () => {
  return (
    <Layout>
      <Helmet>
        <title>Premium Organic Vermicompost | Prana Organic Farms</title>
        <meta
          name="description"
          content="100% natural, nutrient-rich organic vermicompost. Export-ready quality with high NPK profile. Available in 5kg, 10kg, 25kg, and 50kg packaging."
        />
        <meta property="og:title" content="Premium Organic Vermicompost | Prana Organic Farms" />
        <meta property="og:description" content="100% natural, nutrient-rich organic vermicompost. Export-ready quality trusted by growers worldwide." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-20 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-6 px-4 py-1.5 text-sm backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Export-Ready Quality
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Prana Premium Organic{" "}
              <span className="text-primary">Vermicompost</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              100% natural, nutrient-rich vermicompost produced using sustainable
              farming techniques. Export-ready quality trusted by growers
              worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        
        <div className="container relative z-10">
          <AnimatedHeading className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Key Features
            </h2>
          </AnimatedHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <GlassCard key={index} delay={index * 0.1} className="p-6">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <feature.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <p className="text-foreground font-medium pt-2">{feature.text}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Packaging Section */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <GlassCard hover={false} className="max-w-3xl mx-auto text-center p-12">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-8"
            >
              <Package className="h-10 w-10 text-primary" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Packaging Options
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {packagingOptions.map((option, index) => (
                <motion.div
                  key={option}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge
                    variant="outline"
                    className="text-lg px-8 py-3 border-2 border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {option}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground italic">
              Customized export packaging available upon request
            </p>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-muted/30 to-primary/10" />
        
        <div className="container relative z-10">
          <GlassCard hover={false} className="max-w-3xl mx-auto text-center p-12">
            <AnimatedHeading>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
                Ready to Order?
              </h2>
            </AnimatedHeading>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Product Spec Sheet
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
              >
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </GlassCard>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Product;