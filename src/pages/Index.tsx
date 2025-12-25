import { useState, useEffect } from "react";
import WelcomeModal from "@/components/WelcomeModal";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import HeroVisual from "@/components/HeroVisual";
import ServicesCard from "@/components/ServicesCard";
import ActionCards from "@/components/ActionCards";
import FooterVisual from "@/components/FooterVisual";

const USER_NAME_KEY = "medicare_user_name";

const Index = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedName = localStorage.getItem(USER_NAME_KEY);
    if (storedName) {
      setUserName(storedName);
    } else {
      setShowModal(true);
    }
    setIsLoading(false);
  }, []);

  const handleNameSubmit = (name: string) => {
    localStorage.setItem(USER_NAME_KEY, name);
    setUserName(name);
    setShowModal(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* iOS-style subtle noise overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015]" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} 
      />

      {/* Welcome Modal */}
      {showModal && <WelcomeModal onComplete={handleNameSubmit} />}

      {/* Dynamic Island Navbar */}
      <DynamicIslandNav />

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-28 pb-32 md:pb-16 max-w-2xl">
        {/* Personalized Greeting */}
        <div className="mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <p className="text-muted-foreground text-sm font-medium mb-1">
            Good to see you
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Hi, <span className="gradient-text-vibrant">{userName}</span>
          </h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Hero Visual */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <HeroVisual />
          </div>

          {/* Services Card */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <ServicesCard />
          </div>

          {/* Action Cards */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <ActionCards />
          </div>

          {/* Footer Visual */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <FooterVisual />
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <BottomNav />
    </div>
  );
};

export default Index;
