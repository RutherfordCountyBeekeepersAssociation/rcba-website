import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { SQUARE_DONATION_URL } from "@/lib/payment-links";

export const Donate = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">Support Our Bees</h2>
          <p className="text-muted-foreground">
            Your contribution helps fund community outreach, education, and pollinator conservation in Rutherford County.
          </p>
          <Button asChild size="lg" className="shadow-[var(--shadow-warm)]">
            <a href={SQUARE_DONATION_URL} target="_blank" rel="noopener noreferrer">
              Make a Donation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
