import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MerchPromo = () => {
  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <ShoppingBag className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            🧢 RCBA Merchandise — Limited Time!
          </h2>
          <p className="text-muted-foreground text-lg">
            Shirts, hats, and more with our club logo. 
            Orders close <strong className="text-foreground">March 29th, 2026</strong>. 
            Items will be made after the deadline and available for pick up all at one time (TBA).
          </p>
          <Button size="lg" asChild>
            <a
              href="https://rutherfordcountybeekeepersspring2026.itemorder.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Merch Now
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Link expires March 29th — don't miss out!
          </p>
        </div>
      </div>
    </section>
  );
};
