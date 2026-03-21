import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions? Want to join? We'd love to hear from you!
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-border/50 shadow-xl">
            <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:rutherfordcountyncbeekeepers@gmail.com"
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-muted/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">Send us a message</p>
              </a>

              <a 
                href="https://www.facebook.com/rcbees/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-muted/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Facebook</h3>
                <p className="text-sm text-muted-foreground">Follow our page</p>
              </a>
            </div>

            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
