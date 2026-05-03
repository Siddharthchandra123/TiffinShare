import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col transition-colors duration-300">
      {/* Background Orbs for deep glassmorphic effect */}
      <div className="bg-gradient-orb bg-primary/20 w-[40vw] h-[40vw] top-[-10vw] left-[-10vw] dark:bg-orange-600/30"></div>
      <div className="bg-gradient-orb bg-accent/10 w-[30vw] h-[30vw] bottom-[-5vw] right-[-5vw] dark:bg-purple-600/20"></div>
      <div className="bg-gradient-orb bg-primary/10 w-[20vw] h-[20vw] top-[40%] left-[20%] dark:bg-indigo-600/20"></div>

      <Navbar />
      <main className="flex-grow z-10 w-full">
        {children}
      </main>
    </div>
  );
}
