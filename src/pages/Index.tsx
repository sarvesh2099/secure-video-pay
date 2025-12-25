import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, CreditCard, Download, Video, Lock, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground animate-fade-in">
                <Shield className="h-4 w-4 text-primary" />
                Trusted by 2,000+ video creators
              </div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-fade-in [animation-delay:100ms] opacity-0">
                Get paid before clients
                <span className="text-primary"> access your videos</span>
              </h1>
              
              <p className="mb-10 text-lg text-muted-foreground md:text-xl animate-fade-in [animation-delay:200ms] opacity-0">
                Upload your video, set your price, share the link. 
                Clients pay before watching. Simple, secure, professional.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in [animation-delay:300ms] opacity-0">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/register">Get Started Free</Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-y border-border/50 bg-muted/30 py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                How it works
              </h2>
              <p className="text-muted-foreground text-lg">
                Three simple steps to get paid for your video work
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  icon: Video,
                  title: "Upload your video",
                  description: "Drag and drop your finished video file. We support all major formats."
                },
                {
                  step: "02",
                  icon: CreditCard,
                  title: "Set your price",
                  description: "Choose how much to charge. Get a unique payment-protected link."
                },
                {
                  step: "03",
                  icon: Download,
                  title: "Get paid instantly",
                  description: "Clients pay to unlock. They can watch and download. You get paid."
                }
              ].map((item, index) => (
                <div 
                  key={item.step} 
                  className="relative rounded-2xl border border-border bg-card p-8 hover-lift animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/30">{item.step}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Built for professional creators
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to deliver videos and get paid securely
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Lock,
                  title: "Payment-protected links",
                  description: "Videos stay locked until payment is complete. No workarounds."
                },
                {
                  icon: Shield,
                  title: "Secure payments",
                  description: "Powered by Stripe. Your clients' payment data is always safe."
                },
                {
                  icon: Download,
                  title: "Original quality downloads",
                  description: "Clients get the full resolution file after payment."
                },
                {
                  icon: Video,
                  title: "All formats supported",
                  description: "MP4, MOV, AVI, and more. We handle the streaming."
                },
                {
                  icon: CreditCard,
                  title: "Instant payouts",
                  description: "Get your money fast. No waiting for invoice payments."
                },
                {
                  icon: CheckCircle,
                  title: "No client login needed",
                  description: "Clients just pay and watch. Zero friction."
                }
              ].map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="group rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-3xl bg-primary px-8 py-16 text-center md:px-16">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Ready to get paid for your work?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80">
                Join thousands of video creators using PayFrame to deliver and get paid.
              </p>
              <Button variant="secondary" size="xl" asChild>
                <Link to="/register">Start for free</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
