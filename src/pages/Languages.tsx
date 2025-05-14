
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { languages } from "@/lib/data";

const Languages = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t("selectLanguage")}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((language) => (
            <Link 
              to={`/languages/${language.id}`} 
              key={language.id}
              className="block transition-transform hover:scale-[1.01]"
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={language.imageUrl} 
                    alt={language.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <span className="text-2xl mr-2">{language.flag}</span>
                      {language.name}
                    </CardTitle>
                    <Badge variant="outline">{language.nativeName}</Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {language.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center">
                    <div className="text-sm text-muted-foreground mr-4">
                      <span className="font-medium">{language.difficulty}</span>/5 Difficulty
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill={i < language.popularity ? "currentColor" : "none"} 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="text-warning-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <Button size="sm">
                    {t("exploreLanguages")} →
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
