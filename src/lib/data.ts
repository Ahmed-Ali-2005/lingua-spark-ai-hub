// Language data with CEFR levels
export const languages = [
  {
    id: "french",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    description: "Learn the language of love and culture, spoken by over 275 million people worldwide.",
    popularity: 3,
    difficulty: 2,
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
  },
  {
    id: "spanish",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    description: "Learn one of the world's most widely spoken languages with over 460 million native speakers.",
    popularity: 4,
    difficulty: 1,
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80",
  },
  {
    id: "german",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    description: "Learn the language of philosophy, science, and business in central Europe.",
    popularity: 2,
    difficulty: 3,
    imageUrl: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?w=600&q=80",
  },
  {
    id: "italian",
    name: "Italian",
    nativeName: "Italiano",
    flag: "🇮🇹",
    description: "Learn the language of art, music, cuisine, and rich cultural history.",
    popularity: 2,
    difficulty: 2,
    imageUrl: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&q=80",
  },
  {
    id: "chinese",
    name: "Chinese",
    nativeName: "中文",
    flag: "🇨🇳",
    description: "Learn the world's most spoken native language with over 1.3 billion speakers.",
    popularity: 4,
    difficulty: 4,
    imageUrl: "https://images.unsplash.com/photo-1506158869768-33f4a524c4e3?w=600&q=80",
  },
  {
    id: "japanese",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    description: "Learn the fascinating language of Japan with its unique writing systems.",
    popularity: 3,
    difficulty: 4,
    imageUrl: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&q=80",
  },
  {
    id: "russian",
    name: "Russian",
    nativeName: "Русский",
    flag: "🇷🇺",
    description: "Learn the East Slavic language used across Eastern Europe and Asia.",
    popularity: 2,
    difficulty: 3,
    imageUrl: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&q=80",
  },
  {
    id: "arabic",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇦🇪",
    description: "Learn one of the world's oldest languages with rich cultural and historical significance.",
    popularity: 2,
    difficulty: 4,
    imageUrl: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=600&q=80",
  }
];

export const cefrLevels = [
  {
    id: "a1",
    name: "A1",
    label: "Beginner",
    description: "Can understand and use familiar everyday expressions and basic phrases.",
    colorClass: "level-badge-a1",
    requiredHours: "80-100"
  },
  {
    id: "a2",
    name: "A2",
    label: "Elementary",
    description: "Can communicate in simple and routine tasks requiring a direct exchange of information.",
    colorClass: "level-badge-a2",
    requiredHours: "180-200"
  },
  {
    id: "b1",
    name: "B1",
    label: "Intermediate",
    description: "Can deal with most situations likely to arise while traveling in an area where the language is spoken.",
    colorClass: "level-badge-b1",
    requiredHours: "350-400"
  },
  {
    id: "b2",
    name: "B2",
    label: "Upper Intermediate",
    description: "Can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers possible without strain for either party.",
    colorClass: "level-badge-b2",
    requiredHours: "500-600"
  },
  {
    id: "c1",
    name: "C1",
    label: "Advanced",
    description: "Can express ideas fluently and spontaneously without much obvious searching for expressions.",
    colorClass: "level-badge-c1",
    requiredHours: "700-800"
  },
  {
    id: "c2",
    name: "C2",
    label: "Proficient",
    description: "Can understand with ease virtually everything heard or read, summarizing information from different spoken and written sources.",
    colorClass: "level-badge-c2",
    requiredHours: "1000-1200"
  }
];

// Sample content for French language (to be replicated for other languages)
export const languageContent = {
  french: {
    a1: {
      videos: [
        {
          id: "fr-a1-v1",
          title: "Introduction to French Pronunciation",
          description: "Learn the basics of French pronunciation with simple examples.",
          url: "https://www.youtube.com/embed/CwpQm5mVxn0",
          duration: "9:27",
          thumbnailUrl: "https://i.ytimg.com/vi/CwpQm5mVxn0/maxresdefault.jpg",
        },
        {
          id: "fr-a1-v2",
          title: "Basic French Greetings and Introductions",
          description: "Learn how to greet people and introduce yourself in French.",
          url: "https://www.youtube.com/embed/YqsKpeYJfhw",
          duration: "12:45",
          thumbnailUrl: "https://i.ytimg.com/vi/YqsKpeYJfhw/maxresdefault.jpg",
        }
      ],
      documents: [
        {
          id: "fr-a1-d1",
          title: "French A1 Vocabulary List",
          description: "Essential vocabulary for beginners in French.",
          fileUrl: "/docs/french/a1/vocabulary.pdf",
          pages: 5,
          thumbnailUrl: "/thumbnails/french-a1-vocab.png",
        },
        {
          id: "fr-a1-d2",
          title: "French Basic Grammar Guide",
          description: "A simple guide to understanding basic French grammar.",
          fileUrl: "/docs/french/a1/grammar-guide.pdf",
          pages: 10,
          thumbnailUrl: "/thumbnails/french-a1-grammar.png",
        }
      ],
      quizzes: [
        {
          id: "fr-a1-q1",
          title: "Basic French Greetings Quiz",
          description: "Test your knowledge of basic French greetings.",
          questions: [
            {
              question: "How do you say 'Hello' in French?",
              options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
              correctAnswer: "Bonjour"
            },
            {
              question: "Which phrase means 'How are you?' in French?",
              options: ["Je m'appelle", "Comment allez-vous?", "Au revoir", "Merci beaucoup"],
              correctAnswer: "Comment allez-vous?"
            },
            {
              question: "How do you say 'Good evening' in French?",
              options: ["Bon matin", "Bonsoir", "Bonjour", "Bonne nuit"],
              correctAnswer: "Bonsoir"
            },
            {
              question: "What is the correct way to say 'Thank you very much' in French?",
              options: ["S'il vous plaît", "Excusez-moi", "Merci beaucoup", "De rien"],
              correctAnswer: "Merci beaucoup"
            },
            {
              question: "How do you say 'Goodbye' in French?",
              options: ["Bonjour", "Bonsoir", "Au revoir", "Salut"],
              correctAnswer: "Au revoir"
            }
          ]
        },
      ],
      vocabulary: [
        { word: "bonjour", translation: "hello", pronunciation: "/bɔ̃.ʒuʁ/", audioUrl: "/audio/french/bonjour.mp3" },
        { word: "au revoir", translation: "goodbye", pronunciation: "/o.ʁə.vwaʁ/", audioUrl: "/audio/french/aurevoir.mp3" },
        { word: "merci", translation: "thank you", pronunciation: "/mɛʁ.si/", audioUrl: "/audio/french/merci.mp3" },
        { word: "s'il vous plaît", translation: "please", pronunciation: "/sil.vu.plɛ/", audioUrl: "/audio/french/silvousplait.mp3" },
        { word: "excusez-moi", translation: "excuse me", pronunciation: "/ɛk.sky.ze.mwa/", audioUrl: "/audio/french/excusezmoi.mp3" },
        { word: "oui", translation: "yes", pronunciation: "/wi/", audioUrl: "/audio/french/oui.mp3" },
        { word: "non", translation: "no", pronunciation: "/nɔ̃/", audioUrl: "/audio/french/non.mp3" },
        { word: "pardon", translation: "sorry", pronunciation: "/paʁ.dɔ̃/", audioUrl: "/audio/french/pardon.mp3" },
        { word: "comment ça va?", translation: "how are you?", pronunciation: "/kɔ.mɑ̃.sa.va/", audioUrl: "/audio/french/commentcava.mp3" },
        { word: "je m'appelle", translation: "my name is", pronunciation: "/ʒə.ma.pɛl/", audioUrl: "/audio/french/jemappelle.mp3" }
      ]
    },
    // Other levels for French would be defined similarly
    b1: {
      videos: [
        {
          id: "fr-b1-v1",
          title: "French Conversation Practice - Intermediate Level",
          description: "Practical conversation examples for intermediate French learners.",
          url: "https://www.youtube.com/embed/cLkQJUq0V3I",
          duration: "18:34",
          thumbnailUrl: "https://i.ytimg.com/vi/cLkQJUq0V3I/maxresdefault.jpg",
        }
      ],
      documents: [
        {
          id: "fr-b1-d1",
          title: "Intermediate French Reading Comprehension",
          description: "Practice your reading skills with these intermediate-level texts.",
          fileUrl: "/docs/french/b1/reading.pdf",
          pages: 12,
          thumbnailUrl: "/thumbnails/french-b1-reading.png",
        }
      ],
      // Other content types would be defined here
    }
  },
  // Placeholder for other languages
  spanish: {
    a1: {
      videos: [
        {
          id: "es-a1-v1",
          title: "Spanish Pronunciation for Beginners",
          description: "Learn the basics of Spanish pronunciation with simple examples.",
          url: "https://www.youtube.com/embed/Uv35sa8cX5o",
          duration: "11:22",
          thumbnailUrl: "https://i.ytimg.com/vi/Uv35sa8cX5o/maxresdefault.jpg",
        }
      ],
      // Other content types would be defined here
    }
  }
};

export const aiChatExamples = [
  "How do I form the past tense in French?",
  "Can you explain German cases with examples?",
  "Create a dialogue about ordering food in Spanish",
  "What's the difference between 'ser' and 'estar' in Spanish?",
  "Help me practice introducing myself in Japanese",
  "Give me examples of formal vs. informal speech in Italian"
];
