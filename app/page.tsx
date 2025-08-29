"use client";

// Import all landing components
import Hero from "@/components/landing/hero";
import Solutions from "@/components/landing/solutions";
import RecentProjects from "@/components/landing/recent-projects";
import Industries from "@/components/landing/industries";
import Integrations from "@/components/landing/integrations";
import ProjectTimeline from "@/components/landing/project-timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <Hero />

      {/* Solutions */}
      <Solutions />

      {/* Recent Projects */}
      <RecentProjects />

      {/* Project Timeline */}
      <ProjectTimeline />

      {/* Industries */}
      <Industries />

      {/* Integrations */}
      <Integrations />
    </div>
  );
}
