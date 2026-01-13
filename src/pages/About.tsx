import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Target, Eye, Heart, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

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
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Prana Organic Farms</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Prana Organic Farms produces premium-grade organic vermicompost
              using eco-friendly, chemical-free processes. Our focus is
              delivering consistent quality to international markets, ensuring
              healthier soil and better crop yield worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
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
              </div>

              <div className="bg-primary/5 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">100%</div>
                      <div className="text-muted-foreground">Organic & Natural</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary">Export</div>
                      <div className="text-muted-foreground">Ready Quality</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground">
                    To be the global leader in organic soil enrichment, fostering
                    sustainable agriculture practices that benefit farmers,
                    communities, and the planet.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-secondary/5">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-6 w-6 text-secondary" />
                    <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground">
                    To produce and deliver premium organic vermicompost that
                    enhances soil health, increases crop yields, and supports
                    sustainable farming worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Let's Grow Together
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Partner with Prana Organic Farms and join our mission to create
            healthier soil and sustainable agriculture worldwide.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
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

export default About;
