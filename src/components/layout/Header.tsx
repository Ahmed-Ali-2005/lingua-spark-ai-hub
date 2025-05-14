
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/ModeToggle";
import { LanguageToggle } from "@/components/theme/LanguageToggle";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const { t } = useLanguage();
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="LinguaLearn Logo" className="h-8 w-8" />
            <span className="font-heading font-bold text-xl hidden sm:inline-block">LinguaLearn</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/dashboard" className="font-medium transition-colors hover:text-primary">
            {t("dashboard")}
          </Link>
          <Link to="/languages" className="font-medium transition-colors hover:text-primary">
            {t("languages")}
          </Link>
          <Link to="/assistant" className="font-medium transition-colors hover:text-primary">
            {t("aiAssistant")}
          </Link>
          <Link to="/about" className="font-medium transition-colors hover:text-primary">
            {t("about")}
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ModeToggle />
          
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/profile" className="flex items-center gap-2">
                  <span className="hidden sm:inline-block">{user?.name}</span>
                </Link>
              </Button>
              <Button variant="outline" size="sm" onClick={logout}>
                {t("logout")}
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">{t("login")}</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/signup">{t("signup")}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
