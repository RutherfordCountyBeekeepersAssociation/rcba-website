import { X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  if (!isVisible) return null;

  return (
    <div 
      className="bg-primary text-primary-foreground py-3 px-4 cursor-pointer hover:bg-primary/90 transition-colors relative"
      onClick={() => navigate("/bee-school")}
    >
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base font-medium">
          🐝 2026 Bee School is now in session! Click here for details →
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsVisible(false);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Close announcement"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};
