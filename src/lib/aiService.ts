
// This is a mock implementation of AI assistant functionality
// In a real app, this would connect to an API like GPT or Claude

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export const generateAIResponse = async (
  messages: ChatMessage[],
  languageId?: string
): Promise<string> => {
  console.log("Generating AI response for:", messages);
  
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const userMessage = messages[messages.length - 1].content.toLowerCase();
  
  // Simple pattern matching for demo purposes
  if (userMessage.includes("hello") || userMessage.includes("hi")) {
    return "Hello! How can I help with your language learning today?";
  }
  
  if (userMessage.includes("subjunctive") || userMessage.includes("subjunctif")) {
    return "The subjunctive mood in French is used to express doubt, desire, suggestion, or uncertainty. It's formed differently than the indicative mood. For example: 'Il faut que tu viennes' (You need to come) uses the subjunctive form of 'venir'. Would you like me to provide more examples or explain specific cases?";
  }
  
  if (userMessage.includes("por") && userMessage.includes("para")) {
    return "In Spanish, 'por' and 'para' both translate to 'for' in English, but they're used differently:\n\n'Por' expresses:\n- Reason/cause: 'Por estar enfermo' (Because of being sick)\n- Exchange/trade: 'Gracias por tu ayuda' (Thanks for your help)\n- Duration: 'Estudié por dos horas' (I studied for two hours)\n\n'Para' expresses:\n- Purpose/goal: 'Estudio para aprobar' (I study to pass)\n- Recipient: 'Este regalo es para ti' (This gift is for you)\n- Deadline: 'Lo necesito para mañana' (I need it for tomorrow)\n\nWould you like some practice exercises using these prepositions?";
  }
  
  if (userMessage.includes("conversation") || userMessage.includes("practice")) {
    if (languageId === "french") {
      return "Let's practice ordering food in French:\n\nServeur: Bonjour ! Puis-je vous aider ?\n(Hello! May I help you?)\n\nYou can respond with: 'Bonjour, je voudrais voir le menu, s'il vous plaît.'\n(Hello, I would like to see the menu, please.)\n\nServeur: Bien sûr, voici le menu. Que souhaitez-vous commander ?\n(Of course, here's the menu. What would you like to order?)\n\nTry responding with what you'd like to order!";
    } else {
      return "Let's practice a basic conversation. Imagine we're meeting for the first time.\n\nMe: Hello! My name is AI Assistant. What's your name?\n\nNow you can respond with your name and ask me how I am.";
    }
  }
  
  if (userMessage.includes("translate")) {
    if (userMessage.includes("hotel") && userMessage.includes("german")) {
      return "'I would like to book a hotel room' in German is:\n\n'Ich möchte ein Hotelzimmer buchen.'\n\nPronunciation: /ɪç ˈmœçtə aɪn hoˈtɛlˌtsɪmɐ ˈbuːxən/";
    } else {
      return "I can help translate phrases. Please specify the phrase and the target language more clearly, like 'Translate [phrase] to [language]'.";
    }
  }
  
  // Default response
  return "I'm your AI language assistant. I can help explain grammar concepts, practice conversations with you, provide translations, or answer questions about vocabulary. What would you like help with today?";
};
