import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import AnimatedSection, { AnimatedHeading } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Prana Organic Farms</title>
        <meta
          name="description"
          content="Get in touch with Prana Organic Farms for inquiries about our premium organic vermicompost. Request quotes and product information."
        />
        <meta property="og:title" content="Contact Us | Prana Organic Farms" />
        <meta property="og:description" content="Get in touch for inquiries about our premium organic vermicompost. Request quotes and product information." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        
        <motion.div 
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
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
              Get in <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Have questions about our products or want to request a quote? We'd
              love to hear from you. Reach out and our team will respond within
              24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <AnimatedSection className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <GlassCard hover={false} className="p-8 md:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                      className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been received. We'll get back to you
                      within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          country: "",
                          message: "",
                        });
                      }}
                      variant="outline"
                      className="rounded-full"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="rounded-xl bg-white/50 border-white/30 focus:border-primary/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="rounded-xl bg-white/50 border-white/30 focus:border-primary/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone / WhatsApp</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="rounded-xl bg-white/50 border-white/30 focus:border-primary/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-foreground">Country *</Label>
                      <Input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        placeholder="Your country"
                        className="rounded-xl bg-white/50 border-white/30 focus:border-primary/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        className="rounded-xl bg-white/50 border-white/30 focus:border-primary/50 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl shadow-lg hover:shadow-xl transition-all group"
                    >
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                )}
              </GlassCard>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-8">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <motion.a
                      href="tel:+919876543210"
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-14 h-14 glass rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-colors">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="mailto:info@pranaorganicfarms.com"
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-14 h-14 glass rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-colors">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">
                          info@pranaorganicfarms.com
                        </p>
                      </div>
                    </motion.a>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-14 h-14 glass rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Farm & Office
                        </h3>
                        <p className="text-muted-foreground">
                          Organic Farm Road,
                          <br />
                          Agricultural District,
                          <br />
                          India
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <GlassCard hover={false} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">
                        Business Hours
                      </h3>
                      <div className="space-y-1 text-muted-foreground text-sm">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">
                        * All times in Indian Standard Time (IST)
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Contact;