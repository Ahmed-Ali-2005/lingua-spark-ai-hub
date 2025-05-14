
import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/lib/translations";

type LanguageContextType = {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem("appLanguage") || "en";
  });

  useEffect(() => {
    localStorage.setItem("appLanguage", currentLanguage);
    document.documentElement.lang = currentLanguage;
    document.documentElement.classList.remove("rtl", "ltr");
    document.documentElement.classList.add(currentLanguage === "ar" ? "rtl" : "ltr");
    
    if (currentLanguage === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [currentLanguage]);

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string) => {
    if (!translations[currentLanguage]) {
      return translations["en"][key] || key;
    }
    
    return translations[currentLanguage][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  
  return context;
};
