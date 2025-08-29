"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import RaffleModal from "@/components/landing/raffle-modal";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 1, // Start with non-zero values to prevent layout shift
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isRaffleModalOpen, setIsRaffleModalOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
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
        setIsHydrated(true);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsHydrated(true);
      }
    };

    // Calculate immediately to get initial values
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
    <>
      <Navbar
        typedText={typedText}
        showCursor={showCursor}
        timeLeft={timeLeft}
        isRaffleModalOpen={isRaffleModalOpen}
        setIsRaffleModalOpen={setIsRaffleModalOpen}
        isHydrated={isHydrated}
      />
      
      {children}
      
      <Footer />
      
      <RaffleModal
        isRaffleModalOpen={isRaffleModalOpen}
        setIsRaffleModalOpen={setIsRaffleModalOpen}
        raffleForm={raffleForm}
        handleFormChange={handleFormChange}
        handleRaffleSubmit={handleRaffleSubmit}
      />
    </>
  );
}
