
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { aiChatExamples } from "@/lib/data";
import { generateAIResponse } from "@/lib/aiService";
import { toast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant" | "system";
  timestamp: Date;
};

const AiAssistant = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState<string>(localStorage.getItem("openai_api_key") || "");
  const [showApiKeyDialog, setShowApiKeyDialog] = useState<boolean>(!localStorage.getItem("openai_api_key"));
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initial system message
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        content: "Hello! I'm your AI language learning assistant. Ask me anything about grammar, vocabulary, or request a conversation practice in any language you're learning.",
        role: "assistant",
        timestamp: new Date(),
      },
    ]);
  }, []);
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  const saveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem("openai_api_key", apiKey);
      setShowApiKeyDialog(false);
      toast({
        title: "API Key Saved",
        description: "Your OpenAI API key has been saved for this session.",
      });
    } else {
      toast({
        title: "API Key Required",
        description: "Please enter a valid OpenAI API key to use the AI assistant.",
        variant: "destructive",
      });
    }
  };
  
  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Check if API key is available
    if (!apiKey) {
      setShowApiKeyDialog(true);
      return;
    }
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    
    try {
      const response = await generateAIResponse(
        messages.concat(userMessage).map(msg => ({ 
          role: msg.role, 
          content: msg.content 
        })),
        apiKey
      );
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: "assistant",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error generating AI response:", error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I encountered an error. Please check your API key and try again.",
        role: "assistant",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (example: string) => {
    setInputValue(example);
  };
  
  const renderMessageContent = (content: string) => {
    // Convert markdown-like text to HTML (simple implementation)
    return content.split('\n').map((line, i) => (
      <p key={i} className={line.startsWith('- ') ? 'pl-4' : ''}>{line}</p>
    ));
  };
  
  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{t("assistantTitle")}</h1>
      <p className="text-muted-foreground mb-8">{t("assistantDescription")}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Chat Area */}
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <Card className="flex-1">
            <CardHeader className="border-b">
              <CardTitle>AI Language Assistant</CardTitle>
              <CardDescription>
                Powered by OpenAI
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[500px] overflow-y-auto p-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === "user"
                          ? "bg-primary text-white"
                          : "bg-muted"
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{renderMessageContent(message.content)}</div>
                      <div className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-200"></div>
                        <span className="text-muted-foreground ml-2">{t("thinking")}</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
            <CardFooter className="border-t p-4">
              <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                <Input
                  placeholder={t("askQuestion")}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button type="submit" disabled={isLoading || !inputValue.trim()}>
                  {t("send")}
                </Button>
              </form>
            </CardFooter>
          </Card>
          
          {!apiKey && (
            <Alert className="mt-4">
              <AlertDescription>
                To use the AI assistant, you need to provide an OpenAI API key.
                <Button variant="link" className="p-0 h-auto" onClick={() => setShowApiKeyDialog(true)}>
                  Set API Key
                </Button>
              </AlertDescription>
            </Alert>
          )}
        </div>
        
        {/* Examples Column */}
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>{t("askExampleTitle")}</CardTitle>
              <CardDescription>Click on any example to try it</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-col">
                {aiChatExamples.map((example, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="justify-start h-auto py-3 px-4 text-left whitespace-normal"
                    onClick={() => handleExampleClick(example)}
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* API Key Dialog */}
      <Dialog open={showApiKeyDialog} onOpenChange={setShowApiKeyDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter OpenAI API Key</DialogTitle>
            <DialogDescription>
              Your API key is stored locally and never sent to our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Input
                id="apiKey"
                placeholder="sk-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                You can get your API key from{" "}
                <a
                  href="https://platform.openai.com/api-keys"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  OpenAI's website
                </a>
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={saveApiKey}>Save Key</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AiAssistant;
