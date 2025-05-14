
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

const MainLayout = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    toast({
      title: "Welcome to LinguaLearn",
      description: "Your AI-powered language learning companion",
      duration: 5000,
    });
  }, [toast]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
};

export default MainLayout;
