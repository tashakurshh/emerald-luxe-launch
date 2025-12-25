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
    <div className="min-h-screen relative">
      {/* Background ambient effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="apple-glow w-[600px] h-[600px] -top-60 left-1/4 opacity-15"
          style={{ background: "hsl(210, 100%, 50%)" }}
        />
        <div
          className="apple-glow w-[500px] h-[500px] top-1/2 -right-40 opacity-10"
          style={{ background: "hsl(280, 100%, 65%)" }}
        />
        <div
          className="apple-glow w-[400px] h-[400px] -bottom-40 left-0 opacity-10"
          style={{ background: "hsl(142, 71%, 45%)" }}
        />
      </div>

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
