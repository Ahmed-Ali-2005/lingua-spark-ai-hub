
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { languages } from "@/lib/data";

const Index = () => {
  const { t, currentLanguage } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${currentLanguage === 'ar' ? 'font-arabic' : ''}`}>
                {t("heroTitle")}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                {t("heroSubtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/dashboard">{t("getStarted")}</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/languages">{t("exploreLanguages")}</Link>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80" 
                  alt="Language Learning" 
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-10 -left-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-xs hidden md:block">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-100 dark:bg-brand-900 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600 dark:text-brand-400"><path d="M5 8h11a4 4 0 1 1 0 8H5"/><path d="m5 8 3-3"/><path d="m5 8 3 3"/><path d="M19 12H5"/></svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">AI-Powered</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Personalized learning experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Languages */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t("featuredLanguages")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.slice(0, 4).map((language) => (
              <Link
                to={`/languages/${language.id}`}
                key={language.id}
                className="language-card group"
              >
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">{language.flag}</span>
                  <h3 className="text-lg font-medium mb-1">{language.name}</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {language.nativeName}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/languages">{t("exploreLanguages")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t("howItWorks")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-600 dark:text-brand-400 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t("step1Title")}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t("step1Desc")}</p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-600 dark:text-brand-400 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t("step2Title")}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t("step2Desc")}</p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-brand-600 dark:text-brand-400 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t("step3Title")}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t("step3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t("testimonials")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-bold">Sarah M.</h4>
                  <p className="text-sm text-gray-500">French Learner</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "The AI assistant helped me practice conversations in French. It's like having a patient tutor available 24/7!"
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-bold">David T.</h4>
                  <p className="text-sm text-gray-500">Spanish Learner</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "I love how the app organizes content by CEFR levels. I can clearly see my progress as I advance."
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-bold">Aisha K.</h4>
                  <p className="text-sm text-gray-500">German Learner</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "The vocabulary section with pronunciation audio has significantly improved my speaking confidence!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-600 dark:bg-brand-800">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t("getStarted")}</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of language learners using AI to accelerate their progress.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/signup">
              {t("createAccount")}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
