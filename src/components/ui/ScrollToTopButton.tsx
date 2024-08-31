import React, { useState, useEffect } from "react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 right-8 border-2 border-amber-600 text-amber-600 rounded-full p-4 shadow-lg transition-all duration-500 hover:border-amber-600 hover:bg-amber-600 hover:bg-opacity-20 hover:text-amber-800 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Subir hasta arriba"
        style={{
          background: "transparent",
          fontSize: "1.5rem",
          width: "60px",
          height: "70px",
        }}
      >
        ↑
      </button>
    </div>
  );
};

export default ScrollToTopButton;
