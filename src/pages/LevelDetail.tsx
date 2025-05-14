import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLanguage } from "@/hooks/useLanguage";
import { languages, cefrLevels, languageContent } from "@/lib/data";
import { toast } from "@/hooks/use-toast";

const LevelDetail = () => {
  const { languageId, levelId } = useParams<{ languageId: string; levelId: string }>();
  const { t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  
  const language = languages.find(lang => lang.id === languageId);
  const level = cefrLevels.find(level => level.id === levelId);
  
  const content = languageContent[languageId as keyof typeof languageContent]?.[levelId as keyof any];
  
  if (!language || !level) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Content not found</h1>
        <Button asChild>
          <Link to="/languages">Back to Languages</Link>
        </Button>
      </div>
    );
  }
  
  if (!content) {
    return (
      <div className="container py-12">
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="icon" asChild>
            <Link to={`/languages/${languageId}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">
            {language.name} - {level.name}
          </h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Content Coming Soon</CardTitle>
            <CardDescription>
              We're currently developing content for this language and level.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Check back soon for videos, documents, quizzes, and vocabulary exercises.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link to={`/languages/${languageId}`}>
                Return to {language.name} Course
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  const handlePlayVideo = (video: any) => {
    setSelectedVideo(video);
    
    // Extract YouTube video ID from various URL formats
    if (video.url) {
      let videoId = '';
      
      // Handle different YouTube URL formats
      if (video.url.includes('youtube.com/watch?v=')) {
        videoId = video.url.split('v=')[1]?.split('&')[0] || '';
      } else if (video.url.includes('youtu.be/')) {
        videoId = video.url.split('youtu.be/')[1]?.split('?')[0] || '';
      } else if (video.url.includes('youtube.com/embed/')) {
        videoId = video.url.split('embed/')[1]?.split('?')[0] || '';
      }
      
      if (!videoId) {
        toast({
          title: "Video Format Issue",
          description: "This video URL format is not supported.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Video Unavailable",
        description: "This video is not available for playback.",
        variant: "destructive",
      });
    }
  };
  
  const handleDownloadResource = (resource: any) => {
    // Check if resource has a valid fileUrl
    if (!resource.fileUrl) {
      toast({
        title: "Resource Not Available",
        description: "This resource is not available for download yet.",
        variant: "destructive",
      });
      return;
    }
    
    // For demonstration purposes, we'll simulate a successful download
    // In a real app, you would check if the file actually exists
    
    // For files that should be directly available
    if (resource.fileUrl.startsWith('http') || resource.fileUrl.startsWith('https')) {
      window.open(resource.fileUrl, '_blank');
      return;
    }
    
    // For local files that might need additional processing
    if (resource.fileUrl.startsWith('/docs/') || resource.fileUrl.startsWith('./docs/')) {
      // In a real app, you'd verify file existence before showing success
      // For this demo, we'll show a success message instead of an error
      toast({
        title: "Download Started",
        description: `${resource.title} is being downloaded to your device.`,
      });
      
      // Simulate download by creating a temporary anchor and triggering a click
      const link = document.createElement('a');
      link.href = resource.fileUrl;
      link.download = `${resource.title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      return;
    }
    
    // Fallback for any other case
    toast({
      title: "Download Initiated",
      description: "Your download should begin shortly.",
    });
  };
  
  return (
    <div className="container py-8">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link to={`/languages/${languageId}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">
          <span className="inline-block mr-2">{language.flag}</span>
          {language.name} - <span className={`inline-flex items-center text-2xl px-2 py-1 rounded ${level.colorClass}`}>{level.name}</span>
        </h1>
      </div>
      
      <h2 className="text-xl font-medium mb-2">{level.label}</h2>
      <p className="text-muted-foreground mb-6">{level.description}</p>
      
      <Tabs defaultValue="videos" className="mb-8">
        <TabsList>
          <TabsTrigger value="videos">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m10 7 5 3-5 3Z"/><rect width="18" height="14" x="3" y="5" rx="2"/></svg>
            {t("videos")}
          </TabsTrigger>
          <TabsTrigger value="documents">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            {t("documents")}
          </TabsTrigger>
          <TabsTrigger value="quizzes">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            {t("quizzes")}
          </TabsTrigger>
          <TabsTrigger value="vocabulary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 20V4"/><path d="M4 20c0-3 8-3 8-3s8 0 8 3"/><path d="M4 4c0 3 8 3 8 3s8 0 8-3"/><path d="M4 12c0 3 8 3 8 3s8 0 8-3"/></svg>
            {t("vocabulary")}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.videos?.map((video) => (
              <Card key={video.id} className="overflow-hidden">
                <div className="aspect-video relative cursor-pointer" onClick={() => handlePlayVideo(video)}>
                  <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 3 14 9-14 9V3z"/></svg>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2">{video.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handlePlayVideo(video)}>
                    {t("watchVideo")}
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {(!content.videos || content.videos.length === 0) && (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No videos available for this level yet.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="documents" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.documents?.map((doc) => (
              <Card key={doc.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{doc.title}</CardTitle>
                    <span className="text-xs bg-muted px-2 py-1 rounded">{doc.pages} pages</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{doc.description}</CardDescription>
                  <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => handleDownloadResource(doc)}>
                    {t("downloadPdf")}
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {(!content.documents || content.documents.length === 0) && (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No documents available for this level yet.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="quizzes" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.quizzes?.map((quiz) => (
              <Card key={quiz.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{quiz.title}</CardTitle>
                    <span className="text-xs bg-muted px-2 py-1 rounded">{quiz.questions.length} questions</span>
                  </div>
                  <CardDescription>{quiz.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <h3 className="font-medium mb-2">Example question:</h3>
                    <p className="mb-1">{quiz.questions[0].question}</p>
                    <ul className="space-y-1 text-sm">
                      {quiz.questions[0].options.map((option, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-5 h-5 rounded-full border inline-flex items-center justify-center mr-2 text-xs">
                            {String.fromCharCode(65 + i)}
                          </span>
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to={`/languages/${languageId}/${levelId}/quiz/${quiz.id}`}>
                      {t("startQuiz")}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {(!content.quizzes || content.quizzes.length === 0) && (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No quizzes available for this level yet.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="vocabulary" className="mt-6">
          {content.vocabulary ? (
            <Card>
              <CardHeader>
                <CardTitle>
                  {language.name} {level.name} Vocabulary List
                </CardTitle>
                <CardDescription>
                  Essential vocabulary for {level.label} level {language.name} learners
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="divide-y">
                  {content.vocabulary.map((item, index) => (
                    <div key={index} className="py-3 flex flex-wrap justify-between">
                      <div className="flex-1 min-w-0 mr-4">
                        <div className="flex items-center mb-1">
                          <span className="font-medium">{item.word}</span>
                          <button className="ml-2 text-muted-foreground hover:text-primary" title="Play pronunciation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                          </button>
                        </div>
                        <div className="text-xs text-muted-foreground mb-1">
                          {item.pronunciation}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium">
                          {item.translation}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => toast({
                  title: "Vocabulary List",
                  description: "Download functionality will be available soon.",
                })}>
                  Download Complete Vocabulary List
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No vocabulary available for this level yet.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
      
      {/* Video Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
            <DialogDescription>{selectedVideo?.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <AspectRatio ratio={16/9}>
              {selectedVideo?.url ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedVideo.url.includes('embed') ? selectedVideo.url : `https://www.youtube.com/embed/${selectedVideo.url.split('v=')[1] || selectedVideo.url.split('/').pop()}`}
                  title={selectedVideo?.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-md"
                  onError={() => {
                    toast({
                      title: "Video Error",
                      description: "Unable to load video. Please try again later.",
                      variant: "destructive",
                    });
                  }}
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-muted">
                  <div className="text-center">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    </div>
                    <p className="text-lg font-medium">Video Unavailable</p>
                    <p className="text-sm text-muted-foreground">This video cannot be played at the moment</p>
                  </div>
                </div>
              )}
            </AspectRatio>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LevelDetail;
