import { useState, useEffect } from "react";
import WelcomeModal from "@/components/WelcomeModal";
import Navbar from "@/components/Navbar";
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
    // Check localStorage for existing user
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
        <div className="ambient-glow w-[500px] h-[500px] -top-40 -left-40 opacity-20" />
        <div className="ambient-glow w-[400px] h-[400px] top-1/2 -right-40 opacity-15" />
        <div className="ambient-glow w-[300px] h-[300px] -bottom-20 left-1/3 opacity-10" />
      </div>

      {/* Welcome Modal */}
      {showModal && <WelcomeModal onComplete={handleNameSubmit} />}

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-32 md:pb-12">
        {/* Personalized Greeting */}
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Hi, <span className="gradient-text">{userName}</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            How can we help you today?
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Hero Visual */}
          <div className="opacity-0 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <HeroVisual />
          </div>

          {/* Services Card */}
          <div className="opacity-0 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <ServicesCard />
          </div>

          {/* Action Cards */}
          <div className="opacity-0 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <ActionCards />
          </div>

          {/* Footer Visual */}
          <div className="opacity-0 animate-slide-up" style={{ animationDelay: "500ms" }}>
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
