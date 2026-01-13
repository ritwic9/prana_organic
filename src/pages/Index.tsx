import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Globe, Award, Recycle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const highlights = [
  {
    icon: Recycle,
    title: "Sustainable Production",
    description: "Eco-friendly processes that protect our environment while producing premium quality vermicompost.",
  },
  {
    icon: Award,
    title: "Export-Ready Quality",
    description: "Meeting international standards with consistent quality control for global markets.",
  },
  {
    icon: Globe,
    title: "Trusted Worldwide",
    description: "Partnering with growers across continents to deliver healthier soil and better yields.",
  },
];

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Prana Organic Farms | Premium Organic Vermicompost Exporter</title>
        <meta name="description" content="Premium organic vermicompost producer and exporter. 100% natural, export-ready quality trusted by growers worldwide." />
        <meta property="og:title" content="Prana Organic Farms | Premium Organic Vermicompost" />
        <meta property="og:description" content="Premium organic vermicompost producer and exporter. 100% natural, export-ready quality trusted by growers worldwide." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 py-20 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-primary">Prana Organic Farms</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Premium Fertility,{" "}
              <span className="text-primary">Naturally</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Export-grade organic vermicompost produced with sustainable farming techniques. 
              Trusted by growers worldwide for healthier soil and better crop yields.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/product">
                  View Product
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Prana Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Prana?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We produce export-grade organic vermicompost using eco-friendly, chemical-free processes 
              that deliver consistent quality for international agricultural markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Enhance Your Soil Naturally?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Partner with Prana Organic Farms for premium organic vermicompost that meets international export standards.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
