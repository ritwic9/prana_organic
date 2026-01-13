import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Droplets,
  Sprout,
  Check,
  Download,
  Package,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";

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
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-secondary text-secondary-foreground mb-4">
              Export-Ready Quality
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Prana Premium Organic Vermicompost
            </h1>
            <p className="text-lg text-muted-foreground">
              100% natural, nutrient-rich vermicompost produced using sustainable
              farming techniques. Export-ready quality trusted by growers
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Key Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
              >
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Packaging Options
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {packagingOptions.map((option) => (
                <Badge
                  key={option}
                  variant="outline"
                  className="text-lg px-6 py-2 border-primary text-primary"
                >
                  {option}
                </Badge>
              ))}
            </div>

            <p className="text-muted-foreground italic">
              Customized export packaging available upon request
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Ready to Order?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Product Spec Sheet
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
