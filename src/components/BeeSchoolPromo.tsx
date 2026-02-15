import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

export const BeeSchoolPromo = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-400 py-16 md:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-background rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-background/20 backdrop-blur-sm text-background font-semibold px-4 py-2 rounded-full text-sm mb-6">
            🐝 Now In Session — Registration Closed
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
            2026 Bee School
          </h2>
          
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto">
            Learn everything you need to become a certified beekeeper in our comprehensive 4-week course.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-background/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Starts January 24, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">4 Weekly Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Rutherford County</span>
            </div>
          </div>
          
          <Link to="/bee-school">
            <Button 
              size="lg" 
              className="bg-background text-amber-600 hover:bg-background/90 text-lg px-8 py-6 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Learn More & Register
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
