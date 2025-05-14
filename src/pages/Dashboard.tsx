
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";
import { languages } from "@/lib/data";

const Dashboard = () => {
  const { t } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return (
      <div className="container py-12">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Login Required</h1>
          <p className="mb-6">Please log in to access your dashboard</p>
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    );
  }

  // User progress stats (mock data)
  const userProgress = {
    streak: 12,
    completedLessons: 27,
    vocabularyLearned: 324,
    lastActivity: new Date(Date.now() - 86400000).toISOString(),
    studiedLanguages: user?.progress || {}
  };

  // Recent activity (mock data)
  const recentActivity = [
    { id: 1, type: "lesson", name: "French Subjunctive", date: "2023-05-13T14:30:00Z" },
    { id: 2, type: "quiz", name: "Spanish Vocabulary Quiz", date: "2023-05-12T10:15:00Z" },
    { id: 3, type: "video", name: "German Pronunciation", date: "2023-05-10T16:45:00Z" }
  ];

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {t("welcomeBack")}, {user?.name}!
          </h1>
          <p className="text-muted-foreground">
            {formatDate(new Date().toISOString())}
          </p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link to="/languages">{t("continueStudying")}</Link>
          </Button>
        </div>
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">
              {userProgress.streak}
            </CardTitle>
            <CardDescription>
              {t("dailyStreak")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-2 bg-orange-100 dark:bg-orange-900 rounded-full">
              <div className="h-2 bg-warning-500 rounded-full" style={{ width: `${(userProgress.streak % 30) / 30 * 100}%` }}></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">
              {userProgress.completedLessons}
            </CardTitle>
            <CardDescription>
              {t("completedLessons")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={65} className="h-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">
              {userProgress.vocabularyLearned}
            </CardTitle>
            <CardDescription>
              {t("vocabularyLearned")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={32} className="h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Languages in Progress */}
      <h2 className="text-2xl font-bold mb-4">{t("yourProgress")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Object.entries(userProgress.studiedLanguages).map(([langId, data]) => {
          const language = languages.find(l => l.id === langId);
          if (!language) return null;
          
          return (
            <Link to={`/languages/${langId}`} key={langId}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">{language.flag}</span>
                      {language.name}
                    </CardTitle>
                    <span className={`level-badge level-badge-${(data as any).level.toLowerCase()}`}>
                      {(data as any).level}
                    </span>
                  </div>
                  <CardDescription>
                    {(data as any).lessonsCompleted} lessons completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={(data as any).lessonsCompleted * 5} className="h-2 mb-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Current Level</span>
                    <span>Next Level</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
        
        <Link to="/languages">
          <Card className="h-full border-dashed hover:border-primary hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="text-center text-muted-foreground">
                + Add New Language
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center pb-6">
              <Button variant="ghost">
                {t("exploreLanguages")}
              </Button>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent Activity */}
      <h2 className="text-2xl font-bold mb-4">{t("recentActivity")}</h2>
      <Card>
        <CardHeader>
          <CardTitle>{t("recentActivity")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recentActivity.map(activity => (
              <div key={activity.id} className="flex items-start">
                <div className="mr-4 mt-1">
                  <span className="p-2 bg-muted rounded-full flex items-center justify-center">
                    {activity.type === "lesson" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                    )}
                    {activity.type === "quiz" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                    )}
                    {activity.type === "video" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10 7 5 3-5 3Z"/><rect width="18" height="14" x="3" y="5" rx="2"/></svg>
                    )}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(activity.date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" size="sm" className="w-full">
            View All Activity
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dashboard;
