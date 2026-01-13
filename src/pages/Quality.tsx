import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Quality Assurance
            </h1>
            <p className="text-lg text-muted-foreground">
              At Prana Organic Farms, quality isn't just a standard—it's our
              foundation. We maintain rigorous quality control throughout our
              production process to deliver consistent, export-ready organic
              vermicompost.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-16 bg-card">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Our Quality Pillars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityPillars.map((pillar, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <pillar.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Standards & Compliance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-primary/5 px-4 py-3 rounded-lg"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Trust in Quality, Grow with Confidence
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Partner with Prana Organic Farms for premium organic vermicompost
            that meets the highest international standards.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link to="/contact">
              Request Quality Documentation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;
