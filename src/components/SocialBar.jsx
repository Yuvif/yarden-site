import { useState } from "react";
import { WhatsappLogo, InstagramLogo, ShareNetwork, GoogleLogo } from "@phosphor-icons/react";

const SocialBar = () => {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = "https://wa.me/972546197010?text=" + encodeURIComponent("שלום ירדן, אני מעוניין בתיאום טיפול");
  const instagramUrl = "https://www.instagram.com/levyarden";
  const googleSearchUrl = "https://www.google.com/search?q=ירדן+לוי+https://www.google.com/search?q=Yarden%27s+Massage+Therapy-+%D7%99%D7%A8%D7%93%D7%9F+%D7%A2%D7%99%D7%A1%D7%95%D7%99+%D7%98%D7%99%D7%A4%D7%95%D7%9C%D7%99&stick=H4sIAAAAAAAA_-NgU1I1qDAyMDVKNbc0SE00NkpJMza3MqhIMUozTjFIMjc0MjM0STROXcRqFZlYlJKap16s4JtYX";

  // Base colors (you can adjust these)
  const baseBg = "bg-[#037fae]";
  const hoverBg = "hover:bg-[#005096]";
  const textColor = "text-white";

  // Individual accent colors for icons (kept subtle)
  const whatsappAccent = "bg-green-600 hover:bg-green-700";
  const instagramAccent = "bg-purple-700 hover:bg-purple-800";
  const googleAccent = "bg-blue-900 hover:bg-blue-950";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 left-6 z-50 flex flex-col items-center space-y-4"
    >
      {/* Main icon always visible */}
      <div
        className={`${baseBg} ${hoverBg} cursor-pointer p-3 rounded-full shadow-lg ${textColor} transition-colors duration-300`}
      >
        <ShareNetwork size={28} weight="fill" />
      </div>

      {/* Buttons shown on hover */}
      <div
        className={`flex flex-col space-y-4 transition-all duration-300 overflow-hidden ${
          hovered ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ width: hovered ? "180px" : "0" }}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="צור קשר בוואטסאפ"
          className={`flex items-center gap-3 px-5 py-3 rounded-full shadow-xl select-none whitespace-nowrap
            transition duration-300 transform hover:scale-105
            ${whatsappAccent} ${textColor}`}
        >
          <WhatsappLogo size={24} weight="fill" />
          <span className="font-semibold text-lg">וואטסאפ</span>
        </a>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="פתח את פרופיל האינסטגרם"
          className={`flex items-center gap-3 px-5 py-3 rounded-full shadow-xl select-none whitespace-nowrap
            transition duration-300 transform hover:scale-105
            ${instagramAccent} ${textColor}`}
        >
          <InstagramLogo size={24} weight="fill" />
          <span className="font-semibold text-lg">אינסטגרם</span>
        </a>

        <a
          href={googleSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="חפש בגוגל"
          className={`flex items-center gap-3 px-5 py-3 rounded-full shadow-xl select-none whitespace-nowrap
            transition duration-300 transform hover:scale-105
            ${googleAccent} ${textColor}`}
        >
          <GoogleLogo size={24} weight="fill" />
          <span className="font-semibold text-lg">גוגל</span>
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
