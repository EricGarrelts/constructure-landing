"use client";

import { useState, useEffect } from "react";

// Import all landing components
import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Solutions from "@/components/landing/solutions";
import RecentProjects from "@/components/landing/recent-projects";
import Industries from "@/components/landing/industries";
import Integrations from "@/components/landing/integrations";
import ProjectTimeline from "@/components/landing/project-timeline";
import Footer from "@/components/landing/footer";
import RaffleModal from "@/components/landing/raffle-modal";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isRaffleModalOpen, setIsRaffleModalOpen] = useState(false);
  const [raffleForm, setRaffleForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    softwareDescription: "",
  });

  // Calculate countdown to September 30th, 2025 1:00 PM Eastern Time
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-09-30T13:00:00-04:00"); // 1 PM Eastern Time
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Typewriter effect for "Constructure"
  useEffect(() => {
    const text = "Constructure";
    let currentIndex = 0;

    const typeTimer = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typeTimer);

        // After typing is complete, blink twice then hide cursor
        let blinkCount = 0;
        const blinkTimer = setInterval(() => {
          setShowCursor((prev) => !prev);
          blinkCount++;

          // After 6 blinks (3 complete cycles), hide cursor permanently
          if (blinkCount >= 6) {
            clearInterval(blinkTimer);
            setShowCursor(false);
          }
        }, 500); // 500ms per blink
      }
    }, 100); // Adjust speed as needed (100ms per character)

    return () => clearInterval(typeTimer);
  }, []);

  // Handle form input changes
  const handleFormChange = (field: string, value: string) => {
    setRaffleForm((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleRaffleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log("Raffle form submitted:", raffleForm);
    setIsRaffleModalOpen(false);
    // Reset form
    setRaffleForm({
      name: "",
      email: "",
      company: "",
      industry: "",
      softwareDescription: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar
        typedText={typedText}
        showCursor={showCursor}
        timeLeft={timeLeft}
        isRaffleModalOpen={isRaffleModalOpen}
        setIsRaffleModalOpen={setIsRaffleModalOpen}
      />

      {/* Hero */}
      <Hero />

      {/* Solutions */}
      <Solutions />

      {/* Recent Projects */}
      <RecentProjects />

      {/* Industries */}
      <Industries />

      {/* Integrations */}
      <Integrations />

      {/* Project Timeline */}
      <ProjectTimeline />

      {/* Footer */}
      <Footer />

      {/* Raffle Modal */}
      <RaffleModal
        isRaffleModalOpen={isRaffleModalOpen}
        setIsRaffleModalOpen={setIsRaffleModalOpen}
        raffleForm={raffleForm}
        handleFormChange={handleFormChange}
        handleRaffleSubmit={handleRaffleSubmit}
      />
    </div>
  );
}
