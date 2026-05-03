import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { checkSession } from "../utils/CheckSession";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isLoggedIn = !!localStorage.getItem("token") && checkSession();

  // Don't show navbar on Intro, Login, or Register pages
  const hideNavbarOn = ["/", "/login", "/register"];
  if (hideNavbarOn.includes(location.pathname)) return null;

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 bg-card/40 backdrop-blur-md border-b border-border flex justify-between items-center transition-colors duration-300">
      <h1
        onClick={() => navigate("/")}
        className="text-primary font-bold text-xl cursor-pointer hover:opacity-80 transition"
      >
        TiffinShare 🍱
      </h1>

      <div className="flex gap-4 items-center">
        <button
          onClick={() => navigate("/home")}
          className={`text-sm font-medium hover:text-primary transition ${location.pathname === "/home" ? "text-primary" : "text-muted-foreground"}`}
        >
          Explore
        </button>
        <button
          onClick={() => navigate("/leaderboard")}
          className={`text-sm font-medium hover:text-primary transition flex items-center ${location.pathname === "/leaderboard" ? "text-primary" : "text-muted-foreground"}`}
        >
          <span className="mr-1">🏆</span> Leaderboard
        </button>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        
        {isLoggedIn ? (
          <>
            <button
              onClick={() => navigate("/postmeals")}
              className={`text-sm font-medium hover:text-primary transition ${location.pathname === "/postmeals" ? "text-primary" : "text-muted-foreground"}`}
            >
              Post Meal
            </button>
            <button
              onClick={() => navigate("/profile")}
              className="bg-primary hover:opacity-90 text-primary-foreground px-4 py-2 rounded-lg transition"
            >
              Profile 👤
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary hover:opacity-90 text-primary-foreground px-4 py-2 rounded-lg transition"
          >
            Login 🔐
          </button>
        )}
      </div>
    </nav>
  );
}