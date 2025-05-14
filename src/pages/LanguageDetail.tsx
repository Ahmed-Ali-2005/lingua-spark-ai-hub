
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/hooks/useLanguage";
import { languages, cefrLevels } from "@/lib/data";

const LanguageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  
  const language = languages.find(lang => lang.id === id);
  
  if (!language) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Language not found</h1>
        <Button asChild>
          <Link to="/languages">Back to Languages</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/languages">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="text-3xl font-bold inline-flex items-center gap-3">
              <span className="text-4xl">{language.flag}</span>
              {language.name}
            </h1>
          </div>
          <p className="text-muted-foreground">{language.description}</p>
        </div>
        
        <Button>Start Learning</Button>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">{t("levels")}</h2>
      
      <Tabs defaultValue="levels" className="mb-8">
        <TabsList>
          <TabsTrigger value="levels">{t("levels")}</TabsTrigger>
          <TabsTrigger value="features">Content & Features</TabsTrigger>
        </TabsList>
        <TabsContent value="levels">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {cefrLevels.map(level => (
              <Link key={level.id} to={`/languages/${language.id}/${level.id}`}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-2xl">{level.name}</CardTitle>
                      <span className={`level-badge ${level.colorClass}`}>{level.label}</span>
                    </div>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Estimated Study Hours:</span>
                      <span className="font-medium">{level.requiredHours}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="features">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10 7 5 3-5 3Z"/><rect width="18" height="14" x="3" y="5" rx="2"/></svg>
                  {t("videos")}
                </CardTitle>
                <CardDescription>Educational video lessons with interactive subtitles</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Conversational dialogues</li>
                  <li>Pronunciation guides</li>
                  <li>Grammar explanations</li>
                  <li>Cultural insights</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                  {t("documents")}
                </CardTitle>
                <CardDescription>PDF resources for structured learning</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Comprehensive grammar guides</li>
                  <li>Vocabulary lists with examples</li>
                  <li>Reading practice materials</li>
                  <li>Printable exercises</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                  {t("quizzes")}
                </CardTitle>
                <CardDescription>Interactive assessments to test your knowledge</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Multiple choice questions</li>
                  <li>Fill-in-the-blank exercises</li>
                  <li>Listening comprehension tests</li>
                  <li>Instant feedback and explanations</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {t("aiAssistant")}
                </CardTitle>
                <CardDescription>AI-powered language learning support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Grammar explanations on demand</li>
                  <li>Conversation practice</li>
                  <li>Translation assistance</li>
                  <li>Personalized learning tips</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LanguageDetail;
