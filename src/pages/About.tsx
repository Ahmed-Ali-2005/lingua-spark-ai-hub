
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">{t("about")} LinguaLearn</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>{t("ourMission")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              LinguaLearn is dedicated to making language learning accessible, 
              engaging, and effective for everyone. We combine modern teaching 
              methodologies with cutting-edge technology to create an immersive 
              learning experience tailored to your needs.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t("ourApproach")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our methodology is based on the Common European Framework of Reference 
              for Languages (CEFR), providing a structured path from beginner (A1) 
              to proficient (C2) levels across multiple languages.
            </p>
            <p>
              Each level includes carefully curated video lessons, comprehensive 
              study materials, interactive quizzes, and essential vocabulary to 
              ensure a well-rounded learning experience.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t("aiAssistant")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our AI language assistant leverages advanced natural language 
              processing to provide instant feedback, answer questions, explain 
              grammar concepts, and even simulate conversations to help you 
              practice your speaking skills anytime, anywhere.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t("contactUs")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Have questions or suggestions? We'd love to hear from you! 
              Contact us at <a href="mailto:contact@lingualearn.example.com" className="text-primary hover:underline">contact@lingualearn.example.com</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
