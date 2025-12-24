import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const mastHeadIcons = [FaFacebookF, FaInstagram, FaWhatsapp];

const TOTAL_SECONDS = 24 * 60 * 60; // 86400

const Masthead = () => {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev === 0 ? TOTAL_SECONDS : prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="w-full bg-[#430C41]">
      <div className="container mx-auto px-5 py-4 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-semibold text-center">
          Buy 2 Get 1 offer is live now. Offer ends in&nbsp;
          <span className="text-[#F9C255]">{formatTime(secondsLeft)}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="font-semibold hidden md:block">Follow Us on</div>
          {mastHeadIcons.map((Icon, index) => (
            <button
              key={index}
              className="w-9 h-9 border border-white rounded-full flex justify-center items-center"
            >
              <Icon />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Masthead;
