import React, { useState } from "react";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="scroll_to_top"
      onClick={handleScroll}
      style={{ display: showScroll ? "block" : "none" }}
    >
      <i className="fa fa- fa-long-arrow-up" />
    </div>
  );
};

export default ScrollToTop;
