import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import beeFlowerImage from "@/assets/bee-flower.jpg";

const newMemberUrl = import.meta.env.VITE_SQUARE_NEW_MEMBER_URL;
const renewalUrl = import.meta.env.VITE_SQUARE_RENEWAL_URL;
const donationUrl = import.meta.env.VITE_SQUARE_DONATION_URL;

const benefits = [
  "Participation in community outreach events",
  "Swarm call support network",
  "Access to club equipment library",
  "Group purchasing opportunities"
];

export const Membership = () => {
  return (
    <section id="membership" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Become a Member
              </h2>
              <p className="text-xl text-muted-foreground">
                Join our thriving community of beekeepers and enjoy exclusive benefits 
                while supporting pollinator conservation in Rutherford County.
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-foreground mb-2">$10/year</div>
                  <p className="text-muted-foreground">Family Membership</p>
                </div>

                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full shadow-[var(--shadow-warm)] hover:scale-105 transition-all">
                  <a href={newMemberUrl} target="_blank" rel="noopener noreferrer">
                    Join Today
                  </a>
                </Button>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <Button asChild variant="outline" className="w-full">
                    <a href={renewalUrl} target="_blank" rel="noopener noreferrer">
                      Renew
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={donationUrl} target="_blank" rel="noopener noreferrer">
                      Donate
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="animate-in fade-in slide-in-from-right duration-700">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={beeFlowerImage} 
                alt="Honeybee pollinating flowers"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
