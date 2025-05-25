import { useState } from 'react';

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('language-selection');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLetter, setSelectedLetter] = useState(null);
  
  // Navigation functions
  const navigateToLanguageSelection = () => {
    setCurrentPage('language-selection');
    setSelectedLanguage('');
    setSelectedLetter(null);
  };
  
  const navigateToAlphabet = (languageId) => {
    setCurrentPage('alphabet-display');
    setSelectedLanguage(languageId);
    setSelectedLetter(null);
  };
  
  const navigateToLetterDetail = (letter) => {
    setCurrentPage('letter-detail');
    setSelectedLetter(letter);
  };
  
  // Render current page
  switch (currentPage) {
    case 'alphabet-display':
      return (
        <AlphabetDisplay 
          languageId={selectedLanguage}
          onBackClick={navigateToLanguageSelection}
          onLetterClick={navigateToLetterDetail}
        />
      );
    case 'letter-detail':
      return (
        <LetterDetail 
          languageId={selectedLanguage}
          letter={selectedLetter}
          onBackClick={() => navigateToAlphabet(selectedLanguage)}
        />
      );
    case 'language-selection':
    default:
      return (
        <LanguageSelection onLanguageSelect={navigateToAlphabet} />
      );
  }
}

// Language Selection Component
const LanguageSelection = ({ onLanguageSelect }) => {
  const languages = [
    { id: 'en', name: 'English', flag: '🇺🇸' },
    { id: 'ru', name: 'Russian', flag: '🇷🇺' },
    { id: 'uz', name: 'Uzbek', flag: '🇺🇿' },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Welcome to AlphaLearn!</h1>
        <p className="text-lg text-center mb-8 text-gray-600">Choose your language to start learning the alphabet</p>
        
        <div className="grid grid-cols-1 gap-4">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => onLanguageSelect(language.id)}
              className="flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors p-4 rounded-lg border-2 border-blue-200"
            >
              <span className="text-xl font-medium text-gray-800">{language.name}</span>
              <span className="text-3xl">{language.flag}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Alphabet Display Component
const AlphabetDisplay = ({ languageId, onBackClick, onLetterClick }) => {
  const alphabets = {
    en: [
      { letter: 'A', example: 'Apple', image: 'apple', audio: 'a_sound.mp3' },
      { letter: 'B', example: 'Ball', image: 'ball', audio: 'b_sound.mp3' },
      { letter: 'C', example: 'Cat', image: 'cat', audio: 'c_sound.mp3' },
      { letter: 'D', example: 'Dog', image: 'dog', audio: 'd_sound.mp3' },
      { letter: 'E', example: 'Elephant', image: 'elephant', audio: 'e_sound.mp3' },
      { letter: 'F', example: 'Fish', image: 'fish', audio: 'f_sound.mp3' },
      { letter: 'G', example: 'Giraffe', image: 'giraffe', audio: 'g_sound.mp3' },
      { letter: 'H', example: 'House', image: 'house', audio: 'h_sound.mp3' },
      // More English letters...
    ],
    ru: [
      { letter: 'А', example: 'Арбуз', image: 'watermelon', audio: 'a_sound.mp3' },
      { letter: 'Б', example: 'Банан', image: 'banana', audio: 'b_sound.mp3' },
      { letter: 'В', example: 'Волк', image: 'wolf', audio: 'v_sound.mp3' },
      { letter: 'Г', example: 'Гриб', image: 'mushroom', audio: 'g_sound.mp3' },
      { letter: 'Д', example: 'Дом', image: 'house', audio: 'd_sound.mp3' },
      { letter: 'Е', example: 'Ель', image: 'spruce', audio: 'e_sound.mp3' },
      { letter: 'Ж', example: 'Жук', image: 'beetle', audio: 'zh_sound.mp3' },
      { letter: 'З', example: 'Зебра', image: 'zebra', audio: 'z_sound.mp3' },
      // More Russian letters...
    ],
    uz: [
      { letter: 'A', example: 'Anor', image: 'pomegranate', audio: 'a_sound.mp3' },
      { letter: 'B', example: 'Baliq', image: 'fish', audio: 'b_sound.mp3' },
      { letter: 'D', example: 'Daftar', image: 'notebook', audio: 'd_sound.mp3' },
      { letter: 'E', example: 'Echki', image: 'goat', audio: 'e_sound.mp3' },
      { letter: 'F', example: 'Fil', image: 'elephant', audio: 'f_sound.mp3' },
      { letter: 'G', example: 'Gul', image: 'flower', audio: 'g_sound.mp3' },
      { letter: 'H', example: 'Havo', image: 'air', audio: 'h_sound.mp3' },
      { letter: 'I', example: 'Ilmoq', image: 'hook', audio: 'i_sound.mp3' },
      // More Uzbek letters...
    ],
  };
  
  const currentAlphabet = alphabets[languageId] || [];
  const languageName = { en: 'English', ru: 'Russian', uz: 'Uzbek' }[languageId] || '';
  
  return (
    <div className="min-h-screen bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={onBackClick}
            className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100"
          >
            <span className="text-blue-600 font-bold">← Back</span>
          </button>
          <h1 className="text-2xl font-bold text-white">{languageName} Alphabet</h1>
          <div className="w-16"></div> {/* Empty div for flex spacing */}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {currentAlphabet.map((item) => (
            <button
              key={item.letter}
              onClick={() => onLetterClick(item.letter)}
              className="bg-white rounded-full aspect-square flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-blue-600">{item.letter}</span>
                <span className="text-sm text-gray-600">{item.example}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Letter Detail Component
const LetterDetail = ({ languageId, letter, onBackClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // This would be replaced with actual data in a real app
  const letterData = {
    en: {
      A: { example: 'Apple', image: 'apple', audio: 'a_sound.mp3', description: 'A is for Apple. Apples are crunchy and delicious fruits.' },
      B: { example: 'Ball', image: 'ball', audio: 'b_sound.mp3', description: 'B is for Ball. Balls are round toys that you can throw and catch.' },
      C: { example: 'Cat', image: 'cat', audio: 'c_sound.mp3', description: 'C is for Cat. Cats are furry pets that purr and meow.' },
      D: { example: 'Dog', image: 'dog', audio: 'd_sound.mp3', description: 'D is for Dog. Dogs are friendly animals that bark and wag their tails.' },
      E: { example: 'Elephant', image: 'elephant', audio: 'e_sound.mp3', description: 'E is for Elephant. Elephants are large animals with long trunks.' },
      // More letters...
    },
    ru: {
      А: { example: 'Арбуз', image: 'watermelon', audio: 'a_sound.mp3', description: 'А - это Арбуз. Арбуз - сочный и сладкий летний фрукт.' },
      Б: { example: 'Банан', image: 'banana', audio: 'b_sound.mp3', description: 'Б - это Банан. Бананы желтые и очень вкусные.' },
      В: { example: 'Волк', image: 'wolf', audio: 'v_sound.mp3', description: 'В - это Волк. Волки - хищные животные, которые живут в лесу.' },
      Г: { example: 'Гриб', image: 'mushroom', audio: 'g_sound.mp3', description: 'Г - это Гриб. Грибы растут в лесу после дождя.' },
      Д: { example: 'Дом', image: 'house', audio: 'd_sound.mp3', description: 'Д - это Дом. В доме живут люди.' },
      // More letters...
    },
    uz: {
      A: { example: 'Anor', image: 'pomegranate', audio: 'a_sound.mp3', description: 'A - Anor. Anor qizil va shirindir.' },
      B: { example: 'Baliq', image: 'fish', audio: 'b_sound.mp3', description: 'B - Baliq. Baliqlar suvda yashaydi.' },
      D: { example: 'Daftar', image: 'notebook', audio: 'd_sound.mp3', description: 'D - Daftar. Daftarga yozamiz.' },
      E: { example: 'Echki', image: 'goat', audio: 'e_sound.mp3', description: 'E - Echki. Echki sut beradi.' },
      F: { example: 'Fil', image: 'elephant', audio: 'f_sound.mp3', description: 'F - Fil. Fil katta hayvon.' },
      // More letters...
    },
  };
  
  const data = letterData[languageId]?.[letter];
  
  const playSound = () => {
    // In a real app, this would play the actual sound file
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 1000);
    console.log(`Playing sound for ${letter}`);
  };
  
  if (!data) {
    return (
      <div className="min-h-screen bg-red-100 flex flex-col items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold text-red-600 mb-4">Letter not found</h1>
          <button
            onClick={onBackClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full">
        <div className="flex justify-between mb-6">
          <button 
            onClick={onBackClick}
            className="bg-blue-100 text-blue-600 rounded-full px-4 py-2 font-bold hover:bg-blue-200"
          >
            ← Back
          </button>
          <h1 className="text-3xl font-bold text-blue-600">{letter}</h1>
        </div>
        
        <div className="flex flex-col items-center space-y-6">
          {/* Image placeholder */}
          <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-6xl">{data.example[0]}</span>
          </div>
          
          <h2 className="text-2xl font-bold">{data.example}</h2>
          
          <p className="text-center text-gray-600">{data.description}</p>
          
          <button 
            onClick={playSound}
            className={`bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all ${isPlaying ? 'scale-110' : ''}`}
          >
            {isPlaying ? (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="5" width="4" height="14" fill="currentColor">
                  <animate attributeName="height" values="14;7;14" dur="1s" repeatCount="indefinite" />
                  <animate attributeName="y" values="5;8.5;5" dur="1s" repeatCount="indefinite" />
                </rect>
                <rect x="14" y="5" width="4" height="14" fill="currentColor">
                  <animate attributeName="height" values="7;14;7" dur="1s" repeatCount="indefinite" />
                  <animate attributeName="y" values="8.5;5;8.5" dur="1s" repeatCount="indefinite" />
                </rect>
              </svg>
            ) : (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};