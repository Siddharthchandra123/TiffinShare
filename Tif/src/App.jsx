import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IntroPage from "./IntroPage.jsx";
import FeedPage from "./FeedPage.jsx";
import PostPage from "./PostPage.jsx";
import { MealProvider } from "./MealContext";
export default function App() {
  return (
    <MealProvider>
    <Router>
      
        <Routes>
          {/* Landing Page */}
        <Route path="/" element={<IntroPage />} />

        {/* Home / Feed Page */}
        <Route path="/home" element={<FeedPage />} />
        
        <Route path="/postmeals" element={<PostPage />} />
      </Routes>
    </Router>
      </MealProvider>
  );
}