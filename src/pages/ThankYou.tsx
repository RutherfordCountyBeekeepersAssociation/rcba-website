import { useEffect, useCallback } from "react";
import { Home, Heart } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import confetti from "canvas-confetti";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const COLORS = ["#f59e0b", "#d97706", "#b45309", "#fbbf24", "#15803d"];

const CONTENT: Record<string, { title: string; body: string }> = {
  donation: {
    title: "Thank You for Your Donation!",
    body: "Your generosity directly supports honey bee health, pollinator education, and beekeeping in Rutherford County. We are grateful for your support.",
  },
  purchase: {
    title: "Thank You for Your Purchase!",
    body: "Your order helps support the Rutherford County Beekeepers Association and our work in the community. We'll be in touch with any details.",
  },
  membership: {
    title: "Thank You for Joining!",
    body: "Welcome to the Rutherford County Beekeepers Association. We're glad to have you with us and look forward to seeing you at our next meeting.",
  },
  default: {
    title: "Thank You!",
    body: "We appreciate your support of the Rutherford County Beekeepers Association.",
  },
};

const ThankYou = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = (searchParams.get("type") || "").toLowerCase();
  const content = CONTENT[type] ?? CONTENT.default;

  const fire = useCallback(() => {
    const end = Date.now() + 1200;
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: COLORS });
    const frame = () => {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: COLORS });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: COLORS });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  useEffect(() => {
    fire();
  }, [fire]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              RCBA
            </a>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-4 py-20 flex items-center justify-center">
        <div className="max-w-xl w-full text-center bg-card border border-border rounded-2xl shadow-lg p-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{content.title}</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">{content.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => navigate("/")}>Return Home</Button>
            <Button variant="outline" onClick={fire}>
              Celebrate Again
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
