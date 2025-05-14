
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="container py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-6xl font-bold mb-6 text-primary">404</div>
        <h1 className="text-3xl font-bold mb-4">{t("pageNotFound")}</h1>
        <p className="text-muted-foreground mb-8">
          {t("pageNotFoundDescription")}
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link to="/">{t("returnHome")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/languages">{t("exploreLanguages")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
